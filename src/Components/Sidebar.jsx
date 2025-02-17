import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { NavLink } from "react-router-dom"

const Sidebar = function () {
    return (
        <div>
            <div className="flex flex-col items-center justify-start pt-15">
                <h1 className="font-bold text-5xl">Raja Kumar</h1>

                <h2 className="text-xl mt-5">Software Engineer,Blockchain developer</h2>

                <p className="text-lg mt-4">Pre-final year student @ Heritage Institue of Technoloy</p>

                <nav className="mt-10 space-y-4 text-gray-400">
                    <div className="flex items-center space-x-2">
                        <span className="w-12 h-px bg-gray-500"></span>
                        <span className="text-gray-500 font-semibold">ABOUT</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span className="w-12 h-px bg-gray-500"></span>
                        <span className="text-gray-500">EXPERIENCE</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span className="w-12 h-px bg-gray-500"></span>
                        <span className="text-gray-500">PROJECTS</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span className="w-12 h-px bg-gray-500"></span>
                        <a href="/My_Resume.pdf" download="Raja_Kumar_Resume.pdf" className="text-gray-500 hover:text-white cursor-pointer">
                            RESUME
                        </a>
                    </div>
                </nav>
                
                <div className="flex space-x-6 mt-10 text-gray-400">
                    <a href="https://github.com/Raja6284" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="text-2xl hover:text-white cursor-pointer" />
                    </a>
                    <a href="https://www.linkedin.com/in/raja-kumar-b1453826a/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="text-2xl hover:text-white cursor-pointer" />
                    </a>
                    <a href="https://x.com/_raja_berlin" target="_blank" rel="noopener noreferrer">
                        <FaTwitter className="text-gray-400 hover:text-white text-2xl cursor-pointer" />
                    </a>
                    <a href="https://www.instagram.com/raja_r4j4/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="text-2xl hover:text-white cursor-pointer" />
                    </a>
                </div>


            </div>
        </div>
    )
}


export default Sidebar