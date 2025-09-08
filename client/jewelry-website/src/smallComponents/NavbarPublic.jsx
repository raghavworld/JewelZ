import { NavigationMenuItem } from "@radix-ui/react-navigation-menu";
import { ChevronDown, HamIcon, MenuIcon } from "lucide-react";
import * as React from "react";
import { Link } from "react-router-dom";

const items = [
  {
    title: "Shop",
    link: "/shop",
    children: [
      {
        title: "Trending",
        link: "/shop/trending",
        children: [
          { title: "earrings", link: "/products/earrings" },
          { title: "necklaces", link: "/products/necklaces" },
          { title: "rings", link: "/products/rings" },
        ],
      },
      { title: "Classics", link: "/shop/classics" },
    ],
  },
  {
    title: "Products",
    link: "/products",
    children: [
      { title: "earrings", link: "/products/earrings" },
      { title: "necklaces", link: "/products/necklaces" },
      { title: "rings", link: "/products/rings" },
    ],
  },
  {
    title: "Contact",
    link: "/contact",
  },
  {
    title: "About",
    link: "/about",
  },
];

const MenuItem = ({ items, depth = 1, classExtra }) => {
  const [dropdownOpen, dropwdownSetOpen] = React.useState(false);

  return (
    <div
      className={` relative  text-xs font-medium hover:bg-charcoal flex items-center ${classExtra}  overflow-visible transition-all duration-200 ease-in-out   md:py-2 justify-center`}
      onMouseEnter={() => dropwdownSetOpen(true)}
      onMouseLeave={() => dropwdownSetOpen(false)}
    >
      <div
        className={`flex  items-center ${classExtra}  transition-all   ease-in-out  py-2  justify-center`}
      >
        {" "}
        <div className="  text-gold cursor-pointer uppercase  ">
          {items.title}
        </div>
        {items?.children?.length > 0 ? (
          <span className="flex w-4 h-4 items-center ">
            <ChevronDown />
          </span>
        ) : (
          ""
        )}
        {items?.children?.length > 0 && dropdownOpen && depth <= 1 && (
          <div className="absolute top-[2.5rem] bg-gray-100 shadow-lg rounded-lg m-2 transition-all duration-200 ease-in-out">
            {items.children.map((item, idx) => (
              <MenuItem
                key={idx}
                items={item}
                classExtra=" text-gold transition-all  px-6"
                depth={depth + 1}
              />
            ))}
          </div>
        )}
        {items?.children?.length > 0 && dropdownOpen && depth > 1 && (
          <div className="absolute  top-0 md:-right-[10rem] bg-gray-100 shadow-lg rounded-lg mt-2 transition-all duration-200 ease-in-out">
            {items.children.map((item, idx) => (
              <MenuItem
                key={idx}
                items={item}
                classExtra={"object-contain cursor-pointer px-6"}
                depth={depth + 1}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const NavbarPublic = () => {
  return (
    <div
      className={`z-[5] items-baseline grid grid-cols-12 sm:top-7 md:top-8 fixed w-full text-white bg-[#fbf6f3]  mb-6 shadow-md`}
    >
      <div className=" flex pt-[3px]  col-span-4 md:mr-10 md:col-span-4 flex-row-reverse   sm:ml-[10rem] lg:flex-row-reverse  sm:cols-span-4 lg:col-span-4 ml">
        <Link to="/" className="text-2xl text text-gold font-normal">
          Jewel-Z
        </Link>
      </div>
      <div
        className={
          "flex col-span-6 ml-5 md:col-span-6 sm:col-span-10 lg:col-span-5 justify-center   "
        }
      >
        {items.map((item, idx) => (
          <MenuItem
            key={idx}
            classExtra={"  text-gold object-contain cursor-pointer px-4"}
            items={item}
          />
        ))}
      </div>
    </div>
  );
};
export default NavbarPublic;
