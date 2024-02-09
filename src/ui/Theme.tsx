import { useEffect, useState } from "react";
import { IoMoonOutline } from "react-icons/io5";

import { HiOutlineSun } from "react-icons/hi";

function Theme() {
  const [theme, setTheme] = useState("light");


  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  },[theme]);

  const handleSetTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="text-center">
      {theme !== "dark" ? (
        <>
          <IoMoonOutline
            className="mr-8 cursor-pointer text-xl text-secondary md:text-2xl"
            onClick={handleSetTheme}
          />
        </>
      ) : (
        <>
          <HiOutlineSun
            className="mr-8 cursor-pointer text-xl text-secondary md:text-2xl"
            onClick={handleSetTheme}
          />
        </>
      )}
      {/* <input type="checkbox" id="switch" onClick={handleSetTheme} />
      <label htmlFor="switch">Toggle</label> */}
    </div>
  );
}

export default Theme;
