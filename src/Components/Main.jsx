import { FaArrowRightLong } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import Image from "../assets/foto.png";

export default function Main() {
  return (
    <div className="mt-30">
      <h2 className="text-white text-5xl font-bold">Full Stack Developer</h2>
      <p className="text-white">
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga mollitia
        quas facilis suscipit! Sint id veritatis ullam necessitatibus eaque
        quaerat.
      </p>
      <div className="flex gap-4">
        <button className="bg-white flex hover:cursor-pointer text-sm items-center px-8 py-2 rounded-xl hover:bg-gray-300 group transition-all duration-300">
          View Projects
          <FaArrowRightLong className="ml-5 transition-transform duration-300 group-hover:translate-x-2" />
        </button>
        <button className="relative hover:bg-gray-900 transition duration-500 hover:cursor-pointer p-3 border-2 rounded-2xl border-white/20 backdrop-blur-sm text-white">
          <FiGithub />
        </button>
        <button className="relative hover:bg-gray-900 transition duration-500 hover:cursor-pointer p-3 border-2 rounded-2xl border-white/20 backdrop-blur-sm text-white">
          <FiGithub />
        </button>
        <button className="relative hover:bg-gray-900 transition duration-500 hover:cursor-pointer p-3 border-2 rounded-2xl border-white/20 backdrop-blur-sm text-white">
          <FiGithub />
        </button>
      </div>
      <div>
        <img src={Image} alt="foto jose arias" className="w-full rounded-xl" />
      </div>
    </div>
  );
}
