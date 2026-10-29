import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import About from "../components/About";
import Experience from "../components/Experience";
import Certifications from "../components/Certifications";
import Contact from "../components/Contact";
import LinkedIn from "../components/LinkedIn";
import Footer from "../components/Footer";

export default function Home() {
  return <><Navbar /><main id="main-content"><Hero /><About /><Skills /><Projects /><Experience /><Certifications /><LinkedIn /><Contact /></main><Footer /></>;
}
