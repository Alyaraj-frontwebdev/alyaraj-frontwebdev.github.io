import './App.scss'
import Header from './components/Header';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap'
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import WorkWithMe from './components/WorkWithMe';
import Project2 from './components/Project2';
import Footer from './components/Footer';




function App() {

  return (
    <>
      <section id='home'>
        <Header/>
       <Hero/>
      </section>
      <section id='about'>
        <About/>
      </section>
      <section id='project'>
        <Projects/>
      </section>
      <section id='project2'>
        <Project2/>
      </section>
      <section id='work'>
        <WorkWithMe/>
        <Footer/>
      </section>
    </>
  )
}

export default App;
