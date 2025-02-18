const skills = [
  {
    category: "Frontend Development",

    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Redux",
      "Framer",
    ],
  },
  {
    category: "Backend Development",

    skills: [
      "Node.js",
      "PostgreSQL",
      "MongoDB",
      "RESTful APIs",
      "GraphQL",
      "Express",
    ],
  },
  {
    category: "Tools & Methods",

    skills: ["Git", "GitHub", "Docker", "CI/CD", "Jest", "Testing Library"],
  },
  {
    category: "Soft Skills",

    skills: [
      "Problem Solving",
      "Communication",
      "Team Work",
      "Adaptability",
      "Leadership",
      "Agile",
    ],
  },
];

export default function Skill() {
  return (
    <div className="bg-background ">
      <section id="skills" className="py-20 px-4 relative ">
        <div className="absolute  inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center  mb-20">
            <h2 className="text-3xl  text-white md:text-5xl font-bold mb-4">
              Skills & Expertise
            </h2>
            <p className="text-muted-foreground text-white text-lg max-w-2xl mx-auto">
              A comprehensive overview of my technical skills and professional
              competencies.
            </p>
          </div>

          <div className="grid text-white gap-8 md:grid-cols-2 backdrop-blur-sm shadow-[0_0px_0px_0px_rgba(255,255,255,0.5)] rounded-2xl">
            {skills.map((category) => (
              <div key={category.category} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                <div className="relative bg-card border p-6 rounded-2xl h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <h3 className="text-xl font-semibold">
                      {category.category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 bg-white/10 py-1 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary/20 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
