import React from 'react';
import { PageTab } from '../types';
import { DOCTOR_DETAILS, CLINIC_INFO, TESTIMONIALS } from '../data/clinicData';
import { 
  Award, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  Globe, 
  Heart, 
  MapPin, 
  Phone, 
  ShieldCheck, 
  Star, 
  User,
  Stethoscope
} from 'lucide-react';

interface DoctorPageProps {
  onOpenBooking: () => void;
}

export const DoctorPage: React.FC<DoctorPageProps> = ({ onOpenBooking }) => {
  return (
    <div className="space-y-12 pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
      
      {/* Doctor Hero Card */}
      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl overflow-hidden relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Portrait Image */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border-2 border-slate-100 shadow-lg group">
              <img
                src={DOCTOR_DETAILS.imageUrl}
                alt="Dr. Sridhar K - Senior Diabetologist"
                className="w-full h-96 sm:h-[450px] object-cover object-top transition-transform duration-500 group-hover:scale-102"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />

              <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                <span className="bg-teal-700/90 text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Lead Physician & Diabetologist
                </span>
                <h2 className="text-2xl font-bold font-heading">
                  {DOCTOR_DETAILS.name}
                </h2>
                <p className="text-xs text-slate-200">
                  {DOCTOR_DETAILS.qualifications}
                </p>
              </div>
            </div>
          </div>

          {/* Details & Credentials */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-800 text-xs font-bold px-3 py-1 rounded-full border border-teal-200 uppercase tracking-wider mb-2">
                <Award className="w-3.5 h-3.5 text-teal-700" />
                <span>27+ Years Clinical Excellence</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
                {DOCTOR_DETAILS.name}
              </h1>
              <p className="text-sm font-semibold text-teal-700 mt-1">
                {DOCTOR_DETAILS.specialization}
              </p>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              {DOCTOR_DETAILS.bio}
            </p>

            {/* Quick Stat Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
              <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200">
                <div className="text-slate-400 font-medium">Experience</div>
                <div className="font-bold text-slate-900 text-base font-heading">27+ Years</div>
              </div>

              <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200">
                <div className="text-slate-400 font-medium">Languages Spoken</div>
                <div className="font-bold text-slate-900 text-xs font-heading">
                  {DOCTOR_DETAILS.languages.join(', ')}
                </div>
              </div>

              <div className="col-span-2 sm:col-span-1 bg-slate-50 p-3 rounded-2xl border border-slate-200">
                <div className="text-slate-400 font-medium">OPD Timings</div>
                <div className="font-bold text-teal-700 text-xs font-heading">Mon–Sat 6:30PM - 9PM</div>
              </div>
            </div>

            {/* Consultation Fee & Actions */}
            <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100">
              <div>
                <span className="text-xs text-slate-500">Consultation Fee:</span>
                <div className="text-lg font-bold text-slate-900 font-heading">
                  {CLINIC_INFO.consultationFee}
                </div>
              </div>

              <button
                onClick={onOpenBooking}
                className="bg-teal-700 hover:bg-teal-800 text-white font-semibold text-sm px-6 py-3 rounded-xl shadow-md transition-all flex items-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Consultation Slot</span>
              </button>
            </div>

          </div>

        </div>
      </div>

      {/* CONSULTATION APPROACH */}
      <div className="bg-slate-50 p-8 sm:p-10 rounded-3xl border border-slate-200 space-y-6">
        <div className="max-w-2xl">
          <span className="text-xs font-bold text-teal-700 bg-teal-100 px-3 py-1 rounded-full uppercase tracking-wider">
            Patient Care Philosophy
          </span>
          <h2 className="text-2xl font-bold text-slate-900 font-heading mt-2">
            Dr. Sridhar K's Clinical Consultation Approach
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {DOCTOR_DETAILS.consultationApproach.map((item, idx) => (
            <div key={idx} className="bg-white p-4 rounded-2xl border border-slate-200/90 flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-teal-100 text-teal-800 font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                {idx + 1}
              </span>
              <span className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* PATIENT TESTIMONIALS ABOUT DOCTOR */}
      <div className="space-y-6">
        <div className="text-center max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-slate-900 font-heading">
            What Patients Say About Dr. Sridhar K
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Authentic experiences from long-term clinic visitors in Kasturi Nagar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.slice(0, 3).map((t) => (
            <div key={t.id} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <p className="text-xs text-slate-700 italic leading-relaxed">
                "{t.comment}"
              </p>
              <div className="pt-2 border-t border-slate-100">
                <div className="font-bold text-slate-900 text-xs font-heading">{t.name}</div>
                <div className="text-[11px] text-teal-700">{t.condition}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
