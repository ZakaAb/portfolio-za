import Footer from './components/Footer'
import GetInTouch from './components/GetInTouch'
import Main from './components/Main'
import Navbar from './components/Navbar'
import NavBarTwo from './components/NavbarTwo'
import Skills from './components/Skills'
import Technologies from './components/Technologies'

function App() {
  return (
    <div className="App font-montserrat">
      {/* <Navbar /> */}
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
