import ComHeader from "../components/ComHeader";
import image1 from "../../public/iamge/award.png";
import image2 from "../../public/iamge/w.png";
import image3 from "../../public/iamge/Headset.png";
import image4 from "../../public/iamge/truck.png";
export default function Benefit() {
  const data = [
    {
      icon: image1,
      title: "High Quality",
    },
    {
      icon: image2,
      title: "Warrenty",
    },
    {
      icon: image3,
      title: "Free Shipping",
    },
    {
      icon: image4,
      title: "24/7 Support",
    },
  ];

  return (
    <div className="container mt-32 lg:px-20">
      <ComHeader head={"Benefit Furnidream For You"} />
      <div className=" grid lg:grid-cols-4 grid-cols-2 lg:gap-10 gap-5 mt-10">
        {data.map((item, index) => (
          <div className=" rounded-2xl px-5 lg:py-10 py-5 card" key={index}>
            <div className=" bg-mainColor lg:p-4 p-2 rounded-full ">
              <img src={item.icon} alt="" />
            </div>
            <h3  className=" opacity-80">{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
