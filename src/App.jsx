import Header from "./components/Header"
import './App.css'
import Nav from "./components/Nav"
import AboutMe from "./components/Main/AboutMe"
import ContactMe from "./components/Main/ContactMe"
import MyProyects from "./components/Main/MyProyects"
import Skill from "./components/Main/Skill"
import Footer from "./components/Main/Footer"
import { PopUp } from "./components/PopUp"

function App() {


  return (
    <>
      <Nav />
      <Header />
      <main className='main'>
        <AboutMe />
        <Skill />
        <MyProyects />
        <ContactMe />
        <Footer />
        <PopUp />
      </main>
      <a className="app__a" href="/CV-WilDev.pdf" download>
        <i className='bx bxs-file-pdf'></i>
        <span>CV</span>
        <i className='bx bx-cloud-download' ></i>
      </a>
    </>
  )
}

export default App
