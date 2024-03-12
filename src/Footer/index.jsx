/* eslint-disable react/jsx-key */
import {
  IoSearch,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoLinkedin,
} from "react-icons/io5";
import Logo from "../../public/iamge/logo.png";

function Footer() {
  const icon = [
    <IoLogoFacebook size={25} />,
    <IoLogoInstagram size={25} />,
    <IoLogoLinkedin size={25} />,
  ];
  return (
    <section className="mt-5 bg-[#313131]">
      <footer className="text-[#DDDDDD] list-none container lg:py-16 w-full gap-10 flex-col md:flex-row flex items-start justify-between">
        <div className=" ">
          <img src={Logo} alt="" className=" " />
          <p className=" mb- text-white font-light mt-2 leading-[25px] max-w-[500px]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam ut
            est ipsa, sapiente eveniet ducimus laudantium aut odio? Aliquid o
          </p>
          <div className=" flex items-center gap-4 mt-3">
            {icon.map((item, index) => (
              <div className=" size-10" key={index}>
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className=" space-y-3 ">
          <h1 className=" text-[20px] mb-"> About Us</h1>
          <li>Review</li>
          <li>Blog</li>
          <li>Contact Us</li>
        </div>
        <div className=" space-y-3 ">
          <h1 className=" text-[20px] mb-">FAQ</h1>
          <li>Careers</li>
          <li>Returns</li>
          <li>Shipping</li>
        </div>
        <div className=" space-y-3 ">
          <h1 className=" text-[20px] mb-">Subsribe Our newsletter</h1>
          <div className=" bg-white hidden lg:flex gap-3 items-center  justify-center bg-bgCard border rounded-full px-4  py-2">
            <IoSearch />
            <input
              className=" outline-none text-black"
              type="text"
              name=""
              placeholder="Search Furniture"
              id=""
            />
          </div>
        </div>
      </footer>
    </section>
  );
}

export default Footer;
