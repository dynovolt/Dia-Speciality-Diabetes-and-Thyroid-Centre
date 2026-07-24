import React, { useState } from 'react';
import { RISK_QUESTIONS } from '../data/clinicData';
import { RiskResult } from '../types';
import { 
  Activity, 
  CheckCircle2, 
  AlertTriangle, 
  AlertCircle, 
  ChevronRight, 
  ChevronLeft, 
  RotateCcw, 
  Calendar, 
  Share2, 
  Sparkles,
  ShieldCheck,
  Stethoscope
} from 'lucide-react';

interface DiabetesRiskEstimatorProps {
  onBookAppointmentWithContext: (riskSummaryText: string) => void;
}

export const DiabetesRiskEstimator: React.FC<DiabetesRiskEstimatorProps> = ({
  onBookAppointmentWithContext
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [isCompleted, setIsCompleted] = useState(false);

  const totalQuestions = RISK_QUESTIONS.length;
  const currentQ = RISK_QUESTIONS[currentStep];

  const handleSelectOption = (score: number) => {
    setAnswers((prev) => ({ ...prev, [currentQ.id]: score }));
  };

  const handleNext = () => {
    if (answers[currentQ.id] === undefined) return;
    if (currentStep < totalQuestions - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleReset = () => {
    setAnswers({});
    setCurrentStep(0);
    setIsCompleted(false);
  };

  // Calculate score result
  const calculateResult = (): RiskResult => {
    const totalScore: number = Object.keys(answers).reduce(
      (acc: number, key: string) => acc + (answers[Number(key)] || 0),
      0
    );
    const maxScore = totalQuestions * 2; // 10

    if (totalScore <= 2) {
      return {
        score: totalScore,
        maxScore,
        category: 'Low Risk',
        badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
        summary: 'Your responses indicate a LOW CURRENT RISK for diabetes or metabolic insulin resistance.',
        recommendations: [
          'Maintain your regular active physical routine (at least 150 minutes of exercise per week).',
          'Opt for whole grains, high-fiber, low-glycemic-index Indian meals.',
          'Undergo a preventive routine blood test (Fasting Sugar & HbA1c) once a year as part of regular wellness checks.'
        ]
      };
    } else if (totalScore <= 5) {
      return {
        score: totalScore,
        maxScore,
        category: 'Moderate Risk',
        badgeColor: 'bg-amber-100 text-amber-800 border-amber-300',
        summary: 'Your responses indicate a MODERATE RISK of prediabetes or subtle metabolic insulin resistance.',
        recommendations: [
          'Schedule a Fasting Blood Glucose & HbA1c screening with Dr. Sridhar K to establish a baseline.',
          'Limit intake of refined sugars, fried snacks, sweetened beverages, and simple carbohydrates.',
          'Incorporate 30 minutes of brisk daily walking to improve cell insulin sensitivity.',
          'Monitor blood pressure and lipid profile levels periodically.'
        ]
      };
    } else {
      return {
        score: totalScore,
        maxScore,
        category: 'High Risk',
        badgeColor: 'bg-rose-100 text-rose-800 border-rose-300',
        summary: 'Your responses indicate a HIGH RISK for undiagnosed diabetes, prediabetes, or metabolic imbalance.',
        recommendations: [
          'We strongly advise booking a clinical diagnostic evaluation with Dr. Sridhar K at DIA Speciality Centre.',
          'Undergo essential lab investigations: Fasting & Postprandial Blood Glucose, HbA1c, and Lipid Profile.',
          'Do not ignore persistent symptoms like fatigue, increased thirst, frequent urination, or tingling in feet.',
          'Early medical intervention prevents long-term diabetic vascular complications.'
        ]
      };
    }
  };

  const result = isCompleted ? calculateResult() : null;

  return (
    <div className="bg-white rounded-3xl shadow-xl border border-slate-200/80 overflow-hidden max-w-4xl mx-auto my-6">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-teal-900 via-teal-800 to-slate-900 text-white p-6 sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 bg-teal-800/80 text-teal-200 text-xs font-semibold px-3 py-1 rounded-full border border-teal-700/60 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Interactive Self-Assessment</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading">
              Diabetes Risk Estimator
            </h2>
            <p className="text-sm text-teal-100 mt-1 max-w-xl">
              Evaluate your metabolic diabetes risk level in under 2 minutes based on clinical indicators.
            </p>
          </div>
          <div className="hidden sm:flex w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md items-center justify-center text-teal-300">
            <Activity className="w-8 h-8" />
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="p-6 sm:p-8">
        {!isCompleted ? (
          <div>
            {/* Step Progress Bar */}
            <div className="mb-6">
              <div className="flex justify-between items-center text-xs font-semibold text-slate-500 mb-2">
                <span>Question {currentStep + 1} of {totalQuestions}</span>
                <span>{Math.round(((currentStep + 1) / totalQuestions) * 100)}% Completed</span>
              </div>
              <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                <div 
                  className="bg-teal-600 h-full transition-all duration-300 rounded-full"
                  style={{ width: `${((currentStep + 1) / totalQuestions) * 100}%` }}
                />
              </div>
            </div>

            {/* Question Card */}
            <div className="space-y-4 my-6">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-heading">
                {currentQ.question}
              </h3>
              {currentQ.description && (
                <p className="text-xs text-slate-500 leading-relaxed">
                  {currentQ.description}
                </p>
              )}

              {/* Options */}
              <div className="space-y-3 pt-2">
                {currentQ.options.map((opt, idx) => {
                  const isSelected = answers[currentQ.id] === opt.score;
                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(opt.score)}
                      className={`w-full text-left p-4 rounded-2xl border transition-all flex items-start justify-between cursor-pointer ${
                        isSelected
                          ? 'border-teal-600 bg-teal-50/80 text-teal-950 shadow-sm ring-2 ring-teal-600/20'
                          : 'border-slate-200 hover:border-teal-300 hover:bg-slate-50/70 text-slate-800'
                      }`}
                    >
                      <div>
                        <div className="font-medium text-sm sm:text-base">
                          {opt.label}
                        </div>
                        {opt.subtext && (
                          <div className="text-xs text-slate-500 mt-0.5">
                            {opt.subtext}
                          </div>
                        )}
                      </div>
                      <div className={`w-5 h-5 rounded-full border flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        isSelected ? 'border-teal-600 bg-teal-600 text-white' : 'border-slate-300'
                      }`}>
                        {isSelected && <CheckCircle2 className="w-3.5 h-3.5" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center pt-6 border-t border-slate-100">
              <button
                onClick={handlePrev}
                disabled={currentStep === 0}
                className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  currentStep === 0
                    ? 'text-slate-300 cursor-not-allowed'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous</span>
              </button>

              <button
                onClick={handleNext}
                disabled={answers[currentQ.id] === undefined}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                  answers[currentQ.id] === undefined
                    ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                    : 'bg-teal-700 hover:bg-teal-800 text-white shadow-md'
                }`}
              >
                <span>{currentStep === totalQuestions - 1 ? 'Calculate My Score' : 'Next Question'}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ) : (
          /* Results View */
          result && (
            <div className="space-y-6 animate-in fade-in duration-300">
              {/* Category Card */}
              <div className="p-6 rounded-2xl border bg-slate-50 text-center space-y-3">
                <div className="flex justify-center">
                  <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-bold border ${result.badgeColor}`}>
                    {result.category === 'High Risk' && <AlertCircle className="w-4 h-4 text-rose-600" />}
                    {result.category === 'Moderate Risk' && <AlertTriangle className="w-4 h-4 text-amber-600" />}
                    {result.category === 'Low Risk' && <CheckCircle2 className="w-4 h-4 text-emerald-600" />}
                    {result.category} Assessment
                  </span>
                </div>

                <div className="text-3xl font-extrabold text-slate-900 font-heading">
                  Risk Score: <span className="text-teal-700">{result.score}</span> / {result.maxScore}
                </div>

                <p className="text-sm text-slate-700 max-w-xl mx-auto font-medium leading-relaxed">
                  {result.summary}
                </p>
              </div>

              {/* Recommendations */}
              <div className="space-y-3">
                <h4 className="text-base font-bold text-slate-900 flex items-center gap-2 font-heading">
                  <ShieldCheck className="w-5 h-5 text-teal-700" />
                  <span>Actionable Medical Guidance for You:</span>
                </h4>
                <ul className="space-y-2.5">
                  {result.recommendations.map((rec, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-200/80">
                      <span className="w-5 h-5 rounded-full bg-teal-100 text-teal-800 font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <span className="leading-relaxed">{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Box */}
              <div className="bg-gradient-to-r from-teal-50 to-emerald-50 p-6 rounded-2xl border border-teal-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="font-bold text-teal-950 text-base font-heading">
                    Consult Dr. Sridhar K for Precision Diagnostics
                  </h4>
                  <p className="text-xs text-teal-800 mt-1">
                    Book an OPD slot at DIA Speciality Centre, Kasturi Nagar. Fee: ₹300 - ₹500.
                  </p>
                </div>
                <button
                  onClick={() => onBookAppointmentWithContext(`Risk Test Score: ${result.score}/10 (${result.category})`)}
                  className="w-full sm:w-auto bg-teal-700 hover:bg-teal-800 text-white font-semibold text-sm px-6 py-3 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 flex-shrink-0 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Consultation Now</span>
                </button>
              </div>

              {/* Action Toolbar */}
              <div className="flex flex-wrap justify-between items-center gap-3 pt-4 border-t border-slate-100 text-xs">
                <button
                  onClick={handleReset}
                  className="flex items-center gap-1.5 text-slate-600 hover:text-slate-900 font-medium py-2 px-3 rounded-lg hover:bg-slate-100 transition-colors"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Retake Risk Test</span>
                </button>

                <button
                  onClick={() => {
                    const text = encodeURIComponent(`I completed the Diabetes Risk Test at DIA Speciality Centre. Result: ${result.category} (${result.score}/10). Consult Dr. Sridhar K in Kasturi Nagar!`);
                    window.open(`https://wa.me/?text=${text}`, '_blank');
                  }}
                  className="flex items-center gap-1.5 text-emerald-700 hover:text-emerald-800 font-semibold py-2 px-3 rounded-lg hover:bg-emerald-50 transition-colors"
                >
                  <Share2 className="w-4 h-4" />
                  <span>Share Result on WhatsApp</span>
                </button>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};
