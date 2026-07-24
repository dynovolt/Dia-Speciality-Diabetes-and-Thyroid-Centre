import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Memory store for appointment requests
  const appointments: Array<{
    id: string;
    patientName: string;
    phone: string;
    age?: string;
    service: string;
    preferredDate: string;
    preferredTime: string;
    notes?: string;
    status: 'Confirmed' | 'Pending';
    createdAt: string;
  }> = [];

  // API Routes
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", clinic: "DIA Speciality Diabetes and Thyroid Centre" });
  });

  app.get("/api/clinic-info", (_req, res) => {
    res.json({
      name: "DIA Speciality Diabetes and Thyroid Centre",
      leadSpecialist: "Dr. Sridhar K",
      qualifications: "General Physician & Diabetologist",
      experience: "27+ years of clinical practice",
      languages: ["English", "Hindi", "Kannada", "Tamil"],
      address: "No. 220, 2nd Main Road, 3rd Cross Road, Above Swaati Medicals, East of NGEF Layout, Kasturi Nagar, Bengaluru, Karnataka, 560043",
      landmark: "Above Swaati Medicals",
      phone: "+91 6364226888",
      whatsapp: "6364226888",
      opdHours: "Monday to Saturday: 6:30 PM – 9:00 PM | Sunday: Prior Appointment / Closed",
      consultationFee: "₹300 – ₹500"
    });
  });

  // Appointment creation endpoint
  app.post("/api/book-appointment", (req, res) => {
    const { patientName, phone, age, service, preferredDate, preferredTime, notes } = req.body;
    
    if (!patientName || !phone || !preferredDate || !preferredTime) {
      return res.status(400).json({ error: "Missing required fields (patientName, phone, preferredDate, preferredTime)" });
    }

    const newAppointment = {
      id: "DIA-" + Math.floor(100000 + Math.random() * 900000),
      patientName,
      phone,
      age: age || "N/A",
      service: service || "General Diabetology & Thyroid Consultation",
      preferredDate,
      preferredTime,
      notes: notes || "",
      status: "Confirmed" as const,
      createdAt: new Date().toISOString()
    };

    appointments.unshift(newAppointment);
    res.status(201).json({
      success: true,
      message: "Appointment request registered successfully!",
      appointment: newAppointment
    });
  });

  app.get("/api/appointments", (_req, res) => {
    res.json({ appointments });
  });

  // Server-side Gemini AI Health Assistant endpoint
  app.post("/api/ai-assistant", async (req, res) => {
    const { message, history = [] } = req.body;

    if (!message || typeof message !== "string") {
      return res.status(400).json({ error: "A message string is required." });
    }

    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      // Graceful fallback response when API key is missing
      return res.json({
        reply: "Welcome to DIA Speciality Diabetes and Thyroid Centre in Kasturi Nagar! For direct consultation with Dr. Sridhar K (27+ years experience), please call or WhatsApp us at +91 6364226888 or book an appointment online. OPD Timings: Mon-Sat 6:30 PM to 9:00 PM.",
        disclaimer: "Note: This is an informational assistant. For personalized medical diagnosis and prescriptions, please visit Dr. Sridhar K at our clinic."
      });
    }

    try {
      const ai = new GoogleGenAI({ apiKey });
      const systemInstruction = `
You are the AI Healthcare Assistant for "DIA Speciality Diabetes and Thyroid Centre" located in Kasturi Nagar, Bengaluru (Above Swaati Medicals).
Lead Physician: Dr. Sridhar K (General Physician & Diabetologist, 27+ years experience).
Clinic Phone & WhatsApp: +91 6364226888
OPD Hours: Monday to Saturday, 6:30 PM to 9:00 PM (Sunday Closed / Prior Appointment).
Consultation Fee: ₹300 - ₹500.

Your Goal:
- Answer user queries about Diabetes (Type 1, Type 2, Juvenile), Thyroid Disorders (Hypo/Hyperthyroidism), Vitamin D, Hypertension, Obesity, and Lipid Disorders.
- Provide empathetic, informative, science-backed advice on symptoms, blood sugar testing (Fasting < 100 mg/dL, HbA1c < 5.7% normal), diet tips (low glycemic index, fiber-rich, portion control), and lifestyle guidance.
- ALWAYS encourage patients to schedule a clinical consultation with Dr. Sridhar K for an accurate diagnosis and customized prescription.
- ALWAYS append a brief medical disclaimer at the end of responses.
- Keep responses concise, clear, reassuring, and structured with bullet points where helpful.
`;

      const contents = [
        { role: 'user', parts: [{ text: systemInstruction }] },
        ...history.map((h: { sender: 'user' | 'bot'; text: string }) => ({
          role: h.sender === 'user' ? 'user' : 'model',
          parts: [{ text: h.text }]
        })),
        { role: 'user', parts: [{ text: message }] }
      ];

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents,
      });

      const replyText = response.text || "Thank you for reaching out to DIA Speciality Centre. Please consult Dr. Sridhar K at our Kasturi Nagar clinic for personal medical care.";

      res.json({
        reply: replyText,
        disclaimer: "Disclaimer: Information provided is for educational guidance only and does not replace in-person diagnostic medical evaluation by Dr. Sridhar K."
      });

    } catch (error: any) {
      console.error("Gemini API Error:", error?.message || error);
      res.json({
        reply: "DIA Speciality Diabetes & Thyroid Centre is dedicated to your health in Kasturi Nagar. Dr. Sridhar K specializes in comprehensive Diabetes, Thyroid, and Metabolic care. You can reach our front desk at +91 6364226888 for appointments.",
        disclaimer: "Please contact our clinic directly for immediate consultation booking."
      });
    }
  });

  // Vite middleware setup
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
