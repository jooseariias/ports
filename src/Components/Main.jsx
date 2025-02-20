import { FaArrowRightLong } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import Image from "../assets/foto.png";
import { TiSocialLinkedin } from "react-icons/ti";
import { useTranslation } from 'react-i18next';

export default function Main() {
  const { t } = useTranslation();
  return (
    <div id="home" className="mt-12 transition sm:mt-20 md:mt-28 lg:mt-32 px-4 min-h-screen flex items-center">
      <div className="flex flex-col-reverse lg:flex-row items-center w-full max-w-6xl mx-auto">
        <div className="text-center lg:text-left lg:w-1/2">
          <h2 className="dark:text-white text:bleck text-3xl sm:text-4xl md:text-5xl font-bold">
            {t('home.title')}
          </h2>
          <p className="dark:text-white text-black/70 mt-4 sm:mt-6 text-sm sm:text-base md:text-lg">
            {t('home.description')}
          </p>
          <div className="flex flex-wrap gap-4 mt-6 justify-center lg:justify-start">
            <a  href="#projects" className="dark:bg-white bg-black text-white dark:text-black hover:cursor-pointer   flex items-center px-6 py-2 rounded-xl dark:hover:bg-gray-300  hover:bg-gray-500 group transition-all duration-300 sm:text-base md:px-8">
              {t('home.viewProjects')}
              <FaArrowRightLong className="ml-2 sm:ml-3 animate-pulse transition-transform duration-300 group-hover:translate-x-2" />
            </a>

            <div className="flex gap-2">
              <a
                className="relative hover:animate-pulse dark:hover:bg-gray-900 hover:cursor-pointer transition hover:bg-gray-400 duration-500 p-3 border-2 rounded-2xl dark:border-white/20 border-black backdrop-blur-sm dark:text-white"
                title="GitHub"
                href="https://github.com/jooseariias"
                target="_blank"
                rel="noreferrer"
                >
                <FiGithub />
              </a>
              <a
                className="relative  hover:animate-pulse hover:cursor-pointer hover:bg-gray-400 dark:hover:bg-gray-900 transition duration-500 p-3 border-2 rounded-2xl dark:border-white/20 backdrop-blur-sm dark:text-white"
                title="LinkedIn"
                href="https://www.linkedin.com/in/joosearias/"
                target="_blank"
                rel="noreferrer"
              >
                <TiSocialLinkedin />
              </a>
            </div>

          </div>
        </div>

        <div className="mt-12 lg:mt-0 lg:w-1/2 flex justify-center lg:justify-end">
          <img
            src={Image}
            alt="foto jose arias"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-sm  object-cover"
          />
        </div>
      </div>
    </div>
  );
}
