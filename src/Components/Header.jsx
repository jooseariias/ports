import { useState } from "react";
import Logo from "../assets/logo.png";
import { useTranslation } from 'react-i18next';
import cv from "../../public/Front-end-JoseArias-Dev.pdf";
export default function Header() {
  const [navbar, setNavbar] = useState(false);
  const { t } = useTranslation();
  return (
    <div>
      <nav>
        <div className="justify-between px-4  lg:max-w-7xl md:items-center md:flex md:px-1 pt-5">
          <div>
            <div className="flex items-center justify-between ">
              <div className="flex">
                <img
                  className="hover:animate-wiggle-more h-10 px-1"
                  src={Logo}
                  alt="logo"
                />{" "}
                <h1 className="p-2 animate-fade-right font-mono text-white font-bold text-2xl">
                  José Arias
                </h1>
              </div>
              <div className="md:hidden">
                <button
                  className="p-2 text-white rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 animate-fade-left  md:space-y-0">
                <li className="p-3  cursor-pointer font-mono font-bold text-white hover:text-green-500">
                   <a href="#Home">{t('ini')}</a>
                </li>
                <li className="p-3 cursor-pointer font-mono font-bold text-white hover:text-green-500">
                <a href={cv} download> CV</a>
                </li>
                {/* <li className="p-3 cursor-pointer font-mono font-bold text-white hover:text-green-500">
                  <a href="#Skils">Exp</a>
                </li> */}
                <li className="p-3 cursor-pointer font-mono font-bold text-white hover:text-green-500">
                  <a href="#Skils">Tec</a>
                </li>
                <li className="p-3 cursor-pointer font-mono font-bold text-white hover:text-green-500">
                  <a href="#Proyects">{t('pro')}</a>
                </li>
                {/* <li className="p-3  cursor-pointer font-mono font-bold text-white hover:text-green-500">
                  <a href="#Contactame">{t('cont')}</a>  
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </nav>
     
    </div>
  );
}
