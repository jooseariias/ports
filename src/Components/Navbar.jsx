import { FaRegMoon, FaBars, FaSun, FaCode } from "react-icons/fa";
import { useState, useRef } from "react";
import { useTranslation } from 'react-i18next';

export default function Navbar() {
  const [hoverIndex, setHoverIndex] = useState(null);
  const [indicatorStyle, setIndicatorStyle] = useState({ width: 0, left: 0 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const [isDarkMode, setIsDarkMode] = useState(false);

  const linksRef = useRef([]);
  const links = [
    { id: "home", label: t('navbar.home') },
    { id: "experience", label: t('navbar.experience') },
    { id: "projects", label: t('navbar.projects') },
    { id: "cv", label: t('navbar.cv') },
    { id: "contact", label: t('navbar.contact') }
  ];


  const handleScrollToSection = (sectionId) => {
    const element = document.getElementById(`${sectionId}-section`); 
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleMouseEnter = (index) => {
    if (linksRef.current[index]) {
      const { offsetWidth, offsetLeft } = linksRef.current[index];
      setIndicatorStyle({ width: offsetWidth, left: offsetLeft });
      setHoverIndex(index);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLanguageChange = () => {
    const newLanguage = i18n.language === "en" ? "es" : "en"; 
    i18n.changeLanguage(newLanguage);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark", !isDarkMode);
  };

  return (
    <div className="fixed top-0 mt-8 left-0 right-0 z-50 flex items-center justify-between h-20 px-4 sm:px-[7%]">
      <header className="flex text-white justify-between items-center w-full h-20">
        <button className="px-8 flex items-center gap-2.5 py-3 rounded-3xl backdrop-blur-sm shadow-[0_0_40px_0px_rgba(255,255,255,0.1)] text-white">
          <FaCode /> Jose Arias
        </button>

        <button
          onClick={toggleMenu}
          className="block lg:hidden text-white border-[1px] mr-2 border-white/20 p-2 rounded-lg hover:cursor-pointer text-2xl"
        >
          <FaBars />
        </button>

        <nav className="hidden lg:flex items-center gap-5">
          <div className="relative flex items-center gap-3 border-1 py-3 px-6 rounded-3xl border-white/20 backdrop-blur-sm">
            <span
              className="absolute h-8 bg-white/20 rounded-xl transition-all duration-300 ease-in-out backdrop-blur-md"
              style={{
                width: indicatorStyle.width,
                left: indicatorStyle.left,
                opacity: hoverIndex !== null ? 1 : 0,
              }}
            ></span>

            {links.map((link, index) => (
              <a
                key={index}
                href={`#${link.id}`} // El href está bien
                className="relative z-10 text-sm px-4 py-1 transition-all duration-300 hover:text-white"
                ref={(el) => (linksRef.current[index] = el)}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => setHoverIndex(null)}
              >
                {link.label} 
              </a>
            ))}
          </div>

          <button
            onClick={handleLanguageChange}
            className="relative px-3 text-sm py-2 border-2 rounded-2xl border-white/20 backdrop-blur-sm text-white hover:bg-gray-700 transition duration-300"
          >
            {i18n.language === "en" ? "ES" : "EN"}
          </button>

          <button
            onClick={toggleDarkMode}
            className="relative hover:bg-gray-400 transition duration-500 hover:cursor-pointer p-3 border-2 rounded-2xl border-white/20 backdrop-blur-sm text-white"
          >
            {isDarkMode ? <FaSun className="" /> : <FaRegMoon />}
          </button>
        </nav>

        <div
          className={`lg:hidden fixed top-0 right-0 w-full h-full bg-opacity-60 transition-all duration-300 ease-in-out ${isMenuOpen ? "block" : "hidden"
            }`}
          onClick={toggleMenu}
        >
          <div
            className={`absolute top-0 right-0 bg-black w-3/4 sm:w-1/2 h-full flex flex-col justify-center items-center transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"
              }`}
          >
            {links.map((link, index) => (
              <a
                key={index}
                href="#"
                className="text-xl py-4"
                onClick={() => { toggleMenu(); handleScrollToSection(link.id) }} // Desplazarse a la sección correspondiente
              >
                <p className="hover:text-gray-400">{link.label}</p> {/* Renderiza solo el texto del enlace */}
              </a>
            ))}
            <button
              onClick={handleLanguageChange}
              className="relative py-2 px-8 border-2 rounded-2xl border-white/20 backdrop-blur-sm text-white hover:bg-gray-700 transition duration-300"
            >
              {i18n.language === "en" ? "ES" : "EN"}
            </button>
            <button
              onClick={toggleDarkMode}
              className="relative py-3 px-8 my-2 border-2 rounded-2xl border-white/20 backdrop-blur-sm text-white hover:bg-gray-700 transition duration-300"
            >
              {isDarkMode ? <FaSun /> : <FaRegMoon />}
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}
