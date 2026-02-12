
import React, { useState, useEffect } from 'react';
import { RACE_DATE } from '../constants';

const Hero: React.FC<{ onRegisterClick: () => void }> = ({ onRegisterClick }) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = RACE_DATE.getTime() - now;
      
      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-stone-900">
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-400 rounded-full mix-blend-overlay filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-lime-400 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]"></div>
      </div>
      
      <div className="relative z-20 text-center px-4 max-w-6xl mx-auto">
        <div className="mb-8 flex justify-center animate-in fade-in zoom-in duration-1000">
          <div className="relative group">
            <div className="absolute -inset-2 bg-white/20 rounded-full blur-xl group-hover:bg-emerald-500/20 transition-all duration-700"></div>
            <div className="w-32 h-32 md:w-48 md:h-48 rounded-full border-8 border-white shadow-2xl overflow-hidden bg-emerald-50 flex items-center justify-center relative z-10">
              <div className="flex flex-col items-center justify-center p-4 text-emerald-800 text-center">
                <span className="font-brand text-lg md:text-xl leading-tight">LES FOULÉES DE PAPY JO'</span>
                <div className="w-12 h-0.5 bg-emerald-800 my-1.5 rounded-full"></div>
                <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest">COURSE NATURE</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center mb-6">
          <span className="inline-block py-1 px-4 bg-emerald-600/30 backdrop-blur-md text-emerald-100 text-[10px] md:text-xs font-black rounded-full mb-3 uppercase tracking-[0.2em] border border-emerald-400/30">
            à Saint Hilaire de clisson (44190)
          </span>
          <span className="inline-block py-1.5 px-6 bg-white/10 backdrop-blur-md text-white text-xs font-black rounded-full uppercase tracking-[0.3em] border border-white/20 shadow-xl">
            ÉDITION 2026 • 11 OCTOBRE
          </span>
        </div>
        
        <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-brand text-white mb-2 tracking-tight drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)] leading-none whitespace-nowrap">
          Les Foulées de Papy Jo'
        </h1>
        
        <div className="flex flex-col items-center mb-10">
          <h2 className="text-2xl md:text-5xl font-brand text-emerald-400 uppercase tracking-widest drop-shadow-md">
            Course Nature
          </h2>
          <div className="mt-4 flex items-center bg-emerald-600/90 backdrop-blur-md border border-emerald-400/30 px-8 py-3 rounded-2xl shadow-2xl transform hover:scale-105 transition-transform cursor-default">
            <div className="bg-white/20 p-2 rounded-lg mr-4">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <span className="text-lg md:text-3xl font-brand text-white tracking-wide">
              Dénivelé positif +68m
            </span>
          </div>
        </div>

        <div className="flex justify-center mb-16">
          <button 
            onClick={onRegisterClick}
            className="group relative px-16 py-5 bg-white text-emerald-900 rounded-2xl font-black text-xl hover:bg-emerald-50 transition-all shadow-2xl overflow-hidden active:scale-95"
          >
            <span className="relative z-10">S'INSCRIRE MAINTENANT</span>
          </button>
        </div>

        <div className="inline-flex gap-4 md:gap-8 p-6 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10">
          {[
            { label: 'Jours', val: timeLeft.days },
            { label: 'Heures', val: timeLeft.hours },
            { label: 'Min', val: timeLeft.minutes },
            { label: 'Sec', val: timeLeft.seconds }
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center min-w-[60px]">
              <span className="text-4xl md:text-5xl font-brand text-white leading-none">{item.val.toString().padStart(2, '0')}</span>
              <span className="text-[10px] uppercase tracking-widest font-bold text-emerald-300 mt-2">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-stone-50 via-stone-50/50 to-transparent z-10"></div>
    </section>
  );
};

export default Hero;
