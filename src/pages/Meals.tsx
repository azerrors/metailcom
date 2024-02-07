import { Outlet } from "react-router-dom";
import DropDownMenu from "../features/Meals/DropDownMenu";

function Meals() {

  return (
    <div className="md:mx-72 mt-10">
      <section className=" md:inline-block md:ml-24 md:mb-2">
        <DropDownMenu />
      </section>
      <Outlet />
    </div>
  );
}

export default Meals;
