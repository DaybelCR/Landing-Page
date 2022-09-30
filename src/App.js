import './App.css';
import Nav from './components/NavBar';
import Footer from './components/Footer';
import Portada from './components/Portada';
import Section from './components/Section';
import SectionForm from './components/SectionForm';


function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Portada></Portada>
      <Section></Section>
      <SectionForm></SectionForm>
      <Footer></Footer>
    </div>
  );
}

export default App;
