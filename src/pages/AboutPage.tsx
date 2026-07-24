import React from 'react';
import { PageTab } from '../types';
import { CLINIC_INFO, DOCTOR_DETAILS } from '../data/clinicData';
import { 
  Award, 
  CheckCircle2, 
  Heart, 
  ShieldCheck, 
  Users, 
  Activity, 
  Building2, 
  Calendar,
  Stethoscope,
  Sparkles
} from 'lucide-react';

interface AboutPageProps {
  setActiveTab: (tab: PageTab) => void;
  onOpenBooking: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ setActiveTab, onOpenBooking }) => {
  return (
    <div className="space-y-12 pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-teal-900 via-teal-800 to-slate-900 text-white p-8 sm:p-12 rounded-3xl shadow-xl">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-bold text-teal-300 bg-teal-800/80 px-3 py-1 rounded-full uppercase tracking-wider border border-teal-700">
            About DIA Speciality Centre
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-heading text-white">
            Dedicated Healthcare Excellence for Chronic Metabolic & Endocrine Health
          </h1>
          <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
            Established in Kasturi Nagar, Bengaluru, DIA Speciality Diabetes and Thyroid Centre is a premier outpatient facility committed to helping patients effectively manage and reverse chronic metabolic challenges.
          </p>
        </div>
      </div>

      {/* Philosophy & Mission Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <span className="text-xs font-bold text-teal-700 bg-teal-50 px-3 py-1 rounded-full uppercase tracking-wider">
            Our Clinic Philosophy
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-heading">
            Patient-First, Evidence-Based Chronic Care
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Managing chronic conditions like Type 1 & 2 Diabetes, Hypothyroidism, or Hypertension requires more than just standard prescriptions. At DIA Speciality Centre, we believe in building long-term, trustworthy doctor-patient relationships.
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            We spend dedicated time understanding each patient’s clinical history, daily routines, dietary preferences, and stress factors to craft realistic, sustainable treatment plans that fit naturally into Indian household routines.
          </p>

          <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700 font-medium">
            <div className="flex items-center gap-2 p-3 bg-slate-50 rounded-xl border border-slate-200">
              <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0" />
              <span>27+ Years Clinical Expertise</span>
            </div>
            <div className="flex items-center gap-2 p-3 bg-slate-50 rounded-xl border border-slate-200">
              <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0" />
              <span>Empathetic Consultations</span>
            </div>
            <div className="flex items-center gap-2 p-3 bg-slate-50 rounded-xl border border-slate-200">
              <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0" />
              <span>Strict Diagnostic Accuracy</span>
            </div>
            <div className="flex items-center gap-2 p-3 bg-slate-50 rounded-xl border border-slate-200">
              <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0" />
              <span>Preventive Complication Focus</span>
            </div>
          </div>
        </div>

        <div className="relative rounded-3xl overflow-hidden shadow-lg border border-slate-200">
          <img
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80"
            alt="DIA Speciality Diabetes and Thyroid Centre Interior"
            className="w-full h-80 sm:h-96 object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <span className="text-xs font-bold text-teal-300">Clean & Hygienic Environment</span>
            <p className="text-sm font-semibold font-heading">
              Located above Swaati Medicals, Kasturi Nagar, Bengaluru
            </p>
          </div>
        </div>
      </div>

      {/* CORE VALUES */}
      <div className="bg-slate-50 p-8 sm:p-10 rounded-3xl border border-slate-200 space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold text-teal-700 bg-teal-100 px-3 py-1 rounded-full uppercase tracking-wider">
            Guiding Principles
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-heading mt-2">
            Our Core Pillars of Care
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
            <Heart className="w-8 h-8 text-rose-600 mb-3" />
            <h3 className="font-bold text-slate-900 text-base font-heading mb-2">
              Patient-First Compassion
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We listen attentively to patient concerns, demystifying medical jargon to make health management stress-free.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
            <ShieldCheck className="w-8 h-8 text-teal-600 mb-3" />
            <h3 className="font-bold text-slate-900 text-base font-heading mb-2">
              Clinical Transparency
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Clear diagnostic explanations, rational medicine prescriptions, and honest guidance regarding health progress.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
            <Activity className="w-8 h-8 text-amber-600 mb-3" />
            <h3 className="font-bold text-slate-900 text-base font-heading mb-2">
              Diagnostic Precision
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Reliance on standardized laboratory parameters (FBS, PPBS, HbA1c, TSH, Lipid Profile) for evidence-based decisions.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
            <Sparkles className="w-8 h-8 text-indigo-600 mb-3" />
            <h3 className="font-bold text-slate-900 text-base font-heading mb-2">
              Lifestyle Integrated Care
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Empowering patients with actionable dietary and exercise plans that prevent long-term diabetic vascular complications.
            </p>
          </div>
        </div>
      </div>

      {/* LEAD DOCTOR SNIPPET */}
      <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-md">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-4">
            <div className="relative h-80 rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
              <img
                src={DOCTOR_DETAILS.imageUrl}
                alt="Dr. Sridhar K"
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs font-bold text-teal-800 bg-teal-50 px-3 py-1 rounded-full uppercase tracking-wider border border-teal-200">
              Lead Practitioner
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-heading">
              {DOCTOR_DETAILS.name}
            </h3>
            <p className="text-xs text-teal-700 font-semibold">
              {DOCTOR_DETAILS.qualifications} • General Physician & Diabetologist
            </p>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {DOCTOR_DETAILS.bio}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => {
                  setActiveTab('doctor');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold px-5 py-2.5 rounded-xl transition-colors cursor-pointer"
              >
                Read Full Profile
              </button>
              <button
                onClick={onOpenBooking}
                className="bg-teal-700 hover:bg-teal-800 text-white text-xs font-semibold px-5 py-2.5 rounded-xl shadow-sm transition-colors cursor-pointer"
              >
                Book Consultation
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};
