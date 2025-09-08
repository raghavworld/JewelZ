import React from "react";
import CircularCategory from "./CircularCategory";


const MostLoved = () => {
  const categoryData = [
    {
      src: "earring.png",
      title: "earrings",
    },
    {
      src: "necklace.png",
      title: "necklaces",
    },
    {
      src: "rings.png",
      title: "rings",
    },
    {
      src: "bracelate.png",
      title: "bracelets",
    },
  ];

  return (
    <>
    < p className="text-2xl md:text-4xl text-gold font-mono mt-10  text-center upper "> Most Loved...{'<3'}</p>
    <div className="my-6 md:my-8 mx-auto md:gap-[150px] grid grid-cols-2 md:grid-cols-4 items-center">
      
      {categoryData.map((item, idx) => (
          
        <CircularCategory key={idx} src={item.src} title={item.title} />
        ))}
 
         </div>
         </>
  );
};

export default MostLoved;
