import Input from "../ui/reusable/Input";
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";

function Contact() {
  return (
    <div className="flex justify-center gap-24  ">
      <div className="md:mt-28 mt-10">
        <h2 className="mb-10 text-4xl dark:text-secondary ">Contact Us</h2>
        <form className="flex flex-col  gap-5">
          <div className="relative">
            <IoPersonOutline className="absolute text-secondary text-xl top-1 md:top-2 left-2" />
            <Input inp="secondary" placeholder="Name" />
          </div>
          <div className="relative">
            <MdOutlineMailOutline className="absolute text-secondary text-xl top-1 md:top-2 left-2" />
            <Input inp="secondary" type="email" placeholder="Email" />
          </div>
          <textarea
            name="Message"
            placeholder="Message"
            className="focus:outline-none dark:text-secondary dark:bg-tertiary_dark/50  placeholder:text-secondary p-1 rounded-md placeholder:text-xl bg-tertiary_light/50"
            cols={30}
            rows={10}
          ></textarea>
          <button className="p-2 bg-tertiary_light dark:bg-tertiary_dark text-secondary rounded:md cursor-pointer">
            Send
          </button>
        </form>
      </div>
      <img
        src="contactbanner.png"
        className="md:inline-block hidden dark:mix-blend-color-burn mix-blend-darken"
        alt=""
      />
    </div>
  );
}

export default Contact;
