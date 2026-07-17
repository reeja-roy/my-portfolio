import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Project from './components/Project';

function App() {
  return (
    <div className="App">

      <Navbar />

      <main>
        <Home />

        <About />

        <Project />
      </main>
    <Contact/>


    </div>
  );
}

export default App;