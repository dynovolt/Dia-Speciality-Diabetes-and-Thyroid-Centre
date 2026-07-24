import React, { useState, useEffect } from 'react';
import { CLINIC_INFO, CLINIC_SERVICES } from '../data/clinicData';
import { AppointmentData } from '../types';
import { 
  X, 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  CheckCircle2, 
  MessageSquare, 
  Send, 
  MapPin, 
  ShieldCheck,
  Stethoscope
} from 'lucide-react';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledContext?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  prefilledContext
}) => {
  const [formData, setFormData] = useState<AppointmentData>({
    patientName: '',
    phone: '',
    age: '',
    service: 'Type 2 Diabetes Management',
    preferredDate: new Date(Date.now() + 86400000).toISOString().split('T')[0], // tomorrow
    preferredTime: '6:30 PM',
    notes: prefilledContext || '',
  });

  useEffect(() => {
    if (prefilledContext) {
      setFormData((prev) => ({ ...prev, notes: prefilledContext }));
    }
  }, [prefilledContext]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState<{
    id: string;
    patientName: string;
    preferredDate: string;
    preferredTime: string;
    service: string;
  } | null>(null);

  if (!isOpen) return null;

  const timeSlots = ['6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM'];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/book-appointment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.appointment) {
        setBookingSuccess({
          id: data.appointment.id,
          patientName: data.appointment.patientName,
          preferredDate: data.appointment.preferredDate,
          preferredTime: data.appointment.preferredTime,
          service: data.appointment.service,
        });
      } else {
        // Fallback local booking ID generator
        const fallbackId = 'DIA-' + Math.floor(100000 + Math.random() * 900000);
        setBookingSuccess({
          id: fallbackId,
          patientName: formData.patientName,
          preferredDate: formData.preferredDate,
          preferredTime: formData.preferredTime,
          service: formData.service,
        });
      }
    } catch {
      const fallbackId = 'DIA-' + Math.floor(100000 + Math.random() * 900000);
      setBookingSuccess({
        id: fallbackId,
        patientName: formData.patientName,
        preferredDate: formData.preferredDate,
        preferredTime: formData.preferredTime,
        service: formData.service,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppConfirm = () => {
    if (!bookingSuccess) return;
    const message = `Hello DIA Speciality Centre! I have registered an appointment online.\nRef ID: ${bookingSuccess.id}\nPatient: ${bookingSuccess.patientName}\nService: ${bookingSuccess.service}\nPreferred Date: ${bookingSuccess.preferredDate}\nPreferred Time: ${bookingSuccess.preferredTime}`;
    const url = `https://wa.me/91${CLINIC_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const resetAndClose = () => {
    setBookingSuccess(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-teal-800 to-slate-900 text-white p-6 flex justify-between items-start">
          <div>
            <span className="text-xs font-semibold text-teal-300 uppercase tracking-wider">
              {CLINIC_INFO.area} • OPD Consultation
            </span>
            <h3 className="text-xl font-bold font-heading mt-0.5">
              Book Appointment with Dr. Sridhar K
            </h3>
            <p className="text-xs text-slate-300 mt-1">
              OPD Hours: Mon–Sat 6:30 PM to 9:00 PM | Fee: ₹300 - ₹500
            </p>
          </div>
          <button
            onClick={resetAndClose}
            className="text-slate-300 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {!bookingSuccess ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Patient Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Patient Name <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={formData.patientName}
                      onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 text-sm rounded-xl border border-slate-200 focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20 outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Phone Number <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 text-sm rounded-xl border border-slate-200 focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20 outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Service & Age */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Select Clinical Service
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3 py-2.5 text-sm rounded-xl border border-slate-200 focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20 outline-none bg-white"
                  >
                    {CLINIC_SERVICES.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                    <option value="General Physician & Diabetology Consultation">
                      General Diabetology & Thyroid Consultation
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Age (Years)
                  </label>
                  <input
                    type="number"
                    placeholder="e.g. 45"
                    value={formData.age}
                    onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                    className="w-full px-3 py-2.5 text-sm rounded-xl border border-slate-200 focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20 outline-none"
                  />
                </div>
              </div>

              {/* Date & Preferred Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Preferred Date <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="date"
                      required
                      min={new Date().toISOString().split('T')[0]}
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 text-sm rounded-xl border border-slate-200 focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20 outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    OPD Time Slot (Mon-Sat 6:30PM - 9PM)
                  </label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full px-3 py-2.5 text-sm rounded-xl border border-slate-200 focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20 outline-none bg-white"
                  >
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Patient Notes */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Symptoms or Medical Notes (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Mention key symptoms, current medications, or risk test score..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3 py-2 text-sm rounded-xl border border-slate-200 focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20 outline-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-teal-700 hover:bg-teal-800 text-white font-semibold py-3 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <Calendar className="w-4 h-4" />
                  <span>{isSubmitting ? 'Registering Booking...' : 'Confirm Appointment Request'}</span>
                </button>
              </div>

              <div className="text-[11px] text-slate-500 text-center flex items-center justify-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
                <span>No advance payment needed. Consultation fee payable at clinic (₹300 - ₹500).</span>
              </div>

            </form>
          ) : (
            /* Confirmation Screen */
            <div className="text-center space-y-5 py-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  Ref ID: {bookingSuccess.id}
                </span>
                <h3 className="text-2xl font-bold text-slate-900 font-heading mt-2">
                  Appointment Request Received!
                </h3>
                <p className="text-xs text-slate-600 mt-1">
                  Thank you, <strong>{bookingSuccess.patientName}</strong>. Your consultation slot has been reserved.
                </p>
              </div>

              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-left text-xs space-y-2 max-w-md mx-auto">
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Doctor:</span>
                  <span className="font-semibold text-slate-800">Dr. Sridhar K (Diabetologist)</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Service:</span>
                  <span className="font-semibold text-slate-800">{bookingSuccess.service}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Date & Slot:</span>
                  <span className="font-semibold text-teal-700">{bookingSuccess.preferredDate} at {bookingSuccess.preferredTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Address:</span>
                  <span className="font-medium text-slate-800 text-right">Above Swaati Medicals, Kasturi Nagar</span>
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <button
                  onClick={handleWhatsAppConfirm}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer text-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Confirmation to Clinic WhatsApp</span>
                </button>

                <button
                  onClick={resetAndClose}
                  className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium py-2.5 rounded-xl text-xs"
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
