
import React, { useState } from 'react';
import { RACES } from '../constants';

const RegisterForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-md mx-auto py-24 text-center">
        <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
        </div>
        <h2 className="text-3xl font-brand text-stone-900 mb-4">C'est validé !</h2>
        <p className="text-stone-600 mb-8">Votre pré-inscription est enregistrée. Vous allez recevoir un email de confirmation avec les prochaines étapes pour le paiement et le certificat médical.</p>
        <button 
          onClick={() => window.location.reload()}
          className="bg-stone-900 text-white px-8 py-3 rounded-full font-bold"
        >
          Retour à l'accueil
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
        <div className="bg-emerald-600 p-8 text-white">
          <h2 className="text-3xl font-brand mb-2">Inscription - Édition 2026</h2>
          <p className="opacity-90">Préparez vos baskets, l'aventure commence ici.</p>
        </div>
        
        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-stone-700 mb-2">Prénom</label>
              <input required type="text" className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500 outline-none" />
            </div>
            <div>
              <label className="block text-sm font-bold text-stone-700 mb-2">Nom</label>
              <input required type="text" className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500 outline-none" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-stone-700 mb-2">Email</label>
            <input required type="email" className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500 outline-none" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-stone-700 mb-2">Date de naissance</label>
              <input required type="date" className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500 outline-none" />
            </div>
            <div>
              <label className="block text-sm font-bold text-stone-700 mb-2">Genre</label>
              <select className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500 outline-none">
                <option>Femme</option>
                <option>Homme</option>
                <option>Autre</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-stone-700 mb-2">Choisir une course</label>
            <div className="grid gap-3">
              {RACES.map(race => (
                <label key={race.id} className="relative flex items-center p-4 border border-stone-200 rounded-xl cursor-pointer hover:bg-stone-50 transition-colors">
                  <input type="radio" name="race" value={race.id} className="w-5 h-5 text-emerald-600 focus:ring-emerald-500" defaultChecked={race.id === 'discovery'} />
                  <div className="ml-4">
                    <div className="font-bold text-stone-900">{race.name}</div>
                    <div className="text-sm text-stone-500">{race.distance} — {race.price}</div>
                  </div>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-stone-700 mb-2">Certificat médical ou Licence (optionnel)</label>
            <input type="file" className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500 outline-none" />
            <p className="mt-2 text-xs text-stone-400">Vous pourrez également le charger plus tard.</p>
          </div>

          <div className="pt-4">
            <button type="submit" className="w-full py-4 bg-emerald-600 text-white rounded-2xl font-bold text-lg hover:bg-emerald-700 transition-shadow shadow-lg">
              Finaliser mon inscription
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
