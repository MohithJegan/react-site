import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { BrowserRouter, Routes, Route } from "react-router";
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import Skill from './pages/Skill/Skill';
import Project from './pages/Project/Project';
import Resume from './pages/Resume/Resume';

function App() {

  return (
    <BrowserRouter>     
      <Header />
         {/* Navigation Section */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
