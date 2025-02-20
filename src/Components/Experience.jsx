import { FaCheckCircle } from "react-icons/fa";

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Work Experience</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My professional journey and the companies I've had the pleasure to work with.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 h-full w-px bg-gray-600" />

          {/* Experience Items */}
          {[
            {
              date: "2020 - Present",
              company: "Freelance Developer",
              role: "Front-End Developer",
              description:
                "Developed and optimized responsive user interfaces for over 15 clients, reducing load times and improving UX.",
              achievements: [
                "Built scalable apps using React, Next.js, Angular, and Astro.",
                "Designed secure authentication systems with JWT and Google Auth.",
                "Integrated RESTful APIs with Node.js and Express.js.",
                "Managed global states with Redux and Zustand.",
                "Collaborated with agile teams using Scrum methodologies.",
              ],
              tech: ["React", "Next.js", "Angular", "Astro", "Tailwind CSS", "Redux", "Node.js"],
            },
            {
              date: "2023",
              company: "No Country",
              role: "Full Stack Developer (Internship)",
              description:
                "Worked as a Full Stack Developer handling both backend (Node.js, Java) and frontend tasks, contributing to project development and team collaboration.",
              achievements: [
                "Contributed to the development of several full-stack applications.",
                "Worked with Java for backend and integrated APIs with Node.js.",
                "Built responsive frontend applications with modern web technologies.",
              ],
              tech: ["Node.js", "Java", "React", "Spring Boot"],
            },
          ].map((experience, index) => (
            <div key={experience.company} className="relative grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {/* Timeline dot */}
              <div className="absolute left-[-5px] md:left-1/2 md:ml-[-5px] w-[10px] h-[10px] rounded-full bg-primary mt-2" />

              {/* Content */}
              <div className={`md:text-right ${index % 2 === 0 ? "md:pr-12" : "md:order-2 md:pl-12"}`}>
                <span className="inline-block px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium mb-2">
                  {experience.date}
                </span>
                <h3 className="text-xl font-semibold">{experience.company}</h3>
                <p className="text-primary font-medium mb-2">{experience.role}</p>
                <p className="text-gray-400 mb-4">{experience.description}</p>
              </div>

              <div
                className={`bg-gray-800 border border-gray-600 rounded-2xl p-6 ${index % 2 === 0 ? "md:pl-12" : "md:order-1 md:pr-12"}`}
              >
                <h4 className="font-medium mb-3">Key Achievements</h4>
                <ul className="space-y-2 mb-4">
                  {experience.achievements.map((achievement) => (
                    <li key={achievement} className="flex items-start">
                      <FaCheckCircle className="w-5 h-5 text-primary shrink-0 mr-2" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {experience.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
