import { BsHeart } from "react-icons/bs";
import { FaDownLeftAndUpRightToCenter } from "react-icons/fa6";

import { useEffect } from "react";
import { useMainContext } from "../context/main-context";
import Button from "./reusable/Button";
import { Link } from "react-router-dom";

function ResponsiveNav() {
  const { dispatch, showResponsiveNav } = useMainContext();

  function closeNavbar() {
    dispatch({ type: "ACTION_CLOSE_RESPONSIVE_NAV" });
  }

  useEffect(() => {
    document.body.style.overflowY = showResponsiveNav ? "hidden" : "";
  }, [showResponsiveNav]);
  return (
    <div className="absolute bg-tertiary overflow-y-hidden w-full h-screen top-0 z-50">
      <section className="flex justify-end p-1">
        <FaDownLeftAndUpRightToCenter
          className="text-secondary text-2xl"
          onClick={closeNavbar}
        />
      </section>
      <section className="flex justify-center items-center mt-10">
        <Button btn="none" to="/">
          <img
            src="https://cdn.britannica.com/mendel/eb-logo/MendelNewThistleLogo.png"
            alt=""
            className="w-56"
            onClick={closeNavbar}
          />
        </Button>
      </section>

      <section className="flex justify-center flex-col items-center mt-20 gap-8">
        <div onClick={closeNavbar}>
          <Button btn="nav_tertiary" to="meals">
            Meals
          </Button>
        </div>
        <div onClick={closeNavbar}>
          <Button btn="nav_tertiary" to="cocktails">
            Cocktails
          </Button>
        </div>
        <div onClick={closeNavbar}>
          <Button btn="nav_tertiary" to="about">
            About
          </Button>
        </div>
        <div onClick={closeNavbar}>
          <Button btn="nav_tertiary" to="contact">
            Contact
          </Button>
        </div>
      </section>

      <section className="flex mt-20 justify-center gap-5 ">
        <Button btn="primary">Login</Button>
        <Button btn="secondary">Register</Button>
      </section>
    </div>
  );
}

export default ResponsiveNav;
