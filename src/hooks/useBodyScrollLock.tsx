import { useEffect, useState, useRef } from "react";

function useBodyScrollLock() {
  const bodyRef = useRef(document.body);
  const [isLocked, setIsLocked] = useState(false);

  useEffect(() => {
    const bodyStyle = bodyRef.current.style;
    bodyStyle.overflowY = isLocked ? "hidden" : "auto";
    return () => {
      bodyStyle.overflowY = "auto"; // Reset overflow style on unmount
    };
  }, [isLocked]);

  const toggle = () => setIsLocked((locked) => !locked);

  return { isLocked, toggle };
}

export default useBodyScrollLock;
