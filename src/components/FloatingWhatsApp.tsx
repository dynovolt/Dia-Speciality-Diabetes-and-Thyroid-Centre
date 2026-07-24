import React, { useState } from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { MessageCircle, X, Send, Calendar, Clock, MapPin } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappNumber = CLINIC_INFO.whatsappNumber; // 6364226888

  const quickMessages = [
    { label: 'Book Appointment', text: 'Hello DIA Speciality Centre! I would like to book a consultation with Dr. Sridhar K.' },
    { label: 'Inquire OPD Hours', text: 'Hi! Could you confirm today’s OPD availability for Dr. Sridhar K?' },
    { label: 'Clinic Directions', text: 'Hello! Please send exact clinic location directions above Swaati Medicals in Kasturi Nagar.' },
    { label: 'Thyroid & Diabetes Query', text: 'Hello Doctor! I have a question regarding my blood report / diabetes management.' }
  ];

  const handleSendCustom = (customText: string) => {
    const encodedText = encodeURIComponent(customText);
    const url = `https://wa.me/91${whatsappNumber}?text=${encodedText}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
      {/* Quick WhatsApp Chat Popover Drawer */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200">
          {/* Header */}
          <div className="bg-emerald-600 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-emerald-700 flex items-center justify-center font-bold text-lg">
                  DIA
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-300 border-2 border-emerald-600 rounded-full" />
              </div>
              <div>
                <h4 className="font-bold text-sm leading-tight font-heading">
                  DIA Speciality Centre
                </h4>
                <p className="text-[11px] text-emerald-100 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-emerald-300 rounded-full animate-ping" />
                  Chat on WhatsApp: +91 {whatsappNumber}
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-emerald-100 hover:text-white p-1 rounded-lg hover:bg-emerald-700/60 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-slate-50 space-y-3 text-xs">
            <div className="bg-emerald-50 text-emerald-950 p-3 rounded-xl border border-emerald-200/80 leading-relaxed">
              👋 <strong>Namaste!</strong> Welcome to DIA Speciality Diabetes & Thyroid Centre, Kasturi Nagar. How can Dr. Sridhar K's clinic assist you today?
            </div>

            <div className="space-y-1.5 pt-1">
              <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                Select a quick prompt to open chat:
              </p>
              {quickMessages.map((msg, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendCustom(msg.text)}
                  className="w-full text-left bg-white hover:bg-emerald-50 text-slate-800 hover:text-emerald-800 p-2.5 rounded-xl border border-slate-200 hover:border-emerald-300 transition-all font-medium flex items-center justify-between group cursor-pointer"
                >
                  <span>{msg.label}</span>
                  <Send className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-600 transition-colors" />
                </button>
              ))}
            </div>

            <div className="pt-2 border-t border-slate-200 flex justify-between text-[11px] text-slate-500">
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3 text-emerald-600" /> Mon-Sat 6:30PM-9PM
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-emerald-600" /> Kasturi Nagar
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Floating Launcher Button */}
      <button
        onClick={() => {
          if (!isOpen) {
            setIsOpen(true);
          } else {
            handleSendCustom("Hello DIA Speciality Centre! I have a consultation query.");
          }
        }}
        className="group relative flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white p-3.5 sm:px-4 sm:py-3.5 rounded-full shadow-lg hover:shadow-emerald-600/30 transition-all cursor-pointer transform hover:scale-105 active:scale-95"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp: 6364226888"
      >
        <div className="relative">
          <MessageCircle className="w-6 h-6 fill-current text-white" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-300 border-2 border-emerald-700 rounded-full animate-pulse" />
        </div>
        <span className="hidden sm:inline-block font-bold text-sm pr-1">
          WhatsApp Us
        </span>
      </button>
    </div>
  );
};
