import { useState, useEffect } from "react";
import projects from "../utils/dataProjet.json";
import MovilProyect from "../utils/MovilProject.json";

export default function Proyects() {
  const [visibleProjects, setVisibleProjects] = useState(4);
  const [visibleMobileProjects, setVisibleMobileProjects] = useState(4);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % projects[0].imagenes.length);
    }, 4000); 

    return () => clearInterval(interval); 
  }, []);

  const handleShowMoreDesktop = () => {
    setVisibleProjects((prev) => prev + 3);
  };

  const handleShowMoreMobile = () => {
    setVisibleMobileProjects((prev) => prev + 3);
  };

  return (
    <div id="projects">
      <h2 className="dark:text-white text-black mt-10 mb-10 text-center text-5xl font-bold">
        Proyectos
      </h2>

      <div>
        <h3 className="dark:text-white  mt-10 mb-5 text-3xl font-bold">Web</h3>
        <div className="grid gap-8 grid-cols-1">
          {projects.slice(0, visibleProjects).map((project, index) => (
            <div key={index} className="group relative  dark:text-white">
              <svg
                className="absolute inset-0  group-hover:animate-svgAnimation pointer-events-none"
                height="100%"
                width="100%"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  rx="8"
                  ry="8"
                  className="line"
                  height="100%"
                  width="100%"
                  stroke-linejoin="round"
                  stroke="black"
                />
              </svg>

              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
              <div className="relative bg-card border-transparent rounded-2xl overflow-hidden flex flex-col md:flex-row h-auto w-full">
                <div className="relative w-full h-72 md:w-2/3">
                  <img
                    src={project.imagenes[currentImageIndex] || "/placeholder.svg"}
                    alt={project.titulo}
                    className="object-cover w-full h-full transition-opacity duration-500 ease-in-out opacity-100 group-hover:scale-105"
                  />
                </div>

                <div className="p-6 flex flex-col justify-between w-full md:w-1/3">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      {project.titulo}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {project.descripcion.join(", ")}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.descripcion.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-primary/10 text-primary text-white bg-gray-900 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="hover:scale-105 backdrop-blur-sm bg-black hover:animate-pulse hover:cursor-pointer shadow-[0_0_40px_0px_rgba(255,255,255,0.1)] text-white py-3 text-center rounded-xl transition-all duration-300 font-semibold"
                  >
                    Ver Proyecto
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        {visibleProjects < projects.length && (
          <div className="flex justify-center mt-8">
            <button
              onClick={handleShowMoreDesktop}
              className="bg-primary underline hover:cursor-pointer hover:scale-110 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:bg-primary/80"
            >
              Ver más
            </button>
          </div>
        )}
      </div>

      <div>
        <h3 className="text-white mt-10 mb-5 text-3xl font-bold">Móviles</h3>
        <div className="grid gap-8 grid-cols-1">
          {MovilProyect.slice(0, visibleMobileProjects).map(
            (project, index) => (
              <div key={index} className="group relative text-white">
                <svg
                  className="absolute inset-0 group-hover:animate-svgAnimation pointer-events-none"
                  height="100%"
                  width="100%"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    rx="8"
                    ry="8"
                    className="line"
                    height="100%"
                    width="100%"
                    stroke-linejoin="round"
                  />
                </svg>

                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                <div className="relative bg-card border-transparent rounded-2xl overflow-hidden flex flex-col md:flex-row h-auto w-full">
                  <div className="relative w-full h-72 md:w-2/3">
                    <img
                      src={project.imagenes[0] || "/placeholder.svg"}
                      alt={project.titulo}
                      className="object-cover w-full h-full transition-opacity duration-500 ease-in-out opacity-100 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-6 flex flex-col justify-between w-full md:w-1/3">
                  <a
                    href={project.link}
                    className="hover:scale-105 backdrop-blur-sm bg-black hover:animate-pulse hover:cursor-pointer shadow-[0_0_40px_0px_rgba(255,255,255,0.1)] text-white py-3 text-center rounded-xl transition-all duration-300 font-semibold"
                  >
                    Ver Proyecto
                  </a>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
        {visibleMobileProjects < MovilProyect.length && (
          <div className="flex justify-center mt-8">
            <button
              onClick={handleShowMoreMobile}
              className="bg-primary underline hover:cursor-pointer hover:scale-110 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:bg-primary/80"
            >
              Ver más
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
