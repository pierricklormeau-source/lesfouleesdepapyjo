
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export interface TrainingPlan {
  planTitle: string;
  weeks: {
    weekNumber: number;
    sessions: {
      day: string;
      activity: string;
      details: string;
    }[];
  }[];
  advice: string;
}

export const generateTrainingPlan = async (
  level: string,
  targetRace: string,
  daysPerWeek: number
): Promise<TrainingPlan> => {
  const prompt = `Génère un plan d'entraînement de 4 semaines pour une course de type trail appelée "${targetRace}". 
  Le coureur est de niveau "${level}" et souhaite s'entraîner ${daysPerWeek} jours par semaine. 
  Réponds en français.`;

  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          planTitle: { type: Type.STRING },
          weeks: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                weekNumber: { type: Type.NUMBER },
                sessions: {
                  type: Type.ARRAY,
                  items: {
                    type: Type.OBJECT,
                    properties: {
                      day: { type: Type.STRING },
                      activity: { type: Type.STRING },
                      details: { type: Type.STRING }
                    },
                    required: ["day", "activity", "details"]
                  }
                }
              },
              required: ["weekNumber", "sessions"]
            }
          },
          advice: { type: Type.STRING }
        },
        required: ["planTitle", "weeks", "advice"]
      }
    }
  });

  return JSON.parse(response.text || '{}');
};
