import './App.css'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Main from './Components/Main/Main'
import Navbar from './Components/Navbar/Navbar'
import Services from './Components/Services/Services'
import Work from './Components/Work/Work'

function App() {
  return (
    <>
      <Navbar />
      <Main />
      <Work />
      <About />
      <Services />
      <Contact />
      <Footer />
    </>
  )
}

export default App
