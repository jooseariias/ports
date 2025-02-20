import { useTranslation } from 'react-i18next';


export default function Skill() {
  const { t } = useTranslation();
  const skills = [
    {
      category: t('skills.frontend'),
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
      category: t('skills.backend'),
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
      category: t('skills.tools'),
      skills: ["Git", "GitHub", "Docker", "CI/CD", "Jest", "Testing Library"],
    },
    {
      category: t('skills.softSkills'),
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
  
  return (
    <div className="bg-background">
      <section id="skills" className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-20">
            <h2 className="text-3xl text-black dark:text-white md:text-5xl font-bold mb-4">
              {t('skills.title')}
            </h2>
           
          </div>

          <div className="grid dark:text-white  text-black gap-8 md:grid-cols-2 backdrop-blur-sm shadow-[0_0px_0px_0px_rgba(255,255,255,0.5)] rounded-2xl">
            {skills.map((category) => (
              <div
                key={category.category}
                className="relative dark:bg-black/10  bg-gray-400  group overflow-hidden rounded-2xl border border-white/30"
              >
                {/* SVG de la animación */}
                <svg
                  className="absolute inset-0 group-hover:animate-svgAnimation"
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

                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                <div className="relative bg-card p-6 rounded-2xl h-full border border-transparent group-hover:shadow-[0_0_15px_2px_rgba(255,255,255,0.5)] transition-all duration-300">
                  <div className="flex items-center gap-3 mb-6">
                    <h3 className="text-xl font-semibold">{category.category}</h3>
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

      <style>
        {`
          @keyframes svgAnimation {
            from {
              stroke-dashoffset: 0;
            }
            to {
              stroke-dashoffset: 1000;
            }
          }

          .line {
            stroke-dasharray: 260;
            stroke-width: 1px;
            fill: transparent;
            stroke: #fff; /* Blanco */
          }

          .group:hover .line {
            animation: svgAnimation 2.5s linear infinite;
          }
          
          @keyframes border-glow {
            0% {
              border-image-source: linear-gradient(90deg, transparent, white, transparent);
              border-image-slice: 1;
            }
            50% {
              border-image-source: linear-gradient(90deg, transparent, white 50%, transparent);
              border-image-slice: 1;
            }
            100% {
              border-image-source: linear-gradient(90deg, transparent, white, transparent);
              border-image-slice: 1;
            }
          }

          .animate-border-glow {
            animation: border-glow 2s infinite linear;
          }
        `}
      </style>
    </div>
  );
}
