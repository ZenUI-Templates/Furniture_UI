import ComHeader from "../components/ComHeader";
import col6 from "../../public/iamge/col6.png";

import iamge1 from "../../public/iamge/6 chirs/image1.png";
 
import iamge2 from "../../public/iamge/6 chirs/image2.png";
import iamge3 from "../../public/iamge/6 chirs/image3.png";
import iamge4 from "../../public/iamge/6 chirs/image1.png";
import iamge5 from "../../public/iamge/6 chirs/image5.png";
import iamge6 from "../../public/iamge/6 chirs/image6.png";

export default function Categories() {
  const data = [iamge1, iamge2, iamge3, iamge4, iamge5, iamge6];
  return (
    <div className=" mt-20">
      <ComHeader head={"Categories In Furniture"} />
      <div className=" lg:px-10 container mt-5 grid lg:grid-cols-2 grid-cols-1">
        <img src={col6} alt="" />
        <div className=" grid grid-cols-2 gap-2 mt-2">
          {data.map((item, i) => (
            <img src={item} key={i} alt="" />
          ))}
        </div>
      </div>
    </div>
  );
}
