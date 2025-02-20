import foto from "../assets/foto.png";
import ista from "../assets/instagram.png";
import Git from "../assets/github.png";
import lk from "../assets/social.png";
import { useTranslation } from "react-i18next";

export default function Home() {

  const { t } = useTranslation();
  
  return (
    <div className="flex flex-col md:flex-row px-4 ">
      <section className="md:w-2/3">
        <div>
          <h3 className="pt-20 font-mono animate-fade-right text-white animate-once">
            {t("greeting")}
          </h3>
          <h3 className="pt-5 font-mono animate-fade-right text-green-500 font-bold text-4xl animate-once animate-delay-[400ms]">
            José Arias
          </h3>
          <h2 className="pt-5 font-mono animate-fade-right text-white font-bold text-4xl animate-delay-[600ms]">
            {t("subTittle")}
          </h2>
          <h4 className="pt-5 font-mono animate-fade-right text-white animate-delay-[800ms]">
            {t("description")}
          </h4>
          <div className="animate-delay-[1000ms] animate-fade-right ">
            <a href="https://www.linkedin.com/in/joose-ari-b08729233/">
              {" "}
              <button className="mt-10 ml-2 py-3 px-8 bg-green-500 text-white hover:scale-110">
                {t("bt-contact")}
              </button>
            </a>
          </div>
        </div>
        <div className="pt-10 flex">
          <p className="font-mono animate-fade-right animate-delay-[1200ms] text-white">
            {t("red")}
          </p>
          <div className="pl-5 animate-delay-[1200ms]">
            <a href="">
              {" "}
              <button className="pr-2 font-serif">
                <img
                  className="hover:animate-spin animate-once animate-fade-right"
                  src={ista}
                  alt="istagram"
                />
              </button>
            </a>
            <a href="https://github.com/jooseariias">
              <button className="pr-2 font-serif">
                <img
                  className="hover:animate-spin animate-once animate-fade-right"
                  src={Git}
                  alt="Git"
                />
              </button>
            </a>
            <a href="https://www.linkedin.com/in/joose-ari-b08729233/">
              <button className="pr-2 font-serif">
                <img
                  className="hover:animate-spin animate-once animate-fade-right"
                  src={lk}
                  alt="linkedlin"
                />
              </button>
            </a>
          </div>
        </div>
      </section>

      <img
        className="animate-fade-left animate-delay-[1000ms] lg:mt-0 md:w-1/3"
        src={foto}
        alt="foto"
      />
    
    </div>
  );
}
