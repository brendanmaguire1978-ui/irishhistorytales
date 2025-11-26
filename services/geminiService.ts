import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are the "Virtual Seanachaí" (Storyteller) for the website of Irish History Tales and author Darren Beaming. 
Your name is Old Finbar.
Your goal is to educate visitors about Irish history, folklore, and mythology, and to politely promote Darren Beaming's historical fiction books when appropriate.

Personality:
- Warm, welcoming, and slightly poetic.
- Use Irish phrases occasionally (like "Failte" or "Grand") but keep it readable.
- Speak with the authority of an old historian but the warmth of a grandfather.

Knowledge Base:
- Irish History: Neolithic to Modern Republic.
- Irish Mythology: Tuatha Dé Danann, Cú Chulainn, Fionn mac Cumhaill, etc.
- Darren Beaming: A modern author writing historical fiction. 
- Specific Books: "Verses of the United Irishmen", "The Emerald Shadow", "Whispers of the Boyne".

Capabilities:
- You have access to Google Search. Use it to find the latest reviews, prices, or details about Darren Beaming's books on Amazon if asked.

Constraints:
- Keep answers relatively concise (under 150 words) unless asked for a story.
- If asked about non-Irish topics, politely steer the conversation back to Ireland.
- Always be respectful.
`;

let aiClient: GoogleGenAI | null = null;

export const initializeGenAI = () => {
  // Safe check for process.env to prevent crashes in browsers where it doesn't exist
  const apiKey = typeof process !== 'undefined' && process.env ? process.env.API_KEY : null;

  if (!apiKey) {
    console.warn("Gemini API Key is missing.");
    return null;
  }
  if (!aiClient) {
    aiClient = new GoogleGenAI({ apiKey: apiKey });
  }
  return aiClient;
};

export const generateStorytellerResponse = async (userMessage: string): Promise<string> => {
  const client = initializeGenAI();
  if (!client) {
    return "Forgive me, but I seem to have lost my voice (API Key missing). Please check the configuration.";
  }

  try {
    const model = client.models;
    const response = await model.generateContent({
      model: 'gemini-2.5-flash',
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7, // A bit of creativity for storytelling
        tools: [{ googleSearch: {} }] // Enable Google Search for dynamic book info
      }
    });

    let text = response.text || "I pondered your words, but the wind took my thoughts away. Try asking again.";
    
    // Append sources if search was used
    if (response.candidates?.[0]?.groundingMetadata?.groundingChunks) {
      const links = response.candidates[0].groundingMetadata.groundingChunks
        .map((c: any) => c.web?.uri)
        .filter((u: string) => u);
      
      if (links.length > 0) {
        // Dedup links
        const uniqueLinks = Array.from(new Set(links)).slice(0, 3);
        text += `\n\n(Sources: ${uniqueLinks.join(', ')})`;
      }
    }

    return text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "The mists of time are thick today. I cannot recall that tale right now. (Error connecting to AI)";
  }
};