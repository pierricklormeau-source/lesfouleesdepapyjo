
import React from 'react';
import { RACES } from '../constants';

const RaceSection: React.FC = () => {
  return (
    <section id="races" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-brand text-stone-900 mb-4 uppercase tracking-wide">Choisissez votre défi</h2>
          <div className="w-24 h-1.5 bg-emerald-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-stone-600 max-w-xl mx-auto">
            Formats enfant de 6 à 11 ans. 2 parcours à travers la campagne hilairoise.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {RACES.map((race) => (
            <div 
              key={race.id} 
              className="group relative bg-stone-50 rounded-3xl overflow-hidden border border-stone-100 hover:shadow-2xl transition-all hover:-translate-y-2 flex flex-col"
            >
              <div className={`h-3 w-full ${race.color}`}></div>
              <div className="p-8 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-brand text-stone-900 mb-1 leading-tight">{race.name}</h3>
                    <div className="flex items-center text-emerald-600 font-bold text-lg">
                      {race.distance} {race.elevation && `• ${race.elevation} D+`}
                    </div>
                  </div>
                  <span className="bg-stone-200 text-stone-700 px-3 py-1 rounded-full text-sm font-bold shrink-0 ml-2">
                    {race.price}
                  </span>
                </div>
                
                <ul className="space-y-4 mb-10 text-stone-600 text-sm font-medium">
                  <li className="flex items-center">
                    <div className="bg-emerald-100 p-1.5 rounded-lg mr-3">
                      <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    Départ à {race.time}
                  </li>
                </ul>

                <div className="mt-auto">
                  <button className={`w-full py-4 rounded-xl text-white font-black transition-all hover:scale-[1.02] shadow-lg ${race.color}`}>
                    DÉTAILS DU PARCOURS
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RaceSection;
