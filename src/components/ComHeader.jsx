/* eslint-disable react/prop-types */
export default function ComHeader({ head, dic }) {
  return (
    <div className=" lg:mt-16 mt-10 opacity-80 gap-7 flex items-center justify-center flex-col">
      <h1 className=" font-bold lg:text-[48px] md:text-[38px] text-[28px] text-center leading-[30px]">
        {head}
      </h1>
      <h1 className=" max-w-[600px]  text-center font-medium lg:text-[22px] md:text-[20px] text-[18px] lg:leading-[27px] leading-[18px]">
        {dic}
      </h1>
    </div>
  );
}
