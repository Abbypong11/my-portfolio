import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/footer";
import Home from "./components/Home";
import Navbar from "./components/navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import SocialLinks from "./components/SocialLinks";



function App() {
  return (
<div>
<Navbar/> 
<Home/>
<About/>
<Projects/>
<Skills/>
<Contact/>
<Footer/>


<SocialLinks/>
</div>
  );
}

export default App;
