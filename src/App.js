import React from "react";
import Nav from "./Components/Elements/Nav/Nav";
import "./App.css";
import AboutMe from "./Components/Elements/AboutMe/AboutMe";
import Gallery from "./Components/Elements/Gallery/Gallery";
import Education from "./Components/Elements/Education/Education";
import Contact from "./Components/Elements/Contact/Contact";
import Projects from "./Components/Elements/Projects/Projects";
import Footer from "./Components/Elements/Footer/Footer";



function App() {
// FUTURE TITLE DISPLAY: Needs Functionality

  // const [navDisplay] = useState([
  //   {
  //     id: "e1",
  //     title: "About Me",
  //     display: <AboutMe/>
  //   },
  //   {
  //     id: "e2",
  //     title: "Work History and Education",
  //   },
  //   {
  //     id: "e3",
  //     title: "Projects",
  //   },
  //   {
  //     id: "e4",
  //     title: "Contact Me",
  //   },
  // ]);

  // const [currentNavDisplay, setCurrentNavDisplay] = useState(navDisplay[0]);
 
 

  return (
    <div>
      <Nav
        // items={navDisplay}
        // setCurrentNavDisplay={setCurrentNavDisplay}
        // currentNavDisplay={currentNavDisplay}
      ></Nav>
      <Gallery/> 
       <AboutMe/>
      <Education />
      <Contact />
      <Projects/>
      <Footer/>
  </div>
  );
}

export default App;
