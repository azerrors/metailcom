import { Outlet } from "react-router-dom";
import DropdownMenu from "../features/Cocktails/DropdownMenu";

function Cocktails() {
  return (
    <div className="md:mx-72 mt-10">
      <section className="md:ml-24 md:mb-2">
        <DropdownMenu />
      </section>
      <Outlet />
    </div>
  );
}

export default Cocktails;
