import { useTranslation } from 'react-i18next';
import arg from "../assets/skils/argentina.png"
import usa from "../assets/skils/usa.png"
function LanguageSelector() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);

  };

  return (
    <div className='flex justify-end mt-5 items-center m-3'>
      <div className='text-white font-mono font-bold text-xs mr-5'><p>{t('languages')}:</p></div>
      <button onClick={() => changeLanguage('es')}><img className='w-7 h-7 mr-2 hover:scale-105' src={arg}/></button>
      <button onClick={() => changeLanguage('en')}><img className='w-7 h-7 mr-2 hover:scale-105'  src={usa}/></button>
    </div>
  );
}

export default LanguageSelector;
