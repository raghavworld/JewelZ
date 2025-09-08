import { HamIcon, Menu } from "lucide-react";
import React, { useRef } from "react";
import { Link } from "react-router-dom";
const items = [
  {
    title: "Trending",
    link: "/shop/trending",
    children: [
      { title: "earrings", link: "/products/earrings" },
      { title: "necklaces", link: "/products/necklaces" },
      { title: "rings", link: "/products/rings" },
    ],
  },
  {
    title: "Classics",
    link: "/products/classics",
    children: [
      { title: "earrings", link: "/products/earrings" },
      { title: "necklaces", link: "/products/necklaces" },
      { title: "rings", link: "/products/rings" },
    ],
  },
  {
    title: "Customer",
    link: "/contact",
  },
];

const SidebarItem = ({ item }) => {
  return (
    <div className="m-0">
      <div className=" py-2  mb-1 text-gold hover:text-white cursor-pointer hover:bg-gold z-[20] rounded-md shadow-lg  ease-in-out transition-all font-semibold">
        <Link to={item.link} className="   pl-5 text-xs font-normal">
          {item.title}
        </Link>
      </div>
    </div>
  );
};

const Sidebar = () => {
  const [openSideBar, setOpenSideBar] = React.useState(false);
  const ref = useRef(null);
  const handleClose = (event) => {
    console.log("mouseclick");

    if (!ref.current) {
      setOpenSideBar(false);
    }
  };

  return (
    <div
      // onMouseDown={handleClose}
      className={` sidebar ${
        openSideBar ? "w-[800px]" : "block w-[800px] h-[30px]"
      }   z-10 top-[1.8rem]  fixed  sm:block `}
    >
      <div className=" grid bg-[#fbf6f3] object-contain w-[100%] sm:w-full grid-cols-10 sm:grid-cols-12 z-12  p-1   rounded-md shadow-md  ">
        <div className="col-span-2  sm:col-span-4 items-start  ">
          <button onClick={() => setOpenSideBar(!openSideBar)}>
            {openSideBar ? (
              <Menu className=" transition-all duration-300 ease-in-out rotate-90" />
            ) : (
              <Menu className=" transition-all duration-300 ease-in-out rotate-180" />
            )}
          </button>
        </div>
        <div className="col-span-7 sm:col-span-6 flex items-start">
          <Link to="/" className="text-lg  text-gold  font-normal">
            Jewel-Z
          </Link>
        </div>
      </div>
      {/* {//! sidebar Open/Close } */}
      {
        <div
          // ref={ref}
          className={`sidebar-container h-[95.4vh] z-5 w-[40%] bg-[#fff9f5]  transition-all duration-100 ease-in-out ${
            openSideBar
              ? "  transform translate-x-0 "
              : "transform -translate-x-full"
          }  `}
        >
          <div className="sidebar-content ">
            {items.map((item, idx) => (
              <SidebarItem key={idx} item={item} />
            ))}
          </div>
        </div>
      }
    </div>
  );
};

export default Sidebar;
