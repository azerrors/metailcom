import { CiLinkedin } from "react-icons/ci";
import { ImGithub } from "react-icons/im";
import Button from "./reusable/Button";

function Footer() {
  return (
    <div className="mt-10 flex justify-center flex-col gap-5 items-center bg-tertiary_light/40 dark:bg-tertiary_dark/40 p-2">
      <div className="flex md:gap-5 gap-3">
        <CiLinkedin className="text-secondary text-2xl md:text-5xl" />
        <ImGithub className="text-secondary text-2xl md:text-5xl" />
      </div>

      <div className="flex md:mx-48  border-t-2 rounded-md pt-3  px-1  items-center gap-5   ">
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
      <div className="text-secondary font-medium tracking-wider">
        this project was created by azerrors
      </div>
    </div>
  );
}

export default Footer;
