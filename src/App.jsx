import { I18nextProvider } from 'react-i18next';
import i18n from './Config/i18n';


import  Navbar  from './Components/Navbar'
import Main from './Components/Main'
import Proyects from './Components/Proyects'
import Skill from "./Components/Skill"
import Contact from "./Components/Contact"  
import Experience from "./Components/Experience"
import Footer from "./Components/Footer"

export default function App() {
  return (
    <I18nextProvider i18n={i18n}>
    <div className='bg-primary'>
    <Navbar />
    <Main />
    < Experience />
    <Proyects />
    <Skill/>
    < Contact />
    <Footer />
    </div>
    </I18nextProvider>
  )
}
