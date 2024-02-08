import { FaRegHeart } from "react-icons/fa6";
import { FaBars } from "react-icons/fa6";
import { BsCart, BsCart2, BsHeart } from "react-icons/bs";

import { useMainContext } from "../context/main-context";

import Button from "./reusable/Button";
import Input from "./reusable/Input";
import { Link } from "react-router-dom";

function Navbar() {
  const { mainInput, dispatch } = useMainContext();

  return (
    <div className="border  shadow-lg md:px-16 px-5 py-10 bg-tertiary ">
      <div className="flex justify-center gap-48 items-center">
        <div className="hidden md:inline-block">
          <Button btn="none" to="/">
            <img
              src="	https://cdn.britannica.com/mendel/eb-logo/MendelNewThistleLogo.png"
              alt=""
              className="w-56"
            />
          </Button>
        </div>

        <div className="hidden md:flex">
          <Input
            type="text"
            placeholder="search foods and cocktails"
            inp="nav"
            value={mainInput}
            onChange={(e) =>
              dispatch({
                type: "ACTION_GET_MAIN_INPUT",
                payload: e.target.value,
              })
            }
          />
        </div>
        {/* RESPONSIVE NAVBAR */}
        <div className="flex md:hidden  items-center gap-3">
          <FaBars
            className="text-2xl  text-secondary "
            onClick={() => dispatch({ type: "ACTION_OPEN_RESPONSIVE_NAV" })}
          />
          <div>
            <Input
              type="text"
              placeholder="search foods and cocktails"
              inp="nav"
              value={mainInput}
              onChange={(e) =>
                dispatch({
                  type: "ACTION_GET_MAIN_INPUT",
                  payload: e.target.value,
                })
              }
            />
          </div>
          <div className="flex items-center gap-2 justify-center">
            <Link to="cart">
              <BsCart className="text-2xl text-secondary " />
            </Link>
            <Link to="favorites">
              <BsHeart className="text-secondary mt-1 text-2xl " />
            </Link>
          </div>
        </div>

        <div className="md:flex items-center gap-2 hidden   ">
          <div className="mr-5 flex gap-2">
            <Button btn="nav_secondary">Login </Button>/
            <Button btn="nav_secondary"> Register</Button>
          </div>
          <Button btn="nav_secondary" to="favorites">
            <FaRegHeart className="text-2xl" />
          </Button>
          <Button btn="nav_secondary" to="cart">
            <BsCart2 className="text-2xl" />
          </Button>
        </div>
      </div>

      <div className="md:flex md:mx-48 hidden border-t-2 rounded-md pt-5 px-1 mt-10 items-center gap-5   ">
        <Button btn="nav_primary" to="meals">
          Meals
        </Button>
        <Button btn="nav_primary" to="cocktails">
          Cocktails
        </Button>
        <Button btn="nav_primary" to="about">
          About
        </Button>
        <Button btn="nav_primary" to="contact">
          Contact
        </Button>
      </div>
    </div>
  );
}

export default Navbar;
