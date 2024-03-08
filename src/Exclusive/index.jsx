import ComHeader from "../components/ComHeader";
import iamge1 from "../../public/iamge/charis/1.png";
import iamge2 from "../../public/iamge/charis/2.png";
import iamge3 from "../../public/iamge/charis/3.png";

export default function Exlucive() {
  const data = [iamge1, iamge2, iamge3];
  return (
    <div className="container my-32 lg:px-20">
      <ComHeader head={"Exclusive Furniture"} />
      <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  lg:gap-10 gap-5 mt-10">
        {data.map((item, index) => (
          <img className=" object-fill" src={item} key={index} alt="" />
        ))}
      </div>
    </div>
  );
}
