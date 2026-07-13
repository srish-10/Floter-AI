import { useEffect, useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    const stored = localStorage.getItem(key);

    return stored ? JSON.parse(stored) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  const clear = () => {
    localStorage.removeItem(key);
    setValue(initialValue);
  };

  return [value, setValue, clear];
};

export default useLocalStorage;