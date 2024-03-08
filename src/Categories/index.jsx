import ComHeader from "../components/ComHeader";
import col6 from "../../public/iamge/col6.png";


export default function Categories() {
  return (
    <div className=" mt-20">
      <ComHeader head={"Categories In Furniture"} />
      <div className=" container grid lg:grid-cols-2 grid-cols-2">
        <img src={col6} alt="" />
        <div>

        </div>
      </div>
    </div>
  );
}
