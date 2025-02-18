import  Navbar  from './Components/Navbar'
import Main from './Components/Main'
import Proyects from './Components/Proyects'
import Skill from "./Components/Skill"

export default function App() {
  return (
    <div className='bg-primary'>
    <Navbar />
    <Main />
    <Proyects />
    <Skill/>
    </div>
  )
}
