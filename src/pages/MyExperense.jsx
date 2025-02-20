import data from "../utils/exp.json";

export default function MyExperense() {
  return (
    <div className="mt-10 ">
      <h2 className="text-white font-bold text-4xl text-center mt-16 animate-fade-right">
        Mi Experiencia Laboral
      </h2>
      <section className="flex justify-center flex-col  mt-10 px-10">
        {data.map((experience, index) => (
          <div
            key={index}
            className=" flex mb-6"
          >
            <section className="flex justify-center items-center gap-7 ">
            <img
              src={experience.img}
              alt={`Logo de ${experience.company}`}
              className="mr-4 rounded-full h-20 w-20 object-cover"
            />
            <div>
              <h3 className="text-xl font-semibold text-white mb-1">
                {experience.title}
              </h3>
              <p className="italic  text-gray-200">{experience.company}</p>
              <p className="font-semibold text-gray-400">{experience.date}</p>
              <p className="mt-2 text-gray-500 w-[80%]">{experience.description}</p>
            </div>
            </section>
          </div>
        ))}
      </section>
    </div>
  );
}
