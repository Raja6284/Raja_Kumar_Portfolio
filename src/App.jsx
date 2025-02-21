import Layout from "./Layout/Layout.jsx"
import {Routes,Route} from "react-router-dom"
import About from "./Components/About.jsx"
import Experience from "./Components/Experience.jsx"
import Projects from "./Components/Projects.jsx"
import EducationShowcase from "./Components/Education.jsx"


function App() {


  return (
   <Layout>
    <Routes>
       <Route path="/" element={<About/>}/>
       <Route path="/experience" element={<Experience/>} />
       <Route path="/projects" element={<Projects/>} />
       <Route path="/educations" element={<EducationShowcase/>} />
    </Routes>
  {/* <About/>
  <Experience/>
  <Projects/>
  <EducationShowcase/> */}
   </Layout>
  )
}

export default App
