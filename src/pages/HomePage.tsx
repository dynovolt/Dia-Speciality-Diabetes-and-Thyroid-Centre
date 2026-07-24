import React from 'react';
import { PageTab } from '../types';
import { CLINIC_INFO, CLINIC_SERVICES, DOCTOR_DETAILS, TESTIMONIALS } from '../data/clinicData';
import { 
  Activity, 
  Calendar, 
  Clock, 
  MapPin, 
  ShieldCheck, 
  Award, 
  CheckCircle2, 
  ArrowRight, 
  Star, 
  Sparkles, 
  HeartPulse, 
  Droplets, 
  UserCheck, 
  Phone,
  Stethoscope
} from 'lucide-react';

interface HomePageProps {
  setActiveTab: (tab: PageTab) => void;
  onOpenBooking: () => void;
  onOpenAiAssistant: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  setActiveTab,
  onOpenBooking,
  onOpenAiAssistant
}) => {
  return (
    <div className="space-y-16 pb-12">
      
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 text-white overflow-hidden py-16 sm:py-24 rounded-b-3xl shadow-xl">
        {/* Subtle background glow */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Headline & CTAs */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 bg-teal-900/80 text-teal-300 border border-teal-700/60 text-xs font-semibold px-3.5 py-1.5 rounded-full shadow-xs">
                <MapPin className="w-3.5 h-3.5 text-teal-400" />
                <span>Kasturi Nagar, East Bengaluru • Speciality Clinic</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight font-heading leading-tight text-white">
                {CLINIC_INFO.tagline}
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
                {CLINIC_INFO.subtext} Led by <strong className="text-teal-300">{DOCTOR_DETAILS.name}</strong>, offering <strong className="text-white">{DOCTOR_DETAILS.experienceYears}+ years</strong> of compassionate, evidence-based medical care.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={onOpenBooking}
                  className="bg-teal-600 hover:bg-teal-500 text-white font-semibold text-sm sm:text-base px-6 py-3.5 rounded-xl shadow-lg hover:shadow-teal-600/30 transition-all flex items-center gap-2 cursor-pointer transform hover:-translate-y-0.5"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Book a Consultation</span>
                </button>

                <button
                  onClick={() => {
                    setActiveTab('risk-estimator');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="bg-slate-800/90 hover:bg-slate-700 text-teal-300 border border-teal-800 font-medium text-sm sm:text-base px-5 py-3.5 rounded-xl transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>Diabetes Risk Self-Test</span>
                </button>
              </div>

              {/* Quick Info Badges */}
              <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 border-t border-slate-800 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span><strong>Mon–Sat OPD:</strong><br />6:30 PM – 9:00 PM</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-teal-400 flex-shrink-0" />
                  <span><strong>Consultation Fee:</strong><br />{CLINIC_INFO.consultationFee}</span>
                </div>
                <div className="col-span-2 sm:col-span-1 flex items-center gap-2">
                  <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span><strong>Direct Helpline:</strong><br />{CLINIC_INFO.phone}</span>
                </div>
              </div>
            </div>

            {/* Right Column: Doctor & Clinic Hero Card */}
            <div className="lg:col-span-5">
              <div className="relative bg-gradient-to-b from-slate-800/90 to-slate-900/90 rounded-3xl p-6 border border-slate-700/80 shadow-2xl backdrop-blur-md">
                <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden mb-5 border border-slate-700 group">
                  <img
                    src={DOCTOR_DETAILS.imageUrl}
                    alt="Dr. Sridhar K - Diabetologist"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-102"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />

                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="bg-teal-700/90 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                      Lead Specialist
                    </span>
                    <h3 className="text-xl font-bold font-heading mt-1">
                      {DOCTOR_DETAILS.name}
                    </h3>
                    <p className="text-xs text-slate-300">
                      {DOCTOR_DETAILS.qualifications}
                    </p>
                  </div>
                </div>

                <div className="space-y-2 text-xs text-slate-300">
                  <div className="flex items-center justify-between p-2.5 bg-slate-800/80 rounded-xl">
                    <span className="text-slate-400">Clinical Experience:</span>
                    <span className="font-bold text-teal-300">{DOCTOR_DETAILS.experienceYears}+ Years Practice</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 bg-slate-800/80 rounded-xl">
                    <span className="text-slate-400">Languages Spoken:</span>
                    <span className="font-semibold text-slate-200">{DOCTOR_DETAILS.languages.join(', ')}</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 bg-slate-800/80 rounded-xl">
                    <span className="text-slate-400">Location Landmark:</span>
                    <span className="font-semibold text-slate-200">{CLINIC_INFO.landmark}</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800 flex justify-between items-center">
                  <span className="text-[11px] text-slate-400">Kasturi Nagar, Bengaluru</span>
                  <button
                    onClick={() => {
                      setActiveTab('doctor');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-xs text-teal-400 font-semibold hover:underline flex items-center gap-1"
                  >
                    <span>View Doctor Profile</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CORE VALUE PROPOSITIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold text-teal-700 bg-teal-50 px-3 py-1 rounded-full uppercase tracking-wider border border-teal-200">
            Why Choose DIA Speciality
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-heading mt-2">
            Specialized Care Designed for Long-Term Wellness
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            We focus on root-cause diagnosis, individualized medication protocols, and holistic lifestyle integration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center font-bold mb-4">
              <Activity className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-base font-heading mb-2">
              Specialized Diabetology & Endocrinology
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Targeted clinical care for Type 1, Type 2, Juvenile, and Gestational Diabetes alongside complex Thyroid imbalances.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold mb-4">
              <UserCheck className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-base font-heading mb-2">
              Individualized Treatment Plans
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              No one-size-fits-all prescriptions. Every patient receives a tailored medical regimen based on precise lab diagnostic trends.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold mb-4">
              <HeartPulse className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-base font-heading mb-2">
              Holistic Lifestyle & Diet Guidance
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Practical nutritional counseling adapted to traditional South Indian and pan-Indian diets for easy long-term compliance.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-800 flex items-center justify-center font-bold mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-base font-heading mb-2">
              Preventive Complication Screening
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Proactive audits for diabetic neuropathy, kidney health, blood pressure control, Vitamin D deficiency, and dyslipidemia.
            </p>
          </div>
        </div>
      </section>

      {/* AT-A-GLANCE SERVICES GRID */}
      <section className="bg-slate-100/70 py-12 rounded-3xl max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border border-slate-200/70">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-8">
          <div>
            <span className="text-xs font-bold text-teal-700 bg-teal-100 px-3 py-1 rounded-full uppercase tracking-wider">
              Clinical Specializations
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-heading mt-2">
              Comprehensive Services At-a-Glance
            </h2>
          </div>
          <button
            onClick={() => {
              setActiveTab('services');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-sm font-semibold text-teal-700 hover:text-teal-800 flex items-center gap-1 group cursor-pointer"
          >
            <span>Explore All Treatments</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CLINIC_SERVICES.slice(0, 6).map((service) => (
            <div 
              key={service.id}
              className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-teal-300 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-3">
                  <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border uppercase tracking-wide ${
                    service.category === 'diabetes'
                      ? 'bg-teal-50 text-teal-800 border-teal-200'
                      : service.category === 'thyroid'
                      ? 'bg-indigo-50 text-indigo-800 border-indigo-200'
                      : 'bg-amber-50 text-amber-800 border-amber-200'
                  }`}>
                    {service.category === 'diabetes' ? 'Diabetes Care' : service.category === 'thyroid' ? 'Thyroid Care' : 'Metabolic Care'}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-slate-100 text-teal-800 flex items-center justify-center">
                    <Activity className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="font-bold text-slate-900 text-lg font-heading mb-2">
                  {service.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {service.shortDesc}
                </p>

                <div className="space-y-1 text-xs text-slate-500 mb-4">
                  <div className="font-semibold text-slate-700 text-[11px]">Key Focus Symptoms:</div>
                  <div className="flex flex-wrap gap-1">
                    {service.symptoms.slice(0, 2).map((sym, idx) => (
                      <span key={idx} className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded text-[11px]">
                        • {sym}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => {
                    setActiveTab('services');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-xs font-semibold text-teal-700 hover:underline"
                >
                  View Full Care Plan
                </button>
                <button
                  onClick={onOpenBooking}
                  className="text-xs font-semibold bg-teal-700 hover:bg-teal-800 text-white px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                >
                  Book Slot
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DIABETES RISK ESTIMATOR PROMOTIONAL TEASER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-teal-900 via-teal-800 to-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-1.5 bg-teal-800/80 text-teal-200 text-xs font-semibold px-3 py-1 rounded-full border border-teal-700/60">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Patient Self-Assessment Tool</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-white">
                Check Your Diabetes & Metabolic Risk Level Online
              </h2>
              <p className="text-sm text-slate-200 leading-relaxed max-w-xl">
                Are you experiencing unexplained fatigue, thirst, or have a family history of diabetes? Take our 2-minute clinical screening tool to calculate your risk level and receive tailored lifestyle advice.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => {
                    setActiveTab('risk-estimator');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="bg-white hover:bg-slate-100 text-teal-950 font-bold text-sm px-6 py-3.5 rounded-xl shadow-lg transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Start Free Diabetes Risk Self-Test</span>
                  <ArrowRight className="w-4 h-4 text-teal-700" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-4 bg-teal-950/60 p-6 rounded-2xl border border-teal-700/60 space-y-3">
              <div className="text-xs font-bold text-teal-300 uppercase tracking-wider">
                Assessment Parameters
              </div>
              <ul className="space-y-2 text-xs text-slate-200">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400" />
                  <span>Age & Hereditary Genetic History</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400" />
                  <span>Physical Movement & Exercise Ratio</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400" />
                  <span>Hypertension & Lipid Co-factors</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400" />
                  <span>Metabolic Insulin Resistance Symptoms</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PATIENT TESTIMONIALS & TRUST SIGNALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold text-teal-700 bg-teal-50 px-3 py-1 rounded-full uppercase tracking-wider border border-teal-200">
            Patient Feedback
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-heading mt-2">
            Trusted by Families Across Bengaluru
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            Real stories from patients managing diabetes, thyroid disorders, and metabolic health.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-xs text-slate-700 italic leading-relaxed">
                  "{t.comment}"
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100">
                <div className="font-bold text-slate-900 text-sm font-heading">
                  {t.name}
                </div>
                <div className="text-[11px] text-teal-700 font-medium">
                  {t.condition}
                </div>
                <div className="text-[10px] text-slate-400">
                  {t.location} • {t.date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LOCATION & OPD TIMINGS QUICK CARD */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              <Clock className="w-3.5 h-3.5 text-amber-600" />
              <span>OPD Timings: Monday to Saturday 6:30 PM – 9:00 PM</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading">
              Visit DIA Speciality Centre in Kasturi Nagar
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Address: No. 220, 2nd Main Road, 3rd Cross Road, Above Swaati Medicals, Kasturi Nagar, Bengaluru - 560043.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
            <button
              onClick={onOpenBooking}
              className="flex-1 lg:flex-initial bg-teal-700 hover:bg-teal-800 text-white font-semibold text-sm px-6 py-3 rounded-xl shadow-md transition-colors cursor-pointer"
            >
              Book Appointment
            </button>
            <button
              onClick={() => {
                setActiveTab('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex-1 lg:flex-initial bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-sm px-5 py-3 rounded-xl transition-colors cursor-pointer"
            >
              View Google Map
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
