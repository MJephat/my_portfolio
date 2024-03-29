
import About from '../sections/about/About';
import Contact from '../sections/contact/contact';
import FloatingNav from '../sections/floating-nav/FloatingNav';
import Footer from '../sections/footer/Footer';
import Header from '../sections/header/Header';
import NavBar from '../sections/navbar/NavBar';
import Portfolio from '../sections/portfolio/Portfolio';
import Services from '../sections/services/services';
import Testmonial from '../sections/testmonial/testmonial';


function App() {
  return (
    <main>
      <NavBar/>
      <Header/>
      <About/>
      <Services/>
      <Portfolio/>
      <Testmonial/>
      <Contact/>
      <Footer/>
      <FloatingNav/>

    </main>
  );
}

export default App;
