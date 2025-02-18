import projects from "../utils/dataProjet.json";

console.log(projects);

export default function Proyects() {
    return (
        <div>
            <h2 className="text-white mt-10 mb-10 text-center text-5xl font-bold">Proyectos</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, index) => (
                    <div key={index} className="group relative text-white" >
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                        <div className="relative bg-card border rounded-2xl overflow-hidden">
                            <div className="aspect-video overflow-hidden">
                                <img
                                    src={project.imagenes[0] || "/placeholder.svg"} // Usar la primera imagen del array
                                    alt={project.titulo}
                                    className="object-cover w-full h-full transition-transform group-hover:scale-105"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">{project.titulo}</h3>
                                <p className="text-muted-foreground mb-4">{project.descripcion.join(", ")}</p> {/* Usar .join() para mostrar las tecnologías */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.descripcion.map((tech, techIndex) => (
                                        <span key={techIndex} className="px-3 py-1 bg-primary/10 text-primary bg-gray-900 rounded-full text-sm">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                               
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
