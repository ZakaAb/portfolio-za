import Footer from './components/Footer'
import GetInTouch from './components/GetInTouch'
import Main from './components/Main'
import NavBarTwo from './components/NavbarTwo'
import Skills from './components/Skills'
import Technologies from './components/Technologies'

function App() {
  return (
    <div className="App font-montserrat">
      <NavBarTwo />
      <Main />
      <Skills />
      <Technologies />
      <GetInTouch />
      <Footer />
    </div>
  )
}

export default App
