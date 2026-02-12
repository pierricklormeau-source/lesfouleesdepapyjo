
import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import RaceSection from './components/RaceSection';
import RegisterForm from './components/RegisterForm';
import Footer from './components/Footer';
import { AppView } from './types';

const App: React.FC = () => {
  const [view, setView] = useState<AppView>('home');

  // Simple hash-based "routing"
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as AppView;
      if (['home', 'register', 'results'].includes(hash)) {
        setView(hash);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (newView: AppView) => {
    window.location.hash = newView;
    setView(newView);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation currentView={view} onViewChange={navigate} />
      
      <main className="flex-grow pt-16">
        {view === 'home' && (
          <>
            <Hero onRegisterClick={() => navigate('register')} />
            <RaceSection />
            <section className="bg-stone-900 py-20 text-white overflow-hidden relative">
              <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
                <div className="md:w-1/2">
                  <h2 className="text-4xl font-brand mb-6 uppercase tracking-wider">L'esprit de Papy Jo'</h2>
                  <p className="text-stone-300 mb-8 leading-relaxed text-lg">
                    "Courir, ce n'est pas seulement aller vite d'un point A à un point B. C'est ressentir la terre sous ses pieds, l'air dans ses poumons et le calme de la campagne qui nous entoure."
                  </p>
                  <p className="text-emerald-400 font-bold italic">— Joseph "Papy Jo" Durand, fondateur de la course.</p>
                </div>
                <div className="md:w-1/2">
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-amber-500 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                    <img 
                      src="https://images.unsplash.com/photo-1461896704190-3213c9ad81e1?q=80&w=2070&auto=format&fit=crop" 
                      alt="Running in forest" 
                      className="relative rounded-3xl shadow-2xl"
                    />
                  </div>
                </div>
              </div>
            </section>
          </>
        )}

        {view === 'register' && <RegisterForm />}
        
        {view === 'results' && (
          <div className="max-w-4xl mx-auto py-24 text-center px-4">
            <h2 className="text-4xl font-brand mb-6">RÉSULTATS</h2>
            <div className="bg-white p-12 rounded-3xl border border-stone-200 shadow-xl">
              <p className="text-stone-600 mb-6">Les résultats de l'édition 2026 seront publiés ici en direct le 11 octobre prochain.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-lg mx-auto">
                 <button className="p-4 bg-stone-100 rounded-xl font-bold hover:bg-emerald-100 transition-colors">Résultats 2026 (PDF)</button>
                 <button className="p-4 bg-stone-100 rounded-xl font-bold hover:bg-emerald-100 transition-colors">Galerie Photos 2026</button>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default App;
