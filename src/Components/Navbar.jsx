import { FaRegMoon } from "react-icons/fa";
import { useState, useRef } from "react";

export default function Navbar() {
  const [hoverIndex, setHoverIndex] = useState(null);
  const [indicatorStyle, setIndicatorStyle] = useState({ width: 0, left: 0 });
  const linksRef = useRef([]);

  const links = ["Home", "Projects", "About", "Contact"];

  const handleMouseEnter = (index) => {
    if (linksRef.current[index]) {
      const { offsetWidth, offsetLeft } = linksRef.current[index];
      setIndicatorStyle({ width: offsetWidth, left: offsetLeft });
      setHoverIndex(index);
    }
  };

  return (
    <div className="fixed top-0 mt-6 left-0 right-0 z-50 flex items-center justify-between h-20 bg-primary">
      <header className="flex text-white justify-between px-10 items-center w-full h-20">
        <button className="px-8 py-3 rounded-3xl  backdrop-blur-sm shadow-[0_0_40px_0px_rgba(255,255,255,0.1)] text-white">
          Jose Arias
        </button>

        <nav className="flex items-center gap-5">
          <div className="relative flex items-center gap-3 border-1 py-3 px-6 rounded-3xl border-white/20 backdrop-blur-sm">
            <span
              className="absolute bottom-3 h-8 bg-white/20 rounded-xl transition-all duration-300 ease-in-out backdrop-blur-md"
              style={{
                width: indicatorStyle.width,
                left: indicatorStyle.left,
                opacity: hoverIndex !== null ? 1 : 0,
              }}
            ></span>

            {links.map((link, index) => (
              <a
                key={index}
                href="#"
                className="relative z-10 text-sm px-4 py-1 transition-all duration-300 hover:text-white"
                ref={(el) => (linksRef.current[index] = el)}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => setHoverIndex(null)}
              >
                {link}
              </a>
            ))}
          </div>

          <div>
            <button className="relative hover:bg-gray-400 transition duration-500 hover:cursor-pointer p-3 border-2 rounded-2xl border-white/20 backdrop-blur-sm text-white">
              <FaRegMoon />
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
}
