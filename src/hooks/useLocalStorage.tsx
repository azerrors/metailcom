import { useState } from "react";

function useLocalStorage(key: string) {
  const [data, setData] = useState([]);

  function setItem(value: unknown) {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      console.log(err);
    }
  }

  function getItem() {
    try {
      const item = window.localStorage.getItem(key);

      return item ? JSON.parse(item) : undefined;
    } catch (err) {
      console.log(err);
    }
  }

  return { setItem, getItem, data };
}

export default useLocalStorage;
