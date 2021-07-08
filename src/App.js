import Header from './components/Header'
import Landing from './components/Landing'
import About from './components/About'
import Providers from './components/Providers'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
     <Header/>
     <Landing/>
     <About/>
     <Providers/>
     <Testimonials/>
     <Footer/>
    </div>
  );
}

export default App;
