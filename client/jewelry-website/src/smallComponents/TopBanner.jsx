import React from "react";

export default function TopBanner() {
  return (
    <section className="  w-full  h-[400px] rounded-3xl md:h-[600px]  ">
      <div className="relative md:w-[80%] mx-auto md:mx-36 w-[85%] h-[90%] md:h-[100%] overflow-hidden   top-24 rounded-3xl  ">
        <img
          className="  rounded-3xl h-[85%] w-[100%]  md:h-[85%] md:w-[100%] object-cover "
          src="jewel-1.jpg"
          alt="Banner Jewelry"
        />
        <div className=" absolute  top-0 left-0 right-0  h-[50%] md:h-[70%] flex rounded-3xl  items-center justify-center text-white mx-auto  md:mx-20 ">
          <div className="  grid md:grid-cols-1 mt-[200px] md:mt-0    text-center">
            <h1 className="text-xl  md:text-5xl uppercase font-light md:mb-20 ">
              Jewellery <br className="pt-10" /> That Tells Your Story
            </h1>
            {/* <p className="max-w-md mx-auto mb-6 text-xs md:text-base">
              Lorem ipsum dolor sit amet consectetur. Massa a enim ultricies
              tortor mattis dictum malesuada an fames sagittis metus eget lorem.
            </p> */}
            <button className="border mt-10 md:mt-0 mx-auto bg-black/10 border-yellow-400 text-white-400 hover:bg-yellow-400 hover:text-white transition px-6 py-2 text-xs rounded md:text-base md:font-semibold ">
              EXPLORE NOW →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
