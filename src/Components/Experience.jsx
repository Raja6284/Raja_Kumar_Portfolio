
const Experience = () => {
    return (
        <div className="bg-slate-800 flex flex-col text-white p-6 rounded-2xl  max-w-lg mt-5 hover:bg-slate-700 transition duration-300">
            {/* Date & Position */}
            <div className="text-gray-400 text-sm font-medium mt-3 w-2xl">
                <span className="mr-2">June-August</span>
                <br />
                <span className="font-bold text-gray-400">2024</span>
            </div>

            <div className="ml-1.5">
                {/* Role & Company */}
                <h2 className="text-teal-400 text-lg font-semibold mt-2">
                    <a href="#" className="hover:none">
                        Participant, Timechain Summer of Code’24 ·{" "}India ↗
                    </a>
                </h2>

                {/* Job Description */}
                <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                    Participated in a two-month intensive program in blockchain development, focusing on contributing to open-source
                    projects and collaborating with seasoned developers at Timechain Labs to enhance technical expertise.
                </p>

                {/* Tech Stack Tags */}
                <div className="flex gap-2 mt-4 justify-center items-center">
                    {["Smart Contract", "React", "Svelte","BSV Blockchain"].map((tech, index) => (
                        <span
                            key={index}
                            className="bg-teal-700 text-white text-xs px-3 py-1 rounded-full"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

        </div>
    );
};



export default Experience