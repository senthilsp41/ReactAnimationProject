import Test from './Test';
import './app.scss'
import { Contact } from './components/Contact/Contact';
import Hero from './components/Hero/Hero';
import Parallex from './components/Parallex/Parallex';
import Projects from './components/Projects/Projects';
import Cursor from './components/cursor/Cursor';
import { Navbar } from './components/navbar/Navbar';
import Skills from './components/services/Skills.Jsx';

import Links from './components/sidebar/Links/Links';
const App = () => {
  return <div>
    <Cursor/>
  <section id="HomePage">
      <Navbar/>
      <Hero/>
    </section>
    <section id="Services"><Parallex type="services"/></section>
    <section id="Skills"><Skills/></section>
    <section id="Projects"><Parallex type="projects"/></section>
    <Projects/>
    
      
    
<section id="Contact"><Contact/></section>


  </div>;
};

export default App;
