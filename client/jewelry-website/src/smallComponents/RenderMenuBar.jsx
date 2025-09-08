import Sidebar from "./Sidebar";
import React, { useEffect, useState } from "react";
import NavbarPublic from "./NavbarPublic";

const RenderMenuBar = () => {
  const [isMobile, setMobile] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setMobile(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  console.log(isMobile);

  return <>{isMobile < 768 ? <Sidebar /> : <NavbarPublic />} </>;
};

export default RenderMenuBar;
