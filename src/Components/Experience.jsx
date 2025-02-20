/* eslint-disable react/prop-types */
const Card = ({ date, year, role,link, company, location, description, techStack }) => {
    return (
        <div className="bg-slate-800 text-white p-6 rounded-2xl shadow-lg max-w-lg flex flex-col hover:bg-slate-700 transition duration-300">
            {/* Date & Role */}
            <div className="flex items-start gap-4">
                <div className="flex flex-col text-gray-400 text-sm font-medium">
                    <span>{date}</span>
                    <span className="font-bold">{year}</span>
                </div>
                
                {/* Role & Company */}
                <h2 className="text-teal-400 text-lg font-semibold">
                    <a href={link} target="_blank" rel="noopener noreferrer" className="hover:none">
                        {role}, {company} · {location} ↗
                    </a>
                </h2>
            </div>

            {/* Job Description */}
            <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                {description}
            </p>

            {/* Tech Stack */}
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

const Experience = () => {
    return (
        <div className="flex mt-20 flex-col gap-6 items-center">
            <Card 
                date="June-August"
                year="2024"
                role="Participant"
                link="https://github.com/Raja6284/TSoC-2024-Coding-Phase"
                company="Timechain Summer of Code’24"
                location="India"
                description="Participated in a two-month intensive program in blockchain development, focusing on contributing to open-source projects and collaborating with seasoned developers at Timechain Labs to enhance technical expertise."
                techStack={["Smart Contract", "React", "Svelte", "BSV Blockchain"]}
            />
        </div>
    );
};

export default Experience;
