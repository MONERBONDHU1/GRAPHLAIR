
import { GoogleGenAI } from "@google/genai";

/**
 * Service to interact with the Gemini 3 Pro model for 3D design tutoring.
 * Follows the latest @google/genai SDK guidelines.
 */
export const getTutorResponse = async (message: string) => {
  // Always create a new instance with the API key from process.env.API_KEY
  // Create a new instance right before making an API call to ensure it always uses the most up-to-date API key.
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      // Use gemini-3-pro-preview for complex text tasks like advanced reasoning and coding
      model: 'gemini-3-pro-preview',
      contents: message,
      config: {
        systemInstruction: "You are GRAPHLAIR AI, an ultra-modern 3D Design Assistant for the GRAPHLAIR Academy. You specialize in Blender, Unreal Engine 5, Maya, and Three.js. Your tone is professional, encouraging, and tech-forward. Use markdown for code snippets and bold text for key concepts.",
        temperature: 0.8,
        // The Thinking Config is available for Gemini 3 series models.
        // A higher token count allows for more detailed reasoning.
        thinkingConfig: { thinkingBudget: 32768 },
      },
    });
    
    // The response object features a text property (not a method) that directly returns the string output.
    return response.text || "I'm having trouble connecting to the grid. Please try again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The neural link is unstable. Please check your connection.";
  }
};
