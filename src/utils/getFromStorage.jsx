export default function getFromStorage(key, defaultValue) {
  try {
    const savedData = localStorage.getItem(key);
    return savedData ? JSON.parse(savedData) : defaultValue;
  } catch (error) {
    console.error(error);
    return defaultValue;
  }
}
