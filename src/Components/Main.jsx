import { FaArrowRightLong } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import Image from "../assets/foto.png";

export default function Main() {
  return (
    <div className="mt-12 h-[100vh] sm:mt-20 md:mt-28 lg:mt-30 px-4">
      <div className="flex flex-col-reverse lg:flex-row items-center">
        <div className="text-center lg:text-left lg:w-1/2">
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold">
            Full Stack Developer
          </h2>
          <p className="text-white mt-4 sm:mt-6 text-sm sm:text-base md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
            mollitia quas facilis suscipit! Sint id veritatis ullam
            necessitatibus eaque quaerat.
          </p>
          <div className="flex flex-wrap gap-4 mt-6 justify-center lg:justify-start">
            <button className="bg-white flex hover:cursor-pointer text-sm items-center px-6 py-2 rounded-xl hover:bg-gray-300 group transition-all duration-300 sm:text-base md:px-8">
              View Projects
              <FaArrowRightLong className="ml-2 sm:ml-3 animate-pulse transition-transform duration-300 group-hover:translate-x-2" />
            </button>
            <div className="flex gap-2">
              {[...Array(3)].map((_, index) => (
                <button
                  key={index}
                  className="relative hover:bg-gray-900 transition duration-500 hover:cursor-pointer p-3 border-2 rounded-2xl border-white/20 backdrop-blur-sm text-white"
                >
                  <FiGithub />
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-1/2 flex justify-center lg:justify-end">
        <img
          src={Image}
          alt="foto jose arias"
          className="w-4/5 sm:w-3/4 md:w-/3 lg:w-full  rounded-xl shadow-lg"
        />
      </div>
      </div>
    </div>
  );
}
