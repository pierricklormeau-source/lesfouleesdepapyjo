
import React, { useState } from 'react';
import { generateTrainingPlan, TrainingPlan } from '../services/geminiService';
import { RACES } from '../constants';

const AICoach: React.FC = () => {
  const [level, setLevel] = useState('Intermédiaire');
  const [targetRace, setTargetRace] = useState(RACES[1].name);
  const [days, setDays] = useState(3);
  const [loading, setLoading] = useState(false);
  const [plan, setPlan] = useState<TrainingPlan | null>(null);

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const generatedPlan = await generateTrainingPlan(level, targetRace, days);
      setPlan(generatedPlan);
    } catch (error) {
      console.error("Erreur lors de la génération du plan:", error);
      alert("Désolé, une erreur s'est produite lors de la génération de votre plan.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 md:p-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-brand text-stone-900 mb-4">LE COACH DE PAPY JO'</h2>
        <p className="text-stone-600">L'IA au service de votre préparation trail. Obtenez un plan personnalisé en quelques secondes.</p>
      </div>

      <div className="bg-white rounded-3xl shadow-xl border border-stone-100 p-8 mb-12">
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div>
            <label className="block text-sm font-bold text-stone-700 mb-2">Votre Niveau</label>
            <select 
              value={level}
              onChange={(e) => setLevel(e.target.value)}
              className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500 outline-none"
            >
              <option>Débutant</option>
              <option>Intermédiaire</option>
              <option>Avancé</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-bold text-stone-700 mb-2">Course Cible</label>
            <select 
              value={targetRace}
              onChange={(e) => setTargetRace(e.target.value)}
              className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500 outline-none"
            >
              {RACES.map(r => <option key={r.id}>{r.name}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm font-bold text-stone-700 mb-2">Jours par semaine</label>
            <input 
              type="number" 
              min="2" 
              max="7" 
              value={days}
              onChange={(e) => setDays(parseInt(e.target.value))}
              className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500 outline-none"
            />
          </div>
        </div>

        <button 
          onClick={handleGenerate}
          disabled={loading}
          className={`w-full py-4 rounded-2xl text-white font-bold text-lg transition-all flex items-center justify-center ${loading ? 'bg-stone-400 cursor-not-allowed' : 'bg-emerald-600 hover:bg-emerald-700 hover:shadow-lg'}`}
        >
          {loading ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
              Analyse de votre profil...
            </>
          ) : 'Générer mon plan personnalisé'}
        </button>
      </div>

      {plan && (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="bg-emerald-50 border border-emerald-100 p-6 rounded-2xl">
            <h3 className="text-2xl font-brand text-emerald-900 mb-2">{plan.planTitle}</h3>
            <p className="text-emerald-800 italic">{plan.advice}</p>
          </div>

          <div className="grid gap-8">
            {plan.weeks.map((week) => (
              <div key={week.weekNumber} className="bg-white rounded-3xl p-8 border border-stone-100 shadow-sm">
                <h4 className="text-xl font-bold text-stone-800 mb-6 flex items-center">
                  <span className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm mr-3">
                    W{week.weekNumber}
                  </span>
                  Semaine {week.weekNumber}
                </h4>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {week.sessions.map((session, idx) => (
                    <div key={idx} className="p-4 bg-stone-50 rounded-xl border border-stone-200">
                      <div className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-1">{session.day}</div>
                      <div className="font-bold text-emerald-700 mb-1">{session.activity}</div>
                      <div className="text-sm text-stone-600 leading-snug">{session.details}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AICoach;
