import OpenAI from "openai";

export async function translateText(text) {
  const apiKey = import.meta.env.VITE_ARVAN_API_KEY;

  if (!apiKey) {
    throw new Error(" service configured error");
  }

  const client = new OpenAI({
    apiKey,
    baseURL: import.meta.env.VITE_ARVAN_BASE_URL,
    dangerouslyAllowBrowser: true,
  });

  try {
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
  } catch (err) {
    throw new Error("translation failed");
  }
}
