import React, { useState } from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { 
  X, 
  Sparkles, 
  Send, 
  Bot, 
  User, 
  Calendar, 
  ShieldAlert, 
  RefreshCw 
} from 'lucide-react';

interface AiHealthAssistantModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: () => void;
}

interface ChatMessage {
  sender: 'user' | 'bot';
  text: string;
}

export const AiHealthAssistantModal: React.FC<AiHealthAssistantModalProps> = ({
  isOpen,
  onClose,
  onOpenBooking
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      sender: 'bot',
      text: "Namaste! I am the AI Health Assistant for DIA Speciality Diabetes & Thyroid Centre. You can ask me about diabetes, thyroid symptoms, diet advice, fasting blood sugar targets, or clinic OPD timings."
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const quickPrompts = [
    "What are ideal fasting blood sugar targets?",
    "What are common symptoms of Hypothyroidism?",
    "What dietary tips help lower HbA1c?",
    "What are Dr. Sridhar K's clinic hours & location?"
  ];

  const handleSendMessage = async (textToSend?: string) => {
    const query = textToSend || inputText;
    if (!query.trim()) return;

    const userMsg: ChatMessage = { sender: 'user', text: query };
    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputText('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/ai-assistant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: query,
          history: messages.slice(-4)
        })
      });

      const data = await response.json();
      if (data.reply) {
        setMessages((prev) => [...prev, { sender: 'bot', text: data.reply }]);
      } else {
        setMessages((prev) => [...prev, {
          sender: 'bot',
          text: "DIA Speciality Centre in Kasturi Nagar provides expert care for Diabetes & Thyroid health led by Dr. Sridhar K (27+ years exp). Please call us at +91 6364226888 or book a consultation online."
        }]);
      }
    } catch {
      setMessages((prev) => [...prev, {
        sender: 'bot',
        text: "You can reach DIA Speciality Diabetes and Thyroid Centre at +91 6364226888 for appointments with Dr. Sridhar K. OPD Timings: Mon-Sat 6:30 PM to 9:00 PM."
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-xs">
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col h-[580px] animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-slate-900 text-white p-4 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-600 flex items-center justify-center text-white font-bold shadow-sm">
              <Sparkles className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <h3 className="font-bold text-base font-heading leading-tight">
                Ask Dia Care AI
              </h3>
              <p className="text-xs text-teal-400">
                Diabetes, Thyroid & Metabolic Health Guide
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-full hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Prompts Bar */}
        <div className="bg-slate-50 p-2.5 border-b border-slate-200 flex items-center gap-2 overflow-x-auto text-xs scrollbar-none">
          <span className="text-slate-400 font-medium flex-shrink-0 text-[11px] pl-1">Prompts:</span>
          {quickPrompts.map((p, idx) => (
            <button
              key={idx}
              onClick={() => handleSendMessage(p)}
              className="whitespace-nowrap bg-white hover:bg-teal-50 text-slate-700 hover:text-teal-800 px-3 py-1 rounded-full border border-slate-200 hover:border-teal-300 transition-all text-[11px] font-medium cursor-pointer"
            >
              {p}
            </button>
          ))}
        </div>

        {/* Chat Messages Body */}
        <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-slate-50/50">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex items-start gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.sender === 'bot' && (
                <div className="w-7 h-7 rounded-lg bg-teal-700 text-white flex items-center justify-center flex-shrink-0 text-xs">
                  <Bot className="w-4 h-4" />
                </div>
              )}

              <div
                className={`max-w-[82%] p-3.5 rounded-2xl text-xs leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-teal-700 text-white rounded-br-none shadow-xs font-medium'
                    : 'bg-white text-slate-800 border border-slate-200 rounded-bl-none shadow-xs'
                }`}
              >
                <div className="whitespace-pre-wrap">{msg.text}</div>
              </div>

              {msg.sender === 'user' && (
                <div className="w-7 h-7 rounded-lg bg-slate-800 text-white flex items-center justify-center flex-shrink-0 text-xs">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}

          {isLoading && (
            <div className="flex items-center gap-2 text-xs text-slate-500 bg-white p-3 rounded-2xl border border-slate-200 w-fit">
              <RefreshCw className="w-3.5 h-3.5 animate-spin text-teal-600" />
              <span>Analyzing metabolic query...</span>
            </div>
          )}
        </div>

        {/* Footer Input */}
        <div className="p-3 bg-white border-t border-slate-200 space-y-2">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              placeholder="Ask about fasting sugar, thyroid, diet..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="flex-1 px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20 outline-none"
            />
            <button
              type="submit"
              disabled={isLoading || !inputText.trim()}
              className="bg-teal-700 hover:bg-teal-800 text-white p-2.5 rounded-xl transition-all cursor-pointer disabled:opacity-50"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

          <div className="flex justify-between items-center text-[10px] text-slate-400 px-1">
            <span className="flex items-center gap-1">
              <ShieldAlert className="w-3 h-3 text-amber-500" /> Educational AI tool • Not a formal prescription
            </span>
            <button
              onClick={() => {
                onClose();
                onOpenBooking();
              }}
              className="text-teal-700 font-bold hover:underline flex items-center gap-1"
            >
              <Calendar className="w-3 h-3" /> Book Dr. Sridhar K
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
