import { CiLinkedin } from "react-icons/ci";
import { ImGithub } from "react-icons/im";
import Button from "./reusable/Button";

function Footer() {
  return (
    <div className="flex justify-center flex-col gap-5 items-center bg-tertiary_light/40 dark:bg-tertiary_dark/40 p-2">
      <div className="flex gap-5">
        <CiLinkedin className="dark:text-secondary text-2xl md:text-5xl" />
        <ImGithub className="dark:text-secondary text-2xl md:text-5xl" />
      </div>

      <div className="md:flex md:mx-48 hidden border-t-2 rounded-md pt-3  px-1  items-center gap-5   ">
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
