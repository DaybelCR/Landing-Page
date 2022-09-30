import './App.css';
import Nav from './components/NavBar';
import Footer from './components/Footer';
import Portada from './components/Portada';
import Section from './components/Section';


function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Portada></Portada>
      <Section></Section>
      <Footer></Footer>
    </div>
  );
}

export default App;
