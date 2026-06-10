// React Hooks;
import { useState } from "react";

// API;
import { translateText } from "../services/openai";

export default function useTranslation() {
  const [translatedText, setTranslatedText] = useState("");
  const [isTranslating, setIsTranslating] = useState(false);
  const [showTranslation, setShowTranslation] = useState(false);
  const [error, setError] = useState("");

  const handleTranslate = async (text) => {
    if (!import.meta.env.VITE_ARVAN_API_KEY) {
      setError("Translation is unavailable.");
      return;
    }

    if (translatedText) {
      setShowTranslation((prev) => !prev);
      return;
    }

    setIsTranslating(true);
    setError("");

    try {
      const result = await translateText(text);

      setTranslatedText(result);
      setShowTranslation(true);
    } catch (err) {
      console.error(err);
      setError("Translation is unavailable.");
    } finally {
      setIsTranslating(false);
    }
  };

  return {
    translatedText,
    isTranslating,
    showTranslation,
    error,
    handleTranslate,
  };
}
