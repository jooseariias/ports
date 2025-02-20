import { useTranslation } from "react-i18next";
import Slider from "../Components/Slider";
import projectsData from "../utils/dataProjet.json";
import MovilProtectos from "../utils/MovilProject.json";

export default function Proyects() {
  const { t } = useTranslation();

  return (
    <div id="Proyects">
      <section>
        <div className="container px-6 mx-auto">
          <h1 className="text-white font-bold text-4xl text-center mt-16 animate-fade-right">
            {t("Proyect")}
          </h1>

          <div className="">
            <Slider projects={projectsData} />
          </div>

          <div className="mt-16 animate-fade-right">
            <h1 className="text-white font-bold text-4xl text-center">
              {t("MovilProyect")}
            </h1>
            <Slider projects={MovilProtectos} />
          </div>  
        </div>
      </section>
    </div>
  );
}
