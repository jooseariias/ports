import { FaCheckCircle } from "react-icons/fa";
import { useTranslation } from 'react-i18next';

export default function Experience() {
  const { t } = useTranslation();
  return (
    <section id="experience" className="py-20 px-4 dark:text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">{t('experience.title')}</h2>
        </div>
        <div className="relative">
          <div className="absolute left-0 md:left-1/2 h-full w-px bg-gray-600" />
          {[
            {
              date: t('experience.year'),
              company: "Freelance Developer",
              role: "Front-End Developer",
              description:
                t("experience.freelance.description"),
              achievements: [
                t("experience.freelance.achievement1"),
                t("experience.freelance.achievement2"),
                t("experience.freelance.achievement3"),
                t("experience.freelance.achievement4"),
                t("experience.freelance.achievement5"),
              ],
              tech: ["React", "Next.js", "Angular", "Astro", "Tailwind CSS", "Redux", "Node.js"],
            },
            {
              date: "2023",
              company: "No Country",
              role: t("experience.noCountry.role"),
              description:
                t("experience.noCountry.description"),
              achievements: [
                t("experience.noCountry.achievement1"),
                t("experience.noCountry.achievement2"),
                t("experience.noCountry.achievement3"),
              ],
              tech: ["Node.js", "Java", "React", "Spring Boot"],
            },
          ].map((experience, index) => (
            <div key={experience.company} className="relative grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">

              <div className="absolute left-[-5px] md:left-1/2 md:ml-[-5px] w-[10px] h-[10px] rounded-full bg-primary mt-2" />


              <div className={`md:text-right ${index % 2 === 0 ? "md:pr-12" : "md:order-2 md:pl-12"}`}>
                <span className="inline-block px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium mb-2">
                  {experience.date}
                </span>
                <h3 className="text-xl font-semibold">{experience.company}</h3>
                <p className="text-primary font-medium mb-2">{experience.role}</p>
                <p className="dark:text-gray-400 text-black/60 mb-4">{experience.description}</p>
              </div>

              <div
                className={`dark:bg-gray-800 bg-gray-400 border border-gray-600 rounded-2xl p-6 ${index % 2 === 0 ? "md:pl-12" : "md:order-1 md:pr-12"}`}
              >
                <h4 className="font-medium mb-3">{t('experience.keyAchievements')}</h4>
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
