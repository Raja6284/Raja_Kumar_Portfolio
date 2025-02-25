const Card = ({ image, title, link, description, techStack }) => {
    return (
        <div className="bg-slate-800 text-white p-6 rounded-2xl shadow-lg max-w-lg flex flex-col hover:bg-slate-700 transition duration-300 mt-5">
            {/* Image & Title */}
            <div className="flex items-start gap-4">
                <img
                    src={image}
                    alt={title}
                    className="w-20 h-14 rounded-lg object-cover"
                />
                <h2 className="text-teal-400 text-lg font-semibold">
                    <a href={link} target="_blank" rel="noopener noreferrer" className="hover:none">
                        {title} ↗
                    </a>
                </h2>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                {description}
            </p>

            {/* Tech Stack Badges */}
            <div className="flex gap-2 mt-4">
                {techStack.map((tech, index) => (
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
};

const Projects = () => {
    return (
        <div className="flex mt-20 flex-col gap-6 items-center">
            <Card 
                image="/alumniPortalimage.png"
                title="Alumni Association Platform"
                link="https://alumni-association-portal.vercel.app/"
                description="Developed an Alumni Association Platform using React, Tailwind CSS, and MongoDB, featuring responsive UI, secure data storage, user authentication, profile management, and real-time event updates."
                techStack={["React", "MongoDB", "Tailwind", "JavaScript"]}
            />
            
            <Card 
                image="/megablogger.png"
                title="MegaBlogger"
                link="https://mega-blogger.vercel.app/"
                description="Developed a full-stack blogging platform with ReactJS, Tailwind CSS, and Appwrite, featuring authentication, data storage, and a TinyMCE-powered rich text editor."
                techStack={["React", "AppWrite", "Tailwind", "JavaScript"]}
            />
        </div>
    );
};

export default Projects;
