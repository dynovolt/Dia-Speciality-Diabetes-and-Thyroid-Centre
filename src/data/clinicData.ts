import { MedicalService, DoctorProfile, Testimonial, RiskQuestion } from '../types';

export const CLINIC_INFO = {
  name: "DIA Speciality Diabetes and Thyroid Centre",
  shortName: "DIA Speciality Centre",
  tagline: "Advanced, Personalized Care for Diabetes, Thyroid, and Metabolic Health.",
  subtext: "Expert medical guidance focusing on long-term wellness in Kasturi Nagar, East of NGEF Layout, Bengaluru.",
  leadDoctor: "Dr. Sridhar K",
  phone: "+91 6364226888",
  phoneRaw: "6364226888",
  whatsappNumber: "6364226888",
  whatsappFormatted: "+91 6364226888",
  address: "No. 220, 2nd Main Road, 3rd Cross Road, Above Swaati Medicals, East of NGEF Layout, Kasturi Nagar, Bengaluru, Karnataka - 560043",
  landmark: "Above Swaati Medicals",
  area: "Kasturi Nagar, Bengaluru",
  pincode: "560043",
  opdHoursWeekdays: "Monday to Saturday: 6:30 PM – 9:00 PM",
  opdHoursSunday: "Sunday: Closed / Prior Appointment Only",
  consultationFee: "₹300 – ₹500",
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.4984180423187!2d77.651211!3d13.010502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAwJzM3LjgiTiA3N8KwMzknMDQuMyJF!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin",
  googleMapsDirectionsUrl: "https://maps.google.com/?q=No.+220,+2nd+Main+Road,+3rd+Cross+Road,+Above+Swaati+Medicals,+Kasturi+Nagar,+Bengaluru,+Karnataka+560043"
};

export const DOCTOR_DETAILS: DoctorProfile = {
  name: "Dr. Sridhar K",
  title: "Lead Specialist & Consultant Diabetologist",
  qualifications: "MBBS, General Physician & Senior Diabetologist",
  specialization: "Diabetology, Thyroid Disorders & Metabolic Endocrinology",
  experienceYears: 27,
  languages: ["English", "Hindi", "Kannada", "Tamil", "Telugu"],
  bio: "Dr. Sridhar K is a highly esteemed General Physician and Diabetologist with over 27 years of clinical practice in Bengaluru. Known for his compassionate, patient-first approach, Dr. Sridhar specializes in evidence-based management of complex Type 1 and Type 2 diabetes, juvenile diabetes, thyroid dysfunction, and related metabolic conditions. He emphasizes personalized treatment plans combined with actionable lifestyle modifications to empower patients towards sustained health.",
  consultationApproach: [
    "Comprehensive patient diagnostics and detailed history analysis",
    "Empathetic, clear communication demystifying chronic conditions",
    "Tailored medication regimens with focus on avoiding hypoglycemia",
    "Integrated lifestyle, dietary, and exercise counseling for long-term health",
    "Preventive screening for microvascular and macrovascular complications"
  ],
  opdHours: "Monday to Saturday: 6:30 PM – 9:00 PM",
  feeRange: "₹300 – ₹500",
  imageUrl: "/dia doctor image.png",
  achievements: [
    "27+ Years of dedicated clinical excellence in Bengaluru",
    "Over 15,000+ patients managed for diabetes and endocrine health",
    "Specialized focus on preventive diabetology and early thyroid detection",
    "Respected medical practitioner in East Bengaluru healthcare community"
  ]
};

export const CLINIC_SERVICES: MedicalService[] = [
  {
    id: "type-2-diabetes",
    category: "diabetes",
    title: "Type 2 Diabetes Management",
    shortDesc: "Individualized glycemic control, insulin regimen optimization, and lifestyle intervention.",
    fullDesc: "Comprehensive clinical protocols designed to optimize HbA1c levels, reduce insulin resistance, and prevent long-term cardiovascular, neurological, and renal complications through precision medication and lifestyle modification.",
    symptoms: ["Increased thirst & frequent urination", "Unexplained weight loss or fatigue", "Blurred vision", "Slow healing of cuts"],
    diagnosticTests: ["Fasting Blood Sugar (FBS)", "Postprandial Blood Sugar (PPBS)", "HbA1c (3-month average)", "Urine Microalbumin"],
    iconName: "Activity",
    isKeyHighlight: true
  },
  {
    id: "type-1-juvenile-diabetes",
    category: "diabetes",
    title: "Type 1 & Juvenile Diabetes Care",
    shortDesc: "Specialized pediatric and young adult insulin management, carb counting, and growth monitoring.",
    fullDesc: "Dedicated care for children and young adults with autoimmune diabetes. Focuses on safe basal-bolus insulin dosing, continuous glucose monitor guidance, pediatric nutritional planning, and family education.",
    symptoms: ["Sudden rapid weight loss", "Excessive thirst in children", "Bedwetting in previously dry children", "Extreme lethargy"],
    diagnosticTests: ["Anti-GAD Autoantibodies", "C-Peptide levels", "Ketone screening", "Daily Blood Glucose Log"],
    iconName: "HeartPulse",
    isKeyHighlight: true
  },
  {
    id: "diabetic-counseling",
    category: "diabetes",
    title: "Diabetic Counseling & Routine Monitoring",
    shortDesc: "Preventive foot care screening, neuropathy testing, dietary guidance, and routine lab follow-ups.",
    fullDesc: "Regular health audits to prevent silent diabetic complications including diabetic foot ulcers, peripheral neuropathy, diabetic retinopathy, and kidney disease. Includes patient education on self-blood glucose monitoring.",
    symptoms: ["Numbness or tingling in feet/hands", "Burning sensation in legs", "Frequent skin infections"],
    diagnosticTests: ["Biothesiometry (Vibration Perception)", "Monofilament Neuropathy Test", "Kidney Function Test (KFT)", "Lipid Profile"],
    iconName: "ShieldCheck",
    isKeyHighlight: true
  },
  {
    id: "thyroid-care",
    category: "thyroid",
    title: "Thyroid Care & Management",
    shortDesc: "Precise hormonal balance for Hypothyroidism (underactive) and Hyperthyroidism (overactive).",
    fullDesc: "Expert evaluation and medical titration for thyroid gland disorders. Treatment balances T3, T4, and TSH levels to alleviate systemic fatigue, metabolic slowness, mood fluctuations, and hair/skin changes.",
    symptoms: ["Unexplained weight gain or loss", "Constant fatigue or restlessness", "Cold or heat intolerance", "Hair thinning or dry skin"],
    diagnosticTests: ["Total T3, Total T4", "Ultra-sensitive TSH", "Anti-TPO Autoantibody Assay", "Thyroid Ultrasound Guidance"],
    iconName: "Droplets",
    isKeyHighlight: true
  },
  {
    id: "pediatric-thyroid",
    category: "thyroid",
    title: "Pediatric Thyroid Disorders",
    shortDesc: "Specialized endocrine monitoring for growth milestones, congenital and juvenile thyroid imbalances.",
    fullDesc: "Careful diagnostic screening and hormone replacement for growth retardation, delayed puberty, or academic fatigue in young children caused by thyroid gland dysfunctions.",
    symptoms: ["Stunted physical growth", "Poor concentration in school", "Constipation and dry skin in children"],
    diagnosticTests: ["Pediatric TSH Panel", "Free T4 Test", "Bone Age Assessment Advice"],
    iconName: "Stethoscope",
    isKeyHighlight: false
  },
  {
    id: "vitamin-d-deficiency",
    category: "metabolic",
    title: "Vitamin D & Bone Health Management",
    shortDesc: "Targeted supplementation protocols for joint pains, fatigue, and metabolic bone strength.",
    fullDesc: "Diagnosis and correction of severe Vitamin D and Calcium deficiencies common in urban populations. Helps prevent early osteoporosis, generalized body pain, and muscular weakness.",
    symptoms: ["Persistent bone & lower back pain", "Muscle aches and weakness", "Frequent fatigue"],
    diagnosticTests: ["Serum 25-Hydroxy Vitamin D", "Serum Calcium & Phosphorus", "Parathyroid Hormone (PTH) if indicated"],
    iconName: "Sparkles",
    isKeyHighlight: true
  },
  {
    id: "hypertension-management",
    category: "metabolic",
    title: "Hypertension (Blood Pressure) Control",
    shortDesc: "Cardiovascular risk reduction, blood pressure monitoring, and renal protection strategies.",
    fullDesc: "Co-management of high blood pressure alongside diabetes and metabolic syndrome. Protects target organs including the heart, brain, and kidneys from silent hypertensive damage.",
    symptoms: ["Frequent morning headaches", "Dizziness or chest discomfort", "Shortness of breath on mild exertion"],
    diagnosticTests: ["In-clinic BP monitoring", "ECG screening", "Serum Creatinine & Electrolytes"],
    iconName: "HeartPulse",
    isKeyHighlight: true
  },
  {
    id: "obesity-lipid-disorders",
    category: "metabolic",
    title: "Obesity & Lipid Disorders",
    shortDesc: "Medical weight management, cholesterol control (high triglycerides/LDL), and fatty liver guidance.",
    fullDesc: "Holistic metabolic interventions to lower dyslipidemia, reduce visceral abdominal fat, manage non-alcoholic fatty liver disease (NAFLD), and decrease long-term heart disease risks.",
    symptoms: ["Increased waist circumference", "High cholesterol levels", "Sluggish metabolism"],
    diagnosticTests: ["Fasting Lipid Profile (LDL, HDL, Triglycerides)", "Liver Function Test (LFT)", "USG Abdomen Guidance"],
    iconName: "Activity",
    isKeyHighlight: false
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Ramesh Narayanan",
    location: "Kasturi Nagar, Bengaluru",
    condition: "Type 2 Diabetes & Hypertension",
    rating: 5,
    comment: "Dr. Sridhar K is an exceptional diabetologist. My HbA1c came down from 9.2% to 6.4% in just 5 months without heavy medication, purely due to his precise prescription and diet guidance. Very soft-spoken doctor!",
    date: "June 2026"
  },
  {
    id: "t2",
    name: "Priya V. Sundaram",
    location: "Ramamurthy Nagar, Bengaluru",
    condition: "Hypothyroidism & Vitamin D Deficiency",
    rating: 5,
    comment: "I suffered from severe fatigue and hair loss for over a year. Dr. Sridhar accurately diagnosed my thyroid imbalance and Vitamin D levels. Within 6 weeks of starting treatment at DIA Centre, I feel energetic again.",
    date: "May 2026"
  },
  {
    id: "t3",
    name: "Syed M. Rizwan",
    location: "Banaswadi, Bengaluru",
    condition: "Type 2 Diabetes",
    rating: 5,
    comment: "The clinic location above Swaati Medicals in Kasturi Nagar is very convenient and the evening OPD timing (6:30 PM to 9 PM) suits working professionals perfectly. Dr. Sridhar listens patiently to every concern.",
    date: "April 2026"
  },
  {
    id: "t4",
    name: "Lakshmi R. Rao",
    location: "Kasturi Nagar, Bengaluru",
    condition: "Juvenile Diabetes (Daughter)",
    rating: 5,
    comment: "Finding an empathetic doctor for my 12-year-old daughter's Type 1 diabetes was crucial. Dr. Sridhar explained insulin injection techniques so kindly and made us feel confident and reassured.",
    date: "March 2026"
  }
];

export const RISK_QUESTIONS: RiskQuestion[] = [
  {
    id: 1,
    question: "What is your age group?",
    description: "Age is a key risk indicator for metabolic insulin resistance.",
    options: [
      { label: "Under 35 years", score: 0 },
      { label: "35 – 49 years", score: 1, subtext: "Slightly elevated risk" },
      { label: "50 years or older", score: 2, subtext: "Higher risk bracket" }
    ]
  },
  {
    id: 2,
    question: "Do you have a family history of Diabetes?",
    description: "Genetics play a strong role in Type 2 Diabetes and Thyroid imbalances.",
    options: [
      { label: "No family history of diabetes", score: 0 },
      { label: "One parent or sibling has diabetes", score: 1 },
      { label: "Both parents or multiple close relatives have diabetes", score: 2 }
    ]
  },
  {
    id: 3,
    question: "How would you describe your daily physical activity level?",
    description: "Regular physical movement improves cell insulin sensitivity.",
    options: [
      { label: "Physically active (30+ mins exercise 5 days/week)", score: 0 },
      { label: "Moderately active (Occasional walks, light household work)", score: 1 },
      { label: "Sedentary (Desk job, limited physical movement)", score: 2 }
    ]
  },
  {
    id: 4,
    question: "Have you been diagnosed with High Blood Pressure or High Cholesterol?",
    description: "Hypertension and dyslipidemia frequently co-exist with Diabetes.",
    options: [
      { label: "No, blood pressure and lipids are normal", score: 0 },
      { label: "Borderline / Pre-hypertensive", score: 1 },
      { label: "Yes, currently taking blood pressure or cholesterol medication", score: 2 }
    ]
  },
  {
    id: 5,
    question: "Are you experiencing any of these common metabolic symptoms?",
    description: "Multiple symptoms indicate the need for prompt clinical lab screening.",
    options: [
      { label: "None of these symptoms", score: 0 },
      { label: "Occasional fatigue, dry mouth, or unexplained weight changes", score: 1 },
      { label: "Frequent urination, excessive thirst, tingling in feet, or blurred vision", score: 2 }
    ]
  }
];

export const FAQS = [
  {
    question: "What are the OPD timings at DIA Speciality Centre in Kasturi Nagar?",
    answer: "Our clinic OPD operates Monday through Saturday from 6:30 PM to 9:00 PM. On Sundays, consultations are available by prior appointment or closed. You can pre-book your evening slot online or via WhatsApp."
  },
  {
    question: "What is the consultation fee for Dr. Sridhar K?",
    answer: "The consultation fee ranges between ₹300 and ₹500 depending on whether it is a routine follow-up or comprehensive initial diagnostic review."
  },
  {
    question: "Where is the clinic located in Kasturi Nagar?",
    answer: "We are located at No. 220, 2nd Main Road, 3rd Cross Road, Above Swaati Medicals, East of NGEF Layout, Kasturi Nagar, Bengaluru - 560043. Being right above Swaati Medicals makes purchasing prescribed medicines seamless."
  },
  {
    question: "Do I need to fast before coming for a diabetes consultation?",
    answer: "If you plan to undergo fresh blood sugar testing (FBS) or lipid profile on the day, 8-10 hours of overnight fasting is recommended. However, for initial consultation and medical review, you can visit during evening OPD (6:30 PM - 9:00 PM) with your existing past lab reports."
  },
  {
    question: "Does Dr. Sridhar K treat both Type 1 and Type 2 Diabetes?",
    answer: "Yes! Dr. Sridhar K has 27+ years of experience managing Type 1 (Juvenile) Diabetes, Type 2 Diabetes, Gestational Diabetes, as well as complex Thyroid and metabolic disorders."
  }
];
