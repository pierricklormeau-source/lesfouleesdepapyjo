
import { Race } from './types';

export const RACES: Race[] = [
  {
    id: 'kids',
    name: "La Galopade des P'tits Loups",
    distance: "3 distances",
    elevation: "",
    time: "11:00",
    price: "2 €",
    color: "bg-amber-400",
    description: ""
  },
  {
    id: 'discovery',
    name: "Le Sentier de Papy",
    distance: "10 km",
    elevation: "30m",
    time: "10:30",
    price: "12 €",
    color: "bg-emerald-500",
    description: ""
  },
  {
    id: 'expert',
    name: "Le Défi du Vieux Loup",
    distance: "20 km",
    elevation: "68m",
    time: "10:00",
    price: "20 €",
    color: "bg-orange-600",
    description: ""
  }
];

export const RACE_DATE = new Date('2026-10-11T09:00:00');
