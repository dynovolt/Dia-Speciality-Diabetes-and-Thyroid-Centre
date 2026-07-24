export type PageTab = 'home' | 'about' | 'services' | 'doctor' | 'contact' | 'risk-estimator';

export interface MedicalService {
  id: string;
  category: 'diabetes' | 'thyroid' | 'metabolic';
  title: string;
  shortDesc: string;
  fullDesc: string;
  symptoms: string[];
  diagnosticTests: string[];
  iconName: string;
  isKeyHighlight?: boolean;
}

export interface DoctorProfile {
  name: string;
  title: string;
  qualifications: string;
  specialization: string;
  experienceYears: number;
  languages: string[];
  bio: string;
  consultationApproach: string[];
  opdHours: string;
  feeRange: string;
  imageUrl: string;
  achievements: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  condition: string;
  rating: number;
  comment: string;
  date: string;
}

export interface AppointmentData {
  patientName: string;
  phone: string;
  age?: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  notes?: string;
  riskScoreContext?: string;
}

export interface RiskQuestion {
  id: number;
  question: string;
  description?: string;
  options: {
    label: string;
    score: number;
    subtext?: string;
  }[];
}

export interface RiskResult {
  score: number;
  maxScore: number;
  category: 'Low Risk' | 'Moderate Risk' | 'High Risk';
  badgeColor: string;
  summary: string;
  recommendations: string[];
}
