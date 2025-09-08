import React from "react";
import TopTicker from "../smallComponents/TopTicker";
import TopBanner from "../smallComponents/TopBanner";
import Banner from "../smallComponents/Banner";
import MostLoved from "../smallComponents/MostLoved";

const Landing = () => {
  return (
    <>
      <div className="grid  ">
       
           <TopBanner/>
            <MostLoved/>

           
           </div>
    </>
  );
};

export default Landing;
