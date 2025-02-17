
const Projects = function () {

    return (
        <div>
            <AlumniAssociation/>
            <MegaBlogger/>
        </div>
    )
}



const AlumniAssociation = () => {
    return (
        <div className="bg-slate-800text-white p-6 rounded-2xl shadow-lg max-w-lg flex flex-col justify-center items-center mt-20 hover:bg-slate-700 transition duration-300">
            {/* Image & Title */}
            <div className="flex items-start gap-4">
                <img
                    src="/alumniPortalimage.png"
                    alt="AlumniAssociation"
                    className="w-20 h-14 rounded-lg object-cover"
                />
                <h2 className="text-teal-400 text-lg font-semibold">
                    <a href="https://alumni-association-portal.vercel.app/" className="hover:none">
                        Alumni Association Platform{" "}↗
                    </a>
                </h2>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-sm mt-3 leading-relaxed">
            Developed an Alumni Association Platform using React, Tailwind CSS, and MongoDB, featuring responsive UI, secure data storage, user authentication, profile management, and real-time event updates.
            </p>

            {/* Rating
            <div className="flex items-center gap-1 mt-3 text-gray-300">
                <span>⭐</span>
                <span className="text-sm">675</span>
            </div> */}

            {/* Tech Stack Badges */}
            <div className="flex gap-2 mt-4">
                {["React", "MongoDB", "Tailwind", "JavaScript"].map((tech, index) => (
                    <span
                        key={index}
                        className="bg-teal-700 text-white text-xs px-3 py-1 rounded-full"
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    );
}

const MegaBlogger = () => {
    return (
        <div className="bg-slate-800text-white p-6 rounded-2xl shadow-lg max-w-lg flex flex-col justify-center items-center mt-20 hover:bg-slate-700 transition duration-300">
            {/* Image & Title */}
            <div className="flex items-start gap-4">
                <img
                    src="/megablogger.png"
                    alt="AlumniAssociation"
                    className="w-20 h-14 rounded-lg object-cover"
                />
                <h2 className="text-teal-400 text-lg font-semibold">
                    <a href="https://mega-blogger.vercel.app/" className="hover:none">
                        MegaBlogger{" "}↗
                    </a>
                </h2>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-sm mt-3 leading-relaxed">
            Developed a full-stack blogging platform with ReactJS, Tailwind CSS, and Appwrite, featuring authentication, data storage, and a TinyMCE-powered rich text editor.
            </p>

            {/* Rating
            <div className="flex items-center gap-1 mt-3 text-gray-300">
                <span>⭐</span>
                <span className="text-sm">675</span>
            </div> */}

            {/* Tech Stack Badges */}
            <div className="flex gap-2 mt-4">
                {["React", "AppWrite", "Tailwind", "JavaScript"].map((tech, index) => (
                    <span
                        key={index}
                        className="bg-teal-700 text-white text-xs px-3 py-1 rounded-full"
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    );
}
  


  
export default Projects