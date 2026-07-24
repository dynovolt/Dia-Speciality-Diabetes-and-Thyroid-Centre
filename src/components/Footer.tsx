import React from 'react';
import { PageTab } from '../types';
import { CLINIC_INFO } from '../data/clinicData';
import { 
  Activity, 
  MapPin, 
  Phone, 
  Clock, 
  Calendar, 
  Shield, 
  Heart, 
  ExternalLink,
  MessageCircle,
  Award
} from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: PageTab) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab, onOpenBooking }) => {
  const handleNav = (tab: PageTab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Column 1: Brand & Lead Doctor */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center font-bold text-xl shadow-md">
                <Activity className="w-5 h-5 text-teal-100" />
              </div>
              <div>
                <div className="font-bold text-white text-lg font-heading leading-tight">
                  DIA Speciality
                </div>
                <div className="text-xs text-teal-400 font-medium">
                  Diabetes & Thyroid Centre
                </div>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Dedicated evidence-based medical center in Kasturi Nagar, Bengaluru. Lead Physician: <strong className="text-slate-200">Dr. Sridhar K</strong> (MBBS, General Physician & Senior Diabetologist with 27+ years experience).
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-teal-300 bg-slate-800/80 p-2.5 rounded-lg border border-slate-700">
              <Award className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <span>Consultation Fee Range: <strong>{CLINIC_INFO.consultationFee}</strong></span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider font-heading">
              Quick Navigation
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-teal-400 transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-teal-400 transition-colors">
                  About Clinic & Values
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-teal-400 transition-colors">
                  Services & Clinical Care
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('doctor')} className="hover:text-teal-400 transition-colors">
                  Dr. Sridhar K Profile
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('risk-estimator')} className="hover:text-teal-400 text-teal-400 font-medium flex items-center gap-1">
                  <span>Diabetes Risk Self-Test</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-teal-400 transition-colors">
                  Contact Us & Map
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Clinical Specializations */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider font-heading">
              Specialized Care
            </h3>
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
                Type 2 Diabetes Management
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
                Type 1 & Juvenile Diabetes
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
                Thyroid & Hormonal Health
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
                Pediatric Thyroid Care
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
                Vitamin D & Calcium Therapy
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
                Hypertension & Lipid Control
              </li>
            </ul>
          </div>

          {/* Column 4: Location & OPD Hours */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider font-heading">
              Clinic Hours & Location
            </h3>
            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                <span>
                  {CLINIC_INFO.address}
                </span>
              </div>
              <div className="flex items-center gap-2 text-slate-300 font-medium">
                <Clock className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>OPD: Mon – Sat: 6:30 PM – 9:00 PM</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-teal-400 flex-shrink-0" />
                <a href={`tel:${CLINIC_INFO.phoneRaw}`} className="text-slate-200 font-semibold hover:text-teal-300">
                  {CLINIC_INFO.phone}
                </a>
              </div>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={onOpenBooking}
                className="w-full bg-teal-700 hover:bg-teal-600 text-white text-xs font-semibold py-2 px-3 rounded-lg flex items-center justify-center gap-1.5 transition-colors"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Appointment Online</span>
              </button>
              <a
                href={CLINIC_INFO.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-slate-400 hover:text-teal-300 flex items-center justify-center gap-1 py-1"
              >
                <span>Get Directions on Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>

        {/* Medical Disclaimer & Copyright */}
        <div className="pt-8 space-y-4 text-xs text-slate-500">
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800/80 flex items-start gap-3">
            <Shield className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong>Medical Disclaimer:</strong> The information provided on this website is for general health awareness and educational purposes only. It is not intended as a substitute for professional medical advice, diagnosis, or treatment. Always consult Dr. Sridhar K or a qualified physician regarding any medical condition or prescription adjustments.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 pt-2 text-slate-400">
            <div>
              &copy; {new Date().getFullYear()} DIA Speciality Diabetes and Thyroid Centre. All rights reserved.
            </div>
            <div className="flex items-center gap-4 text-[11px]">
              <span>Kasturi Nagar, Bengaluru</span>
              <span>•</span>
              <span>Local SEO Optimized</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
