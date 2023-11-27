import Header from "./components/Header"
import './App.css'
import Nav from "./components/Nav"
import AboutMe from "./components/Main/AboutMe"
import ContactMe from "./components/Main/ContactMe"
import MyProyects from "./components/Main/MyProyects"
import Skill from "./components/Main/Skill"

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
      </main>

    </>
  )
}

export default App
