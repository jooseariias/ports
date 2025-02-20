import { I18nextProvider } from "react-i18next";
import i18n from "./Config/i18n";
import Header from "./Components/Header";
import Home from "./pages/Home";
import Tec from "./pages/Skils";
import Proyect from "./pages/Proyects";
import LanguageSelector from "./Components/LanguageSelector";

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <div className="lg:mx-32">
        <LanguageSelector />
        <Header />
        <Home />
        <Proyect />
        <Tec />
      </div>
    </I18nextProvider>
  );
}

export default App;
