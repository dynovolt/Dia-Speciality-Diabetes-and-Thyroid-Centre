import React, { useState } from 'react';
import { PageTab } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { AppointmentModal } from './components/AppointmentModal';
import { AiHealthAssistantModal } from './components/AiHealthAssistantModal';
import { DiabetesRiskEstimator } from './components/DiabetesRiskEstimator';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { DoctorPage } from './pages/DoctorPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [activeTab, setActiveTab] = useState<PageTab>('home');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingContext, setBookingContext] = useState<string>('');
  const [isAiAssistantOpen, setIsAiAssistantOpen] = useState(false);

  const handleOpenBooking = (prefilledContext?: string) => {
    if (prefilledContext) {
      setBookingContext(prefilledContext);
    } else {
      setBookingContext('');
    }
    setIsBookingOpen(true);
  };

  const handleBookAppointmentWithRiskContext = (riskSummaryText: string) => {
    setBookingContext(riskSummaryText);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Global Navigation Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenBooking={() => handleOpenBooking()}
        onOpenAiAssistant={() => setIsAiAssistantOpen(true)}
      />

      {/* Main Page View Area */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <HomePage
            setActiveTab={setActiveTab}
            onOpenBooking={() => handleOpenBooking()}
            onOpenAiAssistant={() => setIsAiAssistantOpen(true)}
          />
        )}

        {activeTab === 'about' && (
          <AboutPage
            setActiveTab={setActiveTab}
            onOpenBooking={() => handleOpenBooking()}
          />
        )}

        {activeTab === 'services' && (
          <ServicesPage
            onOpenBooking={() => handleOpenBooking()}
          />
        )}

        {activeTab === 'doctor' && (
          <DoctorPage
            onOpenBooking={() => handleOpenBooking()}
          />
        )}

        {activeTab === 'contact' && (
          <ContactPage
            onOpenBooking={() => handleOpenBooking()}
          />
        )}

        {activeTab === 'risk-estimator' && (
          <div className="py-8 px-4 sm:px-6 lg:px-8">
            <DiabetesRiskEstimator
              onBookAppointmentWithContext={handleBookAppointmentWithRiskContext}
            />
          </div>
        )}
      </main>

      {/* Global Footer */}
      <Footer
        setActiveTab={setActiveTab}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Floating WhatsApp Quick Action Button */}
      <FloatingWhatsApp />

      {/* Interactive Booking Modal */}
      <AppointmentModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        prefilledContext={bookingContext}
      />

      {/* Interactive AI Health Assistant Dialog */}
      <AiHealthAssistantModal
        isOpen={isAiAssistantOpen}
        onClose={() => setIsAiAssistantOpen(false)}
        onOpenBooking={() => handleOpenBooking()}
      />
    </div>
  );
}
