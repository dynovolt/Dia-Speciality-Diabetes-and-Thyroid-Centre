import React, { useState } from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Send, 
  ExternalLink, 
  CheckCircle2, 
  Building2, 
  Calendar,
  Award,
  MessageCircle
} from 'lucide-react';

interface ContactPageProps {
  onOpenBooking: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenBooking }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    preferredDate: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="space-y-12 pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-teal-900 via-teal-800 to-slate-900 text-white p-8 sm:p-12 rounded-3xl shadow-xl">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-bold text-teal-300 bg-teal-800/80 px-3 py-1 rounded-full uppercase tracking-wider border border-teal-700">
            Contact & Location Details
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-heading text-white">
            Visit DIA Speciality Centre
          </h1>
          <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
            Conveniently located above Swaati Medicals in Kasturi Nagar, Bengaluru. Reach out for OPD bookings or general medical inquiries.
          </p>
        </div>
      </div>

      {/* Grid: Contact Info Cards & Map */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Clinic Contact Details */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Address Card */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center font-bold flex-shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-base font-heading">
                  Physical Clinic Address
                </h3>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  {CLINIC_INFO.address}
                </p>
                <div className="inline-block mt-2 text-[11px] font-bold text-amber-800 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200">
                  Landmark: {CLINIC_INFO.landmark}
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-100">
              <a
                href={CLINIC_INFO.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-700 hover:text-teal-800 hover:underline"
              >
                <span>Open in Google Maps App</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* OPD Hours Card */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold flex-shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-base font-heading">
                  Clinic Timings / OPD Hours
                </h3>
                <p className="text-xs text-teal-700 font-semibold">
                  {CLINIC_INFO.opdHoursWeekdays}
                </p>
              </div>
            </div>

            <div className="space-y-1.5 text-xs text-slate-600 pt-1 border-t border-slate-100">
              <div className="flex justify-between">
                <span>Monday – Saturday:</span>
                <strong className="text-slate-900">6:30 PM – 9:00 PM</strong>
              </div>
              <div className="flex justify-between">
                <span>Sunday:</span>
                <span className="text-slate-500">{CLINIC_INFO.opdHoursSunday}</span>
              </div>
            </div>
          </div>

          {/* Phone & Fee Card */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold flex-shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-base font-heading">
                  Phone & WhatsApp Helpline
                </h3>
                <a
                  href={`tel:${CLINIC_INFO.phoneRaw}`}
                  className="text-sm font-bold text-teal-800 hover:underline block"
                >
                  {CLINIC_INFO.phone}
                </a>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="text-slate-500">Consultation Fee Range:</span>
              <span className="font-bold text-slate-900">{CLINIC_INFO.consultationFee}</span>
            </div>
          </div>

        </div>

        {/* Right Column: Google Maps Embed & Interactive Inquiry Form */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Embedded Google Map */}
          <div className="bg-white p-3 rounded-3xl border border-slate-200 shadow-md overflow-hidden">
            <div className="relative w-full h-72 sm:h-80 rounded-2xl overflow-hidden bg-slate-100">
              <iframe
                title="DIA Speciality Diabetes and Thyroid Centre Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.4984180423187!2d77.651211!3d13.010502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAwJzM3LjgiTiA3N8KwMzknMDQuMyJF!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Quick Inquiry Form */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <div>
              <h3 className="text-xl font-bold text-slate-900 font-heading">
                Send a Direct Message / Inquiry
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Have a query about doctor availability or blood report reviews? Leave a message below.
              </p>
            </div>

            {!formSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Srikant N"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-teal-600 outline-none text-xs"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-teal-600 outline-none text-xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Message or Query</label>
                  <textarea
                    rows={3}
                    placeholder="Ask about OPD slots, blood test guidelines, or doctor availability..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-teal-600 outline-none text-xs"
                  />
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                  <button
                    type="submit"
                    className="bg-teal-700 hover:bg-teal-800 text-white font-semibold px-6 py-3 rounded-xl transition-colors cursor-pointer text-xs flex items-center gap-1.5"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Message</span>
                  </button>

                  <button
                    type="button"
                    onClick={onOpenBooking}
                    className="text-teal-700 font-bold hover:underline flex items-center gap-1"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Or Book Appointment Directly</span>
                  </button>
                </div>
              </form>
            ) : (
              <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-200 text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                <h4 className="font-bold text-emerald-950 text-base font-heading">
                  Thank You, {formData.name}!
                </h4>
                <p className="text-xs text-emerald-800">
                  Your inquiry has been received. Our clinic front desk will reach back to you shortly.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="text-xs font-semibold text-emerald-900 underline pt-2"
                >
                  Send another query
                </button>
              </div>
            )}
          </div>

        </div>

      </div>

    </div>
  );
};
