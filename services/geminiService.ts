
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getAIResponse = async (userPrompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userPrompt,
      config: {
        systemInstruction: "You are SipRefresh's Business Assistant. You help potential investors understand the beverage franchise model in India. Be professional, encouraging, and informative. Our models are Distributorship (district level) and Retail Franchise. Focus on low investment and high ROI.",
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm sorry, I'm having trouble connecting right now. Please fill out our contact form or call our support line.";
  }
};
