import review from "../../public/iamge/reivew.png";

export default function Review() {
  return (
    <div className=" container relative my-20 grid lg:grid-cols-12">
      <div className="col-span-4">
        <img src={review} alt="" />
      </div>
    <div className=" hidden lg:block bg-white absolute shadow-2xl -bottom-4 left-[450px]  max-w-[200px] p-5 rounded-md">
            <p>The services provide is very good and friendly. the result given very very satisfying.</p>
    </div>
      <div className=" flex items-center justify-center h-full flex-col text-center col-span-8  bg-[#D7EEFF]">
        {/* <div  className=" flex items-center justify-center h-full"> */}
        <h1 className=" text-[40px] font-semibold">Our Users Feedback.</h1>
        <p className=" text-[16px] mt-2">
          Explore our customer what our valued customers say <br /> about us, to
          the overall buyer review good.
        </p>
        {/* </div> */}
      </div>
    </div>
  );
}
