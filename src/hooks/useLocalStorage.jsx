// React Hooks;
import { useEffect, useState } from "react";

export default function useLocalStorage(key, initialData) {
  const [data, setData] = useState(() => {
    const storedData = localStorage.getItem(key);
    return storedData ? JSON.parse(storedData) : initialData;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(data));
  }, [key, data]);

  return [data, setData];
}
