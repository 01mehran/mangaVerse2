import OpenAI from "openai";

const client = new OpenAI({
  apiKey: import.meta.env.VITE_ARVAN_API_KEY,
  baseURL: import.meta.env.VITE_ARVAN_BASE_URL,
  dangerouslyAllowBrowser: true,
});

export async function translateSynopsis(text) {
  const response = await client.chat.completions.create({
    model: import.meta.env.VITE_ARVAN_MODEL,
    messages: [
      {
        role: "system",
        content:
          "You are a professional translator. Translate manga synopses from English to Persian.",
      },
      {
        role: "user",
        content: text,
      },
    ],
    temperature: 0.3,
  });

  return response.choices[0].message.content ?? "";
}
