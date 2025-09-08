import { Flex, Text, Button } from "@radix-ui/themes";
import React from "react";

const TopTicker = () => {
  return (
    <div className="fixed z-[5] w-full bg-gray-100">
      <div className="bg-gray-800 ">
        <div className="flex  justify-center md:gap-80 text-[9px] gap-10 md:text-xs md:font-medium text-gold bg-background p-2">
          <div className="gap-10 justify-center  flex items-center">
            {" "}
            <span className="from-neutral-50  cursor-pointer hover:text-white text-card">
              Free Shipping on all orders over Rs.500
            </span>
            <span className=" hover:text-white cursor-pointer">
              Call: 8375006350
            </span>
          </div>
          <span>Made In India {"<3"} </span>
        </div>
      </div>
    </div>
  );
};

export default TopTicker;
