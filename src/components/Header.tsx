import React, { useState } from 'react';
import { PageTab } from '../types';
import { CLINIC_INFO } from '../data/clinicData';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Calendar, 
  Menu, 
  X, 
  Activity, 
  Sparkles,
  Stethoscope,
  ChevronRight
} from 'lucide-react';

interface HeaderProps {
  activeTab: PageTab;
  setActiveTab: (tab: PageTab) => void;
  onOpenBooking: () => void;
  onOpenAiAssistant: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  onOpenBooking,
  onOpenAiAssistant,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: PageTab; label: string; badge?: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services & Care' },
    { id: 'doctor', label: 'Dr. Sridhar K' },
    { id: 'contact', label: 'Contact & Map' },
    { id: 'risk-estimator', label: 'Diabetes Risk Tool', badge: 'Free Quiz' },
  ];

  const handleNavClick = (tab: PageTab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      {/* Top Bar for Phone, OPD Hours, Location */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <a 
              href={`tel:${CLINIC_INFO.phoneRaw}`}
              className="flex items-center gap-1.5 hover:text-teal-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-teal-400" />
              <span className="font-semibold text-slate-100">{CLINIC_INFO.phone}</span>
            </a>
            <div className="hidden sm:flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>OPD: Mon–Sat 6:30 PM – 9:00 PM</span>
            </div>
            <div className="hidden md:flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-teal-400" />
              <span>Kasturi Nagar, East of NGEF, Bengaluru</span>
            </div>
          </div>

          <div className="flex items-center gap-3 ml-auto">
            <button
              onClick={onOpenAiAssistant}
              className="flex items-center gap-1.5 text-xs bg-teal-950/80 hover:bg-teal-900 text-teal-300 border border-teal-700/60 rounded-full px-2.5 py-0.5 transition-all cursor-pointer"
              title="Ask AI about diabetes & clinic queries"
            >
              <Sparkles className="w-3 h-3 text-teal-400 animate-pulse" />
              <span className="font-medium">Ask Dia AI</span>
            </button>
            <span className="text-slate-600 hidden xs:inline">|</span>
            <span className="text-teal-300 font-medium text-xs">Fee: {CLINIC_INFO.consultationFee}</span>
          </div>
        </div>
      </div>

      {/* Main Header Nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between gap-4">
        {/* Brand Logo & Name */}
        <button 
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 text-left group focus:outline-none"
        >
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-teal-600 to-teal-800 text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
            <Activity className="w-6 h-6 text-teal-100" />
          </div>
          <div>
            <div className="font-bold text-slate-900 text-lg sm:text-xl tracking-tight leading-tight flex items-center gap-1.5 font-heading">
              DIA <span className="text-teal-700 font-semibold">Speciality</span>
            </div>
            <div className="text-xs font-medium text-slate-500 tracking-wide">
              Diabetes & Thyroid Centre
            </div>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-3 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
                  isActive
                    ? 'text-teal-800 bg-teal-50/80 font-semibold'
                    : 'text-slate-600 hover:text-teal-700 hover:bg-slate-100/70'
                }`}
              >
                {item.label}
                {item.badge && (
                  <span className="text-[10px] font-bold bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded-full border border-amber-200">
                    {item.badge}
                  </span>
                )}
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-teal-600 rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Action Controls */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={onOpenBooking}
            className="hidden sm:flex items-center gap-2 bg-teal-700 hover:bg-teal-800 text-white text-sm font-semibold px-4 py-2.5 rounded-lg shadow-sm hover:shadow transition-all cursor-pointer transform active:scale-95"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Appointment</span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-2 animate-in slide-in-from-top duration-200 shadow-xl">
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-3 mb-1">
            Navigation Menu
          </div>
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-teal-50 text-teal-800 font-semibold'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                <span className="flex items-center gap-2">
                  {item.label}
                  {item.badge && (
                    <span className="text-[10px] font-bold bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                  )}
                </span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
            );
          })}

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full flex items-center justify-center gap-2 bg-teal-700 text-white font-semibold py-3 rounded-lg text-sm shadow-sm"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Consultation Now</span>
            </button>
            <a
              href={`tel:${CLINIC_INFO.phoneRaw}`}
              className="w-full flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold py-2.5 rounded-lg text-sm"
            >
              <Phone className="w-4 h-4 text-teal-700" />
              <span>Call Clinic: {CLINIC_INFO.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
