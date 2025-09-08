import React, { useState, useRef } from "react";

export default function DraggableSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [sidebarX, setSidebarX] = useState(0);
  const startXRef = useRef(null);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    startXRef.current = e.clientX;
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const deltaX = e.clientX - startXRef.current;
    if (!isOpen && deltaX > 0 && deltaX <= 250) {
      setSidebarX(deltaX);
    } else if (isOpen && deltaX < 0 && deltaX >= -250) {
      setSidebarX(250 + deltaX);
    }
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (sidebarX > 125) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
    setSidebarX(0);
  };

  const sidebarStyle = {
    transform: `translateX(${
      isDragging ? sidebarX - 250 : isOpen ? 0 : -250
    }px)`,
  };

  return (
    <div
      className="relative h-screen overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div
        className="fixed top-0 left-0 h-full w-64 bg-gray-800 text-white transition-transform duration-300 ease-in-out z-20"
        style={sidebarStyle}
      >
        <div className="p-4">Sidebar Content</div>
      </div>

      <div
        className="absolute top-0 left-0 h-full w-2 cursor-ew-resize z-30"
        onMouseDown={handleMouseDown}
      />

      <div className="ml-0 md:ml-64 p-4">
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded"
          onClick={() => setIsOpen(!isOpen)}
        >
          Toggle Sidebar
        </button>
        <div className="mt-4">Main content goes here...</div>
      </div>
    </div>
  );
}
