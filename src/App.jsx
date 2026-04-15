import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Navbar from './components/NavBar'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Admin from './components/Admin'
import ScrollToTop from './components/ScrolltoTop'

function App() {
  return (
    <main className="bg-slate-900 min-h-screen">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Admin/>  
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  )
}

export default App