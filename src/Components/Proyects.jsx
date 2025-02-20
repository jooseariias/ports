import projects from "../utils/dataProjet.json";
import { useState } from "react";


export default function Proyects() {
    const [visibleProjects, setVisibleProjects] = useState(6);

    const handleShowMore = () => {
        setVisibleProjects((prev) => prev + 6);
    };

  return (
    <div>
      <h2 className="text-white mt-10 mb-10 text-center text-5xl font-bold">
        Proyectos
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {projects.slice(0, visibleProjects).map((project, index) => (
          <div key={index} className="group relative text-white">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
            <div className="relative bg-card border rounded-2xl overflow-hidden flex flex-col h-full">
              <div className="aspect-video overflow-hidden h-56">
                <img
                  src={project.imagenes[0] || "/placeholder.svg"}
                  alt={project.titulo}
                  className="object-cover w-full h-full transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2">{project.titulo}</h3>
                <p className="text-muted-foreground mb-4 flex-grow">
                  {project.descripcion.join(", ")}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.descripcion.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary/10 text-primary bg-gray-900 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className=" hover:scale-105 backdrop-blur-sm hover:animate-pulse hover:cursor-pointer shadow-[0_0_40px_0px_rgba(255,255,255,0.1)] text-white  py-3 text-center rounded-xl transition-all duration-300  font-semibold"
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
                        onClick={handleShowMore} 
                        className="bg-primary underline hover:cursor-pointer hover:scale-110 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:bg-primary/80"
                    >
                        Ver Más
                    </button>
                </div>
            )}
    </div>
  );
}
