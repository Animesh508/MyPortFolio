import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar/navbar";
import Hero from "./Components/Hero/hero.jsx";
import About from "./Components/About/about.jsx";
import Services from "./Components/Services/services.jsx";
import MyWork from "./Components/MyWork/my_work.jsx";
import MyContact from "./Components/MyContact/mycontact.jsx";
import Footer from "./Components/Footer/footer.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <MyWork />
      <MyContact />
      <Footer />
    </div>
  );
}

export default App;
