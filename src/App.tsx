import { Routes, Route } from "react-router-dom";

import Home from "./AboutPages/Home";
import About from "./AboutPages/About";
import Project from "./ProjectPages/Project";
import ProjectDescription from "./ProjectDescPages/ProjectDesciption";
import Gallery from "./GalleryPages/Gallery";
import Contact from "./ContactPages/Contact";

function App() {
  return (
    <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/projects" element={<Project />} />

  {/* Project Description */}
  <Route
    path="/projects/portfolio"
    element={<ProjectDescription />}
  />

  <Route path="/gallery" element={<Gallery />} />
  <Route path="/contact" element={<Contact />} />
</Routes>
  )
}

export default App;