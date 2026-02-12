
import React from 'react';
import { AppView } from '../types';

interface NavigationProps {
  currentView: AppView;
  onViewChange: (view: AppView) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentView, onViewChange }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div 
            className="flex items-center cursor-pointer group"
            onClick={() => onViewChange('home')}
          >
            <span className="font-brand text-2xl text-stone-800 tracking-wider">Les Foulées de Papy Jo'</span>
          </div>

          <div className="hidden md:flex space-x-8 items-center">
            <button 
              onClick={() => onViewChange('home')}
              className={`text-sm font-semibold transition-colors ${currentView === 'home' ? 'text-emerald-600' : 'text-stone-600 hover:text-emerald-500'}`}
            >
              Accueil
            </button>
            <button 
              onClick={() => onViewChange('results')}
              className={`text-sm font-semibold transition-colors ${currentView === 'results' ? 'text-emerald-600' : 'text-stone-600 hover:text-emerald-500'}`}
            >
              Résultats
            </button>
            <button 
              onClick={() => onViewChange('register')}
              className="bg-emerald-600 text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-emerald-700 transition-shadow hover:shadow-lg ml-4"
            >
              S'inscrire
            </button>
          </div>

          {/* Mobile Menu Button - Simplified */}
          <div className="md:hidden flex items-center">
            <button 
               onClick={() => onViewChange('register')}
               className="bg-emerald-600 text-white px-3 py-1.5 rounded-full text-xs font-bold"
            >
              S'inscrire
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
