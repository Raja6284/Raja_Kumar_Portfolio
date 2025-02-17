import React from 'react';
import About from './About.jsx';
import Experience from './Experience.jsx';
import Projects from './Projects.jsx';
import EducationShowcase from './Education.jsx';

const MainComponent = function (){

    return (
        <div>
            <About/>
            <Experience/>
            <Projects/>
            <EducationShowcase/>
        </div>
    )
}

export default MainComponent