# 🩺 DIA Speciality Diabetes & Thyroid Centre
> **Empowering Lives, Restoring Balance: Dedicated, Empathetic Care for Chronic Metabolic Health.**

---

## 🌟 Our Mission & Cause

Chronic metabolic diseases like **Diabetes** and **Thyroid disorders** are not just clinical diagnoses; they are daily, lifelong battles that impact entire families. In urban communities today, the silent progression of Type 2 Diabetes, the complexity of autoimmune Juvenile (Type 1) Diabetes, and under-diagnosed Thyroid conditions demand more than just quick prescriptions. 

**DIA Speciality Diabetes and Thyroid Centre** was founded on a singular, powerful cause: **to bridge the gap between advanced medical science and compassionate, patient-first care.** Led by **Dr. Sridhar K**, a veteran clinician with over 27 years of dedicated practice, our clinic in Kasturi Nagar, Bengaluru, focuses on:
* **Preventive Diabetology**: Catching insulin resistance early to avoid long-term microvascular and macrovascular complications.
* **Empowering Families**: Providing detailed basal-bolus counseling, carb-counting guidance, and continuous support for children dealing with juvenile diabetes.
* **Hormonal and Metabolic Harmony**: Normalizing thyroid dysfunction, Vitamin D deficiency, and hypertension through evidence-based, tailored medicine.
* **Accessibility**: Making premium clinical expertise affordable and accessible to working professionals and local residents.

---

## 💻 Tech Stack & Architecture

This application is built with a modern, high-performance tech stack designed to deliver a smooth, responsive, and empathetic patient experience.

* **Frontend**: React 19, TypeScript, and Vite.
* **Styling**: Tailwind CSS v4 for clean, accessible layouts and responsive design.
* **Animations**: Framer Motion (`motion`) for smooth, reassuring UI transitions.
* **Backend API**: Express server managing appointment registration and local API routes.
* **AI Integration**: Powered by Google Gemini (`gemini-2.5-flash`) via the `@google/genai` SDK to provide an interactive, educational AI Health Assistant.

---

## 🎯 Key Application Features

1. **Patient Education Hub**: Complete insights on metabolic services, symptoms, and diagnostic tests.
2. **Interactive Diabetes Risk Estimator**: A clinically guided self-assessment tool based on age, family history, lifestyle, and symptoms to encourage early screening.
3. **Seamless Appointment Booking**: A user-friendly modal that lets patients request consultation slots directly, passing clinical risk context if available.
4. **AI-Powered Clinic Assistant**: A virtual assistant trained on clinic guidelines to answer patient questions about symptoms, diet, and clinic operations, urging in-person consultation for diagnosis.

---

## 🚀 Running Locally

Follow these instructions to run the application on your local machine:

### 1. Prerequisites
Ensure you have **Node.js** (v18+) installed.

### 2. Install Dependencies
Clone the repository, navigate to the directory, and install the required npm packages:
```bash
npm install
```

### 3. Environment Variables (Optional)
The AI Health Assistant uses a Gemini API key. If you wish to use the live AI model locally:
1. Create a `.env` file in the root directory.
2. Add your Google Gemini API key:
   ```env
   GEMINI_API_KEY="your_api_key_here"
   ```
*(Note: If no API key is provided, the application will fallback gracefully to a preset clinical helper response).*

### 4. Run the Server
Launch the development server:
```bash
npm run dev
```
Once started, open your browser and navigate to **`http://localhost:3000`** to view the application.

---

<div align="center">
  <p>🏥 <strong>DIA Speciality Diabetes and Thyroid Centre</strong></p>
  <p>No. 220, 2nd Main Road, 3rd Cross Road, Above Swaati Medicals, Kasturi Nagar, Bengaluru - 560043</p>
</div>
