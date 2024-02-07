import { Outlet } from "react-router-dom";
import DropdownMenu from "../features/Cocktails/DropdownMenu";

function Cocktails() {
  return (
    <div className="mx-72 mt-10">
      <section className="ml-24 mb-2">
        <DropdownMenu />
      </section>
      <Outlet />
    </div>
  );
}

export default Cocktails;
