import React from "react";

const CircularCategory = (item, title) => {
  // console.log(item);

  return (
    <div className=" grid grid-cols-1">
      {" "}
      <div className="grid grid-cols-1 mx-6 my-1 cursor-pointer p-2 items-center ">
       <div className=" w-[100px] h-[100px] md:w-[150px] md:h-[150px] rounded-full border-2 flex justify-center items-center "> 
        <img
          src={item.src}
          className="circle object-contain bg-gray-100 w-20 h-20 md:w-[125px] md:h-[125px] rounded-full "
        />
       </div>
        
        <div className="text-center text-gray-900 ">{item.title}</div>
      </div>
    </div>
  );
};

export default CircularCategory;
