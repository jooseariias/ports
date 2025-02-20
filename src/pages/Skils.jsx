import { FaBootstrap, FaAngular, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaGitAlt, FaDatabase, FaSass, FaGem } from 'react-icons/fa';
import { SiTypescript, SiRedux, SiTailwindcss, SiSequelize, SiExpress, SiMysql, SiAstro } from 'react-icons/si';
import { TbBrandNextjs } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { BiLogoMongodb } from "react-icons/bi";
import { useTranslation } from 'react-i18next';

export default function Skils() {
  const { t } = useTranslation();
  return (
    <div id="Skils" className=" py-16 px-4">
      <h2 className="text-white font-bold text-4xl text-center mb-12 animate-fade-right">
        {t('tec')}
      </h2>
      <section className=" flex flex-wrap justify-center gap-5 animate-fade-down animate-delay-[800ms]">
        {[
          { icon: <FaHtml5 className='w-20 h-20 text-orange-500' />, alt: "HTML" },
          { icon: <FaCss3Alt className='w-20 h-20 text-blue-500' />, alt: "CSS" },
          { icon: <FaJs className='w-20 h-20 text-yellow-500' />, alt: "JavaScript" },
          { icon: <SiTypescript className='w-20 h-20 text-blue-600' />, alt: "TypeScript" },
          { icon: <FaReact className='w-20 h-20 text-cyan-500' />, alt: "React" },
          { icon: <SiRedux className='w-20 h-20 text-purple-600' />, alt: "Redux" },
          { icon: <SiTailwindcss className='w-20 h-20 text-teal-400' />, alt: "Tailwind CSS" },
          { icon: <FaSass className='w-20 h-20 text-pink-500' />, alt: "Sass" },
          { icon: <FaAngular className='w-20 h-20 text-red-600' />, alt: "Angular" },
          { icon: <TbBrandNextjs className='w-20 h-20 text-gray-300' />, alt: "Next.js" },
          { icon: <FaBootstrap className='w-20 h-20 text-indigo-500' />, alt: "Bootstrap" },
          { icon: <SiAstro className='w-20 h-20 text-orange-300' />, alt: "Astro" },
          { icon: <FaNodeJs className='w-20 h-20 text-green-500' />, alt: "Node.js" },
          { icon: <SiExpress className='w-20 h-20 text-gray-500' />, alt: "Express" },
          { icon: <FaPython className='w-20 h-20 text-yellow-300' />, alt: "Python" },
          { icon: <FaGem className='w-20 h-20 text-red-500' />, alt: "Ruby" },
          { icon: <FaGitAlt className='w-20 h-20 text-orange-600' />, alt: "Git" },
          { icon: <FaDatabase className='w-20 h-20 text-blue-900' />, alt: "Sql" },
          { icon: <BiLogoMongodb className='w-20 h-20 text-green-600' />, alt: "MongoDB" },
          { icon: <SiSequelize className='w-20 h-20 text-blue-700' />, alt: "Sequelize" },
          { icon: <FaGithub  className='w-20 h-20 text-white' />, alt: "gitHub" },
          { icon: <SiMysql className='w-20 h-20 text-blue-900' />, alt: "MySQL" }
        ].map((skill, index) => (
          <div key={index} className="group flex flex-col items-center justify-center  p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
            {skill.icon}
            <p className="text-white text-sm font-medium mt-2">{skill.alt}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
