import { AiTwotonePauseCircle } from "react-icons/ai";
import ComHeader from "../components/ComHeader";
import HeroImg from "../../public/iamge/heroimg.png";

const data = {
  dic: " Your Home Should Tell The Story of Who you are & be a collection of what you love.",
  head: " Make Your Home With Beautiful Furniture",
};

const datas = [
  {
    number: "900+",
    name: "Modern Furniture",
  },
  {
    number: "300+",
    name: "Unique Style",
  },
  {
    number: "500+",
    name: "Happy Customer",
  },
];

export default function Hero() {
  return (
    <>
      <div className=" container flex flex-col items-center justify-center text-center">
        <ComHeader dic={data.dic} head={data.head} />
      </div>
      <div className="container mt-10 relative ">
        <div className=" hidden lg:flex items-center mt-10 gap-3 ml-10   absolute  px-2 rounded-md max-w-[150px] min-h-[50px] font-medium  bg-white bg-opacity-50">
          <AiTwotonePauseCircle color="orange" /> Watch Now
        </div>
        <img src={HeroImg} className="w-full object-contain" alt="hero image" />
      </div>
      <div className="  container px-20  flex items-center justify-center z-50 mb-20 -mt-10">
        <div className=" relative bg-[#313131] gap-3 backdrop-blur-lg text-bgColor min-w-[350px]  sm:min-w-[500px] md:min-w-[600px] lg:min-w-[1000px] py-5 lg:py-10 flex  items-center justify-center rounded-2xl  ">
          {datas.map((item, index) => (
            <div className=" flex flex-col sm:flex-1 items-center" key={index}>
              <h1 className=" text-[17px] sm:text-[25] font-semibold lg:text-[36px]">
                {item.number}
              </h1>
              <h1 className="text-[14px] sm:text-[25] font-medium ">
                {item.name}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
