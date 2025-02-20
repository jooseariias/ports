import { BsAt, BsChatRightText, BsEmojiSmile } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin, AiOutlineArrowUp } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import LanguageSelector from "../Components/LanguageSelector";
export default function Contact() {
  const { t } = useTranslation();
  return (
    <div id="Contactame" className="m-5">
      <h2 className="text-white font-bold text-4xl text-center mt-16 animate-fade-right">
        {t("cont")}
      </h2>
      <section className="flex flex-col md:flex-row justify-between mt-20 mb-20">
        <div className="md:w-1/2">
          <h2 className="text-white font-bold text-4xl animate-fade-right">
            {t("p")}
          </h2>
          <h3 className="text-white font-bold text-1xl animate-fade-right mt-3">
            {t("live")}
          </h3>
          <p className="text-white mt-3">Argentina Tucuman</p>
          <h2 className="text-white font-bold text-2xl text-center my-5 animate-fade-right">
            {t("dt")}
          </h2>
          <div>
            <p className="text-white mt-2">+54 9 3815025442</p>
          </div>
          <div>
            <p className="text-white mt-2">arijoose@gmail.com</p>
          </div>

          <div className="flex gap-5 mt-4">
            <a
              className="bg-green-400 rounded-3xl p-1 hover:scale-110"
              href="https://github.com/jooseariias"
            >
              <AiFillGithub className="w-[30px] h-[30px]" />
            </a>
            <a
              className="bg-green-400 rounded-3xl p-3 hover:scale-110"
              href="https://www.linkedin.com/in/joose-ari-b08729233/"
            >
              <AiFillLinkedin />
            </a>
            <a className="bg-green-400 rounded-3xl p-3 hover:scale-110" href="">
              <AiOutlineArrowUp />
            </a>
          </div>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0">
          <form
            className="p-2 rounded bg-slate-700 border"
            action="https://formsubmit.co/arijoose@gmail.com"
            method="POST"
          >
            <div className="flex items-center">
              <div className="p-3 bg-slate-600">
                <BsEmojiSmile className="text-green-300" />
              </div>
              <input
                className="w-full bg-slate-800 text-white"
                type="text"
                name="text"
                placeholder="Tu Nombre.."
              />
            </div>
            <div className="flex items-center">
              <div className="p-3 bg-slate-600">
                <BsAt className="text-green-300" />
              </div>
              <input
                className="w-full bg-slate-800 text-white"
                type="email"
                name="email"
                placeholder="Tu Correo.."
              />
            </div>
            <div className="flex items-center">
              <div className="p-3 bg-slate-600 pb-[205px]">
                <BsChatRightText className="text-green-300" />
              </div>
              <input
                className="w-full pb-[200px] bg-slate-800 text-white"
                type="text"
                name="text"
                placeholder="Tu Mensaje."
              />
            </div>

            <button
              className="px-8 py-2 mt-3 bg-gray-600 hover:bg-green-500 font-mono"
              type="submit"
            >
              Enviar
            </button>
          </form>
        </div>
      </section>
      <footer className="mb-10">
        <hr className="my-6 border-blueGray-300" />
        <LanguageSelector />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-blueGray-500 font-semibold text-white py-1">
              Dev Jose Arias © <span id="get-current-year">2024</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
