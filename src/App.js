import './App.css';
import About from './components/About';
import Hero from './components/hero';
import NavLateral from './components/NavLateral';
import Redes from './components/Redes';
function App() {
  return (
    <div className="">
      <Redes/>
      <NavLateral/>
      <Hero/>
      <About/>
    </div>
  );
}

export default App;
