


// import { FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaReddit } from "react-icons/fa";
// import { NavLink } from "react-router-dom"; // optional if you want to keep react-router for other parts

// const Sidebar = function () {
//   return (
//     <div>
//       <div className="flex flex-col items-center justify-start pt-15">
//         <h1 className="font-bold text-5xl">Raja Kumar</h1>
//         <h2 className="text-xl mt-5">Software Engineer, Blockchain Developer</h2>
//         <p className="text-lg mt-4">Pre-final year student @ Heritage Institue of Technology</p>

//         <nav className="mt-10 space-y-4 text-gray-400">
//           <div className="flex items-center space-x-2">
//             <a href="#about">
//               <span className="w-12 h-px bg-gray-500"></span>
//               <span className="text-gray-500 font-semibold">ABOUT</span>
//             </a>
//           </div>
//           <div className="flex items-center space-x-2">
//             <a href="#experience">
//               <span className="w-12 h-px bg-gray-500"></span>
//               <span className="text-gray-500">EXPERIENCE</span>
//             </a>
//           </div>
//           <div className="flex items-center space-x-2">
//             <a href="#projects">
//               <span className="w-12 h-px bg-gray-500"></span>
//               <span className="text-gray-500">PROJECTS</span>
//             </a>
//           </div>
//           <div className="flex items-center space-x-2">
//             <a href="#educations">
//               <span className="w-12 h-px bg-gray-500"></span>
//               <span className="text-gray-500">EDUCATIONS</span>
//             </a>
//           </div>
//           <div className="flex items-center space-x-2">
//             <span className="w-12 h-px bg-gray-500"></span>
//             <a href="/My_Resume.pdf" download="Raja_Kumar_Resume.pdf" className="text-gray-500 hover:text-white cursor-pointer">
//               RESUME
//             </a>
//           </div>
//         </nav>

//         <div className="flex space-x-6 mt-10 text-gray-400">
//           <a href="https://github.com/Raja6284" target="_blank" rel="noopener noreferrer">
//             <FaGithub className="text-2xl hover:text-white cursor-pointer" />
//           </a>
//           <a href="https://www.linkedin.com/in/raja-kumar-b1453826a/" target="_blank" rel="noopener noreferrer">
//             <FaLinkedin className="text-2xl hover:text-white cursor-pointer" />
//           </a>
//           <a href="https://x.com/_raja_berlin" target="_blank" rel="noopener noreferrer">
//             <FaTwitter className="text-2xl hover:text-white cursor-pointer" />
//           </a>
//           <a href="https://www.instagram.com/raja_r4j4/" target="_blank" rel="noopener noreferrer">
//             <FaInstagram className="text-2xl hover:text-white cursor-pointer" />
//           </a>
//           <a href="https://www.reddit.com/user/LossPitiful7416/" target="_blank" rel="noopener noreferrer">
//             <FaReddit className="text-2xl hover:text-white cursor-pointer" />
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;





// import { FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaReddit } from "react-icons/fa";
// import { useState, useEffect } from "react";

// const Sidebar = function () {
//   const [activeSection, setActiveSection] = useState("");

//   useEffect(() => {
//     const sections = document.querySelectorAll("section");

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setActiveSection(entry.target.id);
//           }
//         });
//       },
//       { threshold: 0.6 } // Trigger when 60% of the section is visible
//     );

//     sections.forEach((section) => observer.observe(section));

//     return () => {
//       sections.forEach((section) => observer.unobserve(section));
//     };
//   }, []);

//   const navItems = [
//     { id: "about", label: "ABOUT" },
//     { id: "experience", label: "EXPERIENCE" },
//     { id: "projects", label: "PROJECTS" },
//     { id: "educations", label: "EDUCATIONS" }
//   ];

//   return (
//     <div>
//       <div className="flex flex-col items-center justify-start pt-15">
//         <h1 className="font-bold text-5xl">Raja Kumar</h1>
//         <h2 className="text-xl mt-5">Software Engineer, Blockchain Developer</h2>
//         <p className="text-lg mt-4">Pre-final year student @ Heritage Institute of Technology</p>

//         <nav className="mt-10 space-y-4 text-gray-400">
//           {navItems.map((item) => (
//             <div key={item.id} className="flex items-center space-x-2 group">
//               <a
//                 href={`#${item.id}`}
//                 className={`text-gray-500 font-semibold transition-all duration-300 group-hover:text-white group-hover:scale-105 relative
//                   ${activeSection === item.id ? "text-white font-bold scale-110" : ""}`}
//               >
//                 <span className={`w-12 h-px inline-block transition-all duration-300 
//                   ${activeSection === item.id ? "bg-white" : "bg-gray-500 group-hover:bg-white"}`}>
//                 </span>
//                 <span className="ml-2 relative after:absolute after:w-full after:h-px after:bg-white after:bottom-0 after:left-0 after:scale-0 after:transition-transform after:duration-300 group-hover:after:scale-100">
//                   {item.label}
//                 </span>
//               </a>
//             </div>
//           ))}

//           <div className="flex items-center space-x-2 group">
//             <span className="w-12 h-px bg-gray-500 transition-all duration-300 group-hover:bg-white"></span>
//             <a
//               href="/My_Resume.pdf"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-gray-500 transition-all duration-300 group-hover:text-white group-hover:scale-105 relative after:absolute after:w-full after:h-px after:bg-white after:bottom-0 after:left-0 after:scale-0 after:transition-transform after:duration-300 group-hover:after:scale-100"
//             >
//               RESUME
//             </a>
//           </div>
//         </nav>

//         <div className="flex space-x-6 mt-10 text-gray-400">
//           {[
//             { icon: FaGithub, link: "https://github.com/Raja6284" },
//             { icon: FaLinkedin, link: "https://www.linkedin.com/in/raja-kumar-b1453826a/" },
//             { icon: FaTwitter, link: "https://x.com/_raja_berlin" },
//             { icon: FaInstagram, link: "https://www.instagram.com/raja_r4j4/" },
//             { icon: FaReddit, link: "https://www.reddit.com/user/LossPitiful7416/" }
//           ].map((social, index) => (
//             <a key={index} href={social.link} target="_blank" rel="noopener noreferrer">
//               <social.icon className="text-2xl transition-transform duration-300 hover:scale-110 hover:text-white cursor-pointer" />
//             </a>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;




// import { FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaReddit } from "react-icons/fa";
// import { useState, useEffect } from "react";

// const Sidebar = function () {
//   const [activeSection, setActiveSection] = useState("");

//   useEffect(() => {
//     const sections = document.querySelectorAll("section");

//     const observer = new IntersectionObserver(
//       (entries) => {
//         let foundActive = false;
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             console.log(`Section ${entry.target.id} is now active`);
//             setActiveSection(entry.target.id);
//             foundActive = true;
//           }
//         });

//         // If no section is active, set the first section as active
//         if (!foundActive && sections.length > 0) {
//           setActiveSection(sections[0].id);
//         }
//       },
//       { threshold: 0.5 } // Lower the threshold to 50%
//     );

//     sections.forEach((section) => observer.observe(section));

//     return () => {
//       sections.forEach((section) => observer.unobserve(section));
//     };
//   }, []);

//   const navItems = [
//     { id: "about", label: "ABOUT" },
//     { id: "experience", label: "EXPERIENCE" },
//     { id: "projects", label: "PROJECTS" },
//     { id: "educations", label: "EDUCATIONS" }
//   ];

//   return (
//     <div>
//       <div className="flex flex-col items-center justify-start pt-15">
//       <div className="w-full max-w-xs sm:max-w-md mx-auto text-center">
//         <h1 className="font-bold text-5xl sm:text-5xl">Raja Kumar</h1>
//         <h2 className="text-lg sm:text-xl mt-3 sm:mt-5">
//           Software Engineer, Blockchain Developer
//         </h2>
//         <p className="text-base sm:text-lg mt-2 sm:mt-4">
//           Pre-final year student @ Heritage Institute of Technology
//         </p>
//       </div>
//         <nav className="mt-10 space-y-4 text-gray-400">
//           {navItems.map((item) => (
//             <div key={item.id} className="flex items-center space-x-2 group">
//               <a
//                 href={`#${item.id}`}
//                 className={`text-gray-500 font-semibold transition-all duration-300 group-hover:text-white group-hover:scale-105 relative
//                   ${activeSection === item.id ? "text-white font-bold scale-110" : ""}`}
//               >
//                 <span className={`w-12 h-px inline-block transition-all duration-300 
//                   ${activeSection === item.id ? "bg-white" : "bg-gray-500 group-hover:bg-white"}`}>
//                 </span>
//                 <span className="ml-2 relative after:absolute after:w-full after:h-px after:bg-white after:bottom-0 after:left-0 after:scale-0 after:transition-transform after:duration-300 group-hover:after:scale-100">
//                   {item.label}
//                 </span>
//               </a>
//             </div>
//           ))}

//           <div className="flex items-center space-x-2 group">
//             <span className="w-12 h-px bg-gray-500 transition-all duration-300 group-hover:bg-white"></span>
//             <a
//               href="/My_Resume.pdf"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-gray-500 transition-all duration-300 group-hover:text-white group-hover:scale-105 relative after:absolute after:w-full after:h-px after:bg-white after:bottom-0 after:left-0 after:scale-0 after:transition-transform after:duration-300 group-hover:after:scale-100"
//             >
//               RESUME
//             </a>
//           </div>
//         </nav>

//         <div className="flex space-x-6 mt-10 text-gray-400">
//           {[
//             { icon: FaGithub, link: "https://github.com/Raja6284" },
//             { icon: FaLinkedin, link: "https://www.linkedin.com/in/raja-kumar-b1453826a/" },
//             { icon: FaTwitter, link: "https://x.com/_raja_berlin" },
//             { icon: FaInstagram, link: "https://www.instagram.com/raja_r4j4/" },
//             { icon: FaReddit, link: "https://www.reddit.com/user/LossPitiful7416/" }
//           ].map((social, index) => (
//             <a key={index} href={social.link} target="_blank" rel="noopener noreferrer">
//               <social.icon className="text-2xl transition-transform duration-300 hover:scale-110 hover:text-white cursor-pointer" />
//             </a>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;






import { FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaReddit } from "react-icons/fa";
import { useState, useEffect } from "react";

const Sidebar = function () {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        let maxVisibleSection = null;
        let maxVisibleRatio = 0;

        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > maxVisibleRatio) {
            maxVisibleRatio = entry.intersectionRatio;
            maxVisibleSection = entry.target.id;
          }
        });

        if (maxVisibleSection) {
          setActiveSection(maxVisibleSection);
        } else {
          setActiveSection(""); // No section is fully in view
        }
      },
      { threshold: [0.3, 0.5, 0.7] } // Multiple thresholds for better detection
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const navItems = [
    { id: "about", label: "ABOUT" },
    { id: "experience", label: "EXPERIENCE" },
    { id: "projects", label: "PROJECTS" },
    { id: "educations", label: "EDUCATIONS" }
  ];

  return (
    <div>
      <div className="flex flex-col items-center justify-start pt-15">
        <div className="w-full max-w-xs sm:max-w-md mx-auto text-center">
          <h1 className="font-bold text-5xl sm:text-5xl">Raja Kumar</h1>
          <h2 className="text-lg sm:text-xl mt-3 sm:mt-5">
            Software Engineer, Blockchain Developer
          </h2>
          <p className="text-base sm:text-lg mt-2 sm:mt-4">
            Pre-final year student @ Heritage Institute of Technology
          </p>
        </div>
        <nav className="mt-10 space-y-4 text-gray-400">
          {navItems.map((item) => (
            <div key={item.id} className="flex items-center space-x-2 group">
              <a
                href={`#${item.id}`}
                className={`text-gray-500 font-semibold transition-all duration-300 group-hover:text-white group-hover:scale-105 relative
                  ${activeSection === item.id ? "text-white font-bold scale-110" : ""}`}
              >
                <span className={`w-12 h-px inline-block transition-all duration-300 
                  ${activeSection === item.id ? "bg-white" : "bg-gray-500 group-hover:bg-white"}`}>
                </span>
                <span className="ml-2 relative after:absolute after:w-full after:h-px after:bg-white after:bottom-0 after:left-0 after:scale-0 after:transition-transform after:duration-300 group-hover:after:scale-100">
                  {item.label}
                </span>
              </a>
            </div>
          ))}

          <div className="flex items-center space-x-2 group">
            <span className="w-12 h-px bg-gray-500 transition-all duration-300 group-hover:bg-white"></span>
            <a
              href="/My_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 transition-all duration-300 group-hover:text-white group-hover:scale-105 relative after:absolute after:w-full after:h-px after:bg-white after:bottom-0 after:left-0 after:scale-0 after:transition-transform after:duration-300 group-hover:after:scale-100"
            >
              RESUME
            </a>
          </div>
        </nav>

        <div className="flex space-x-6 mt-10 text-gray-400">
          {[
            { icon: FaGithub, link: "https://github.com/Raja6284" },
            { icon: FaLinkedin, link: "https://www.linkedin.com/in/raja-kumar-b1453826a/" },
            { icon: FaTwitter, link: "https://x.com/_raja_berlin" },
            { icon: FaInstagram, link: "https://www.instagram.com/raja_r4j4/" },
            { icon: FaReddit, link: "https://www.reddit.com/user/LossPitiful7416/" }
          ].map((social, index) => (
            <a key={index} href={social.link} target="_blank" rel="noopener noreferrer">
              <social.icon className="text-2xl transition-transform duration-300 hover:scale-110 hover:text-white cursor-pointer" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
