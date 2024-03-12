import review from "../../public/iamge/reivew.png";

export default function Review() {
  return (
    <div className=" container relative my-20 grid grid-cols-1 lg:grid-cols-12">
      <div className="lg:col-span-4 hidden lg:block">
        <img src={review} alt="" />
      </div>
      <div className=" hidden lg:block bg-white absolute shadow-2xl -bottom-4 left-[450px]  max-w-[200px] p-5 rounded-md">
        <p>
          The services provide is very good and friendly. the result given very
          very satisfying.
        </p>
      </div>
      <div className=" flex items-center justify-center h-full flex-col text-center lg:col-span-8  bg-[#D7EEFF] py-20">
        {/* <div  className=" flex items-center justify-center h-full"> */}
        <h1 className=" lg:text-[40px] md:text-[35px] text-[30px] font-semibold leading-[46px]">
          Our Users Feedback.
        </h1>
        <p className=" log:text-[16px] text-[15px] mt-2">
          Explore our customer what our valued customers say <br /> about us, to
          the overall buyer review good.
        </p>
        {/* </div> */}
      </div>
    </div>
  );
}
