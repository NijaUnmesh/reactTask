import './App.css'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import {Header} from './components/Header'
import {Footer} from './components/Footer'
import { Intro} from './Pages/Intro'
import { Founder } from './Pages/Founder'
import { History } from './Pages/History'
import { Features } from './Pages/Features'
import { Advantages } from './Pages/Advantages'

function App() {
  

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element="{<Intro />}"/> 
        <Route path="/founder" element="{<Founder />}"/>
        <Route path="/history" element="{<History />}"/>
        <Route path="/features" element="{<Features />"/>
        <Route path="/advantages" element="{<Advantages />}"/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
