import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { motion } from "framer-motion";

function Slider({ projects }) {
  return (
    <div className="container mx-auto">
      <section className="mt-10">
        <div className="flex flex-wrap justify-center gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col items-center w-full md:w-[800px] lg:w-[1000px] xl:w-[1200px] shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl overflow-hidden"
            >
              {/* Carrusel de imágenes */}
              <Carousel
                className="w-full"
                showThumbs={false}
                autoPlay
                infiniteLoop
                
                showStatus={false}
              >
                {project.imagenes.map((imagen, imgIndex) => (
                  <motion.div
                    className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]"
                    key={imgIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <img
                      className="object-cover w-full h-full rounded-xl"
                      src={imagen}
                      alt={`Slide ${imgIndex + 1}`}
                    />
                  </motion.div>
                ))}
              </Carousel>

              {/* Contenedor para la descripción y título */}
              <div className="flex flex-col items-center text-center mt-5 mb-5 p-5 w-full bg-gradient-to-b from-transparent ">
                {/* Descripción */}
                <p className="text-white text-sm mt-5 font-medium mb-2">{project.descripcion}</p>

                {/* Título */}
                <a
                  href={project.enlace}
                  className="text-xl font-semibold mt-5 text-white hover:underline"
                >
                  ➡{project.titulo}⬅
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Slider;
