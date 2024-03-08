import { useState } from "react";
import Logo from "../../public/iamge/logo.png";
import { CiMenuFries } from "react-icons/ci";
import { IoClose, IoSearch } from "react-icons/io5";
import Button from "../components/button";

export default function Index() {
  const data = ["Home", "About", "Shop", " Contact"];

  const [open, setOpen] = useState(true);
  return (
    <nav>
      <div className="container py-2 flex items-center justify-between">
        {/* logo */}
        <div className=" object-container select-none">
          <img src={Logo} alt="" />
        </div>

        {/* menu */}
        <div className=" font-medium  hidden  md:flex  items-center justify-center space-x-4">
          {data.map((item, index) => (
            <li key={index} className=" list-none">
              {item}
            </li>
          ))}
        </div>

        {/* rigth side  */}

        <div className=" md:hidden" onClick={() => setOpen(!open)}>
          {open ? <CiMenuFries size={30} /> : <IoClose size={30} />}
        </div>

        <div className=" hidden md:flex items-center justify-center gap-10 ">
          <div className=" hidden lg:flex gap-3 items-center  justify-center bg-bgCard border rounded-full px-4  py-2">
            <IoSearch />
            <input
              className=" outline-none"
              type="text"
              name=""
              placeholder="Search Furniture"
              id=""
            />
          </div>
          <Button />
        </div>
      </div>

      {/* for mobile device */}
      <div
        className={`flex flex-col items-center justify-center duration-500  ease-in-out ${
          open ? "  hidden" : " block"
        }`}
      >
        {data.map((item, index) => (
          <li key={index} className=" list-none">
            {item}
          </li>
        ))}
      </div>
    </nav>
  );
}
