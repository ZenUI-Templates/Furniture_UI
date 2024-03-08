export default function Couter() {
  const data = [
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
  console.log("gskjlgh");
  return (
    <div className="  container px-20  flex items-center justify-center z-50 mb-20 -mt-10">
      <div className=" bg-[#313131] text-bgColor min-w-[800px] py-10 flex flex-1 items-center justify-center rounded-2xl  ">
        {data.map((item, index) => (
          <div className=" flex flex-col items-center flex-1" key={index}>
            <h1 className=" text-[30px] font-semibold lg:text-[36px]">
              {item.number}
            </h1>
            <h1 className=" font-medium ">{item.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}
