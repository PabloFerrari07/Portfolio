import logo from './logo.svg';
import './App.css';
import Hero from './components/hero';
import NavLateral from './components/NavLateral';
function App() {
  return (
    <div className="App">
      <NavLateral/>
      <Hero/>
    </div>
  );
}

export default App;
