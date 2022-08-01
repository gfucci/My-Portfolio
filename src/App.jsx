//CSS
import './App.css'

//router
import { BrowserRouter, Routes, Route} from "react-router-dom"

//Components
import NavBar from './components/navbar/NavBar'
import Footer from './components/footer/Footer'

//Pages
import Education from './pages/education/Education'
import About from './pages/about/About'
import Carrer from './pages/carrer/Carrer'
import PortfolioReact from './pages/portfolioreact/PortfolioReact'
import PortfolioSites from './pages/portfoliosites/PortfolioSites'
import Certifications from './pages/certifications/Certifications'


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <div className="main_content">
          <main >
            <Routes>
              <Route path='/' element={<About />} />
              <Route path='/education' element={<Education />} />
              <Route path='/carrer' element={<Carrer />} />
              <Route path='/portfolioreact' element={<PortfolioReact />} />
              <Route path='/portfoliosites' element={<PortfolioSites />} />
              <Route path='/certifications' element={<Certifications />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App
