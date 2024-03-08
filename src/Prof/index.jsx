import chair from "../../public/iamge/chir.png";
import stars from "../../public/iamge/stars.png";
import { CiSquarePlus, CiSquareMinus, CiShoppingCart } from "react-icons/ci";
export default function ProfChair() {
  return (
    <div className=" container px-10 mt-40  grid grid-cols-1 lg:grid-cols-2 place-content-end gap-20">
      <div className=" flex flex-col space-y-8">
        <h1 className=" text-[40px] font-semibold">Prof Chair</h1>
        <h1 className=" text-[32px] font-semibold">$180 </h1>
        <p className=" text-[22px] max-w-[600px] text-justify">
          This side chair adds a touch of elegance and mid-century modern charm.
          Its curved back frame a wide seat, while no arms. Naturally strong
          frame with supportive foam cushioning provide comfort and support.
          <span> more</span>
        </p>

        <div className=" flex items-center gap-10">
          <h1 className=" text-[32px]">Color:</h1>
          <div className=" flex gap-3">
            <div className=" size-8 bg-orange-800 rounded-full"></div>
            <div className=" size-8 bg-slate-900 rounded-full"></div>
            <div className=" size-8 bg-red-900 rounded-full"></div>
          </div>
        </div>
        <img src={stars} className=" max-w-[400px] max-h-" alt="" />
        <div className=" flex items-center justify-start gap-5">
          <div className=" lg:text-[30px]   border-2 flex items-center justify-center gap-4 px-5 rounded-3xl">
            <CiSquarePlus />
            1
            <CiSquareMinus />
          </div>
          <div className=" lg:text-[30px]    rounded-3xl border-2 flex items-center justify-center gap-4 px-5 bg-mainColor text-white">
            Add to Cart <CiShoppingCart  />
          </div>
        </div>
      </div>

      {/* right */}
      <img className=" select-none" src={chair} alt="" />
    </div>
  );
}
