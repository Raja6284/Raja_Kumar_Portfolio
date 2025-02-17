import { GraduationCap, School, BookOpen } from "lucide-react";

const EducationCard = ({ title, institution, year, marks, icon: Icon }) => {
    return (

        <div className="bg-slate-800 text-white p-6 rounded-2xl shadow-lg max-w-lg flex flex-col hover:bg-slate-700 transition duration-300">
            <div className="flex items-center justify-items-start gap-4">
                <div className="bg-teal-600 p-3 rounded-lg">
                    <Icon className="text-white w-6 h-6" />
                </div>
                <div className="ml-15">
                    <h3 className="text-lg font-semibold text-teal-400">{title}</h3>
                    <p className="text-gray-300 text-sm">{institution}</p>
                
            
            <p className="text-gray-400 text-sm">Year of Completion: {year}</p>
            <p className="text-gray-400 text-sm">Marks: {marks}</p>
            </div>
            </div>
        </div>
    );
};

const EducationShowcase = () => {
    return (
        <div className="flex mt-20 flex-col gap-6 items-center">
            <EducationCard 
                title="Matriculation (10th)" 
                institution="Sadhna Devi Vidyapeeth School Samastipur" 
                year="2019" 
                marks="91.8" 
                icon={School} 
            />
            <EducationCard 
                title="Intermediate (12th)" 
                institution="Sadhan Devi Vidyapeeth School Samastipur" 
                year="2021" 
                marks="91.8" 
                icon={BookOpen} 
            />
            <EducationCard 
                title="Bachelor of Technology (B.Tech)" 
                institution="Heritage Institute of Technology" 
                year="2026" 
                marks="9.2 CGPA" 
                icon={GraduationCap} 
            />
        </div>
    );
};

export default EducationShowcase;
