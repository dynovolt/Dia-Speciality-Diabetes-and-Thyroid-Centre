import React, { useState } from 'react';
import { PageTab } from '../types';
import { CLINIC_SERVICES, CLINIC_INFO } from '../data/clinicData';
import { 
  Activity, 
  HeartPulse, 
  Droplets, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  Calendar, 
  ChevronDown, 
  ChevronUp, 
  Search,
  Stethoscope,
  Info
} from 'lucide-react';

interface ServicesPageProps {
  onOpenBooking: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'diabetes' | 'thyroid' | 'metabolic'>('all');
  const [expandedId, setExpandedId] = useState<string | null>('type-2-diabetes');

  const filteredServices = CLINIC_SERVICES.filter((s) => {
    if (selectedCategory === 'all') return true;
    return s.category === selectedCategory;
  });

  return (
    <div className="space-y-12 pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-teal-900 via-teal-800 to-slate-900 text-white p-8 sm:p-12 rounded-3xl shadow-xl">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-bold text-teal-300 bg-teal-800/80 px-3 py-1 rounded-full uppercase tracking-wider border border-teal-700">
            Clinical Specializations
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-heading text-white">
            Services & Specialized Treatments
          </h1>
          <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
            Exhaustive, evidence-based diagnostic protocols and personalized management plans for Diabetes, Thyroid imbalances, Hypertension, and Metabolic disorders in Kasturi Nagar, Bengaluru.
          </p>
        </div>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-white p-3 rounded-2xl border border-slate-200 shadow-xs">
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-teal-700 text-white shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            All Services ({CLINIC_SERVICES.length})
          </button>
          <button
            onClick={() => setSelectedCategory('diabetes')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              selectedCategory === 'diabetes'
                ? 'bg-teal-700 text-white shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Diabetes Care
          </button>
          <button
            onClick={() => setSelectedCategory('thyroid')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              selectedCategory === 'thyroid'
                ? 'bg-indigo-700 text-white shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Thyroid & Hormonal
          </button>
          <button
            onClick={() => setSelectedCategory('metabolic')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              selectedCategory === 'metabolic'
                ? 'bg-amber-700 text-white shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Metabolic & General Wellness
          </button>
        </div>

        <div className="text-xs text-slate-500 font-medium">
          Consultation Fee: <strong className="text-slate-800">{CLINIC_INFO.consultationFee}</strong>
        </div>
      </div>

      {/* Services Breakdown Grid */}
      <div className="space-y-6">
        {filteredServices.map((service) => {
          const isExpanded = expandedId === service.id;

          return (
            <div
              key={service.id}
              className={`bg-white rounded-3xl border transition-all overflow-hidden ${
                isExpanded ? 'border-teal-500 shadow-md ring-1 ring-teal-500/20' : 'border-slate-200 shadow-xs hover:border-teal-300'
              }`}
            >
              {/* Service Header Row */}
              <div
                onClick={() => setExpandedId(isExpanded ? null : service.id)}
                className="p-6 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-50/50 hover:bg-slate-50 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold flex-shrink-0 ${
                    service.category === 'diabetes'
                      ? 'bg-teal-100 text-teal-800'
                      : service.category === 'thyroid'
                      ? 'bg-indigo-100 text-indigo-800'
                      : 'bg-amber-100 text-amber-800'
                  }`}>
                    {service.category === 'diabetes' && <Activity className="w-6 h-6" />}
                    {service.category === 'thyroid' && <Droplets className="w-6 h-6" />}
                    {service.category === 'metabolic' && <HeartPulse className="w-6 h-6" />}
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider border ${
                        service.category === 'diabetes'
                          ? 'bg-teal-50 text-teal-800 border-teal-200'
                          : service.category === 'thyroid'
                          ? 'bg-indigo-50 text-indigo-800 border-indigo-200'
                          : 'bg-amber-50 text-amber-800 border-amber-200'
                      }`}>
                        {service.category === 'diabetes' ? 'Diabetes Focus' : service.category === 'thyroid' ? 'Thyroid Focus' : 'Metabolic Care'}
                      </span>
                      {service.isKeyHighlight && (
                        <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">
                          High Demand
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 font-heading">
                      {service.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-1 max-w-2xl">
                      {service.shortDesc}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 self-end sm:self-center">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenBooking();
                    }}
                    className="bg-teal-700 hover:bg-teal-800 text-white font-semibold text-xs px-4 py-2 rounded-xl transition-colors cursor-pointer"
                  >
                    Book Slot
                  </button>
                  <div className="text-slate-400 p-1">
                    {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </div>
              </div>

              {/* Expanded Service Content */}
              {isExpanded && (
                <div className="p-6 border-t border-slate-100 bg-white space-y-6 text-xs sm:text-sm animate-in fade-in duration-200">
                  <div>
                    <h4 className="font-bold text-slate-900 text-base font-heading mb-2">
                      Clinical Overview & Treatment Strategy
                    </h4>
                    <p className="text-slate-700 leading-relaxed">
                      {service.fullDesc}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                    {/* Symptoms */}
                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                      <h5 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-3 flex items-center gap-1.5">
                        <Info className="w-4 h-4 text-amber-600" />
                        <span>Common Indicative Symptoms</span>
                      </h5>
                      <ul className="space-y-2">
                        {service.symptoms.map((sym, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-slate-700 text-xs">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 flex-shrink-0" />
                            <span>{sym}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Diagnostic Tests */}
                    <div className="bg-teal-50/50 p-4 rounded-2xl border border-teal-200">
                      <h5 className="font-bold text-teal-950 text-xs uppercase tracking-wider mb-3 flex items-center gap-1.5">
                        <ShieldCheck className="w-4 h-4 text-teal-700" />
                        <span>Recommended Lab Investigations</span>
                      </h5>
                      <ul className="space-y-2">
                        {service.diagnosticTests.map((test, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-teal-950 text-xs">
                            <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 mt-0.5 flex-shrink-0" />
                            <span>{test}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex flex-wrap justify-between items-center gap-4">
                    <div className="text-xs text-slate-500">
                      Lead Specialist: <strong>Dr. Sridhar K</strong> (27+ Yrs Practice) • Kasturi Nagar OPD
                    </div>
                    <button
                      onClick={onOpenBooking}
                      className="bg-teal-700 hover:bg-teal-800 text-white font-semibold text-xs px-5 py-2.5 rounded-xl shadow-xs transition-colors flex items-center gap-1.5 cursor-pointer"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Schedule Consultation for {service.title}</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

    </div>
  );
};
