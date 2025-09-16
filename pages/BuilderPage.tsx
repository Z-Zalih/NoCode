
import React, { useContext, useState } from 'react';
import { PortfolioContext } from '../context/PortfolioContext';
import { Link } from 'react-router-dom';
import type { Experience, Project, Skill } from '../types';

// Reusable Input component
const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => (
    <input {...props} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-accent focus:border-brand-accent sm:text-sm" />
);

const Textarea: React.FC<React.TextareaHTMLAttributes<HTMLTextAreaElement>> = (props) => (
    <textarea {...props} rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-accent focus:border-brand-accent sm:text-sm" />
);


const Accordion: React.FC<{ title: string; children: React.ReactNode; isOpen: boolean; onToggle: () => void; }> = ({ title, children, isOpen, onToggle }) => (
    <div className="border-b">
        <button onClick={onToggle} className="w-full flex justify-between items-center p-4 text-left font-medium text-gray-700 hover:bg-gray-100">
            <span>{title}</span>
            <span className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>▼</span>
        </button>
        {isOpen && <div className="p-4 bg-white">{children}</div>}
    </div>
);

// Editor components
const ProfileEditor: React.FC = () => {
    const context = useContext(PortfolioContext);
    if (!context) return null;
    const { portfolio, updatePortfolio } = context;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        updatePortfolio({ profile: { ...portfolio.profile, [e.target.name]: e.target.value }});
    };
    
    return (
        <div className="space-y-4">
            <div><label className="block text-sm font-medium text-gray-700">Name</label><Input name="name" value={portfolio.profile.name} onChange={handleChange} /></div>
            <div><label className="block text-sm font-medium text-gray-700">Title</label><Input name="title" value={portfolio.profile.title} onChange={handleChange} /></div>
            <div><label className="block text-sm font-medium text-gray-700">Photo URL</label><Input name="photoUrl" value={portfolio.profile.photoUrl} onChange={handleChange} /></div>
            <div><label className="block text-sm font-medium text-gray-700">About</label><Textarea name="about" value={portfolio.profile.about} onChange={handleChange} /></div>
        </div>
    );
};

const ExperienceEditor: React.FC = () => {
    const context = useContext(PortfolioContext);
    if (!context) return null;
    const { portfolio, addExperience, updateExperience, removeExperience } = context;

    const handleChange = (index: number, e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        updateExperience(index, { [name]: value });
    };

    return (
        <div className="space-y-4">
            {portfolio.experience.map((exp, index) => (
                <div key={exp.id} className="p-4 border rounded-md space-y-3 relative">
                     <button onClick={() => removeExperience(index)} className="absolute top-2 right-2 text-red-500 hover:text-red-700">&times;</button>
                     <div><label className="block text-sm font-medium text-gray-700">Title</label><Input name="title" value={exp.title} onChange={(e) => handleChange(index, e)} /></div>
                     <div><label className="block text-sm font-medium text-gray-700">Company</label><Input name="company" value={exp.company} onChange={(e) => handleChange(index, e)} /></div>
                     <div><label className="block text-sm font-medium text-gray-700">Period</label><Input name="period" value={exp.period} onChange={(e) => handleChange(index, e)} /></div>
                     <div><label className="block text-sm font-medium text-gray-700">Description</label><Textarea name="description" value={exp.description} onChange={(e) => handleChange(index, e)} /></div>
                </div>
            ))}
            <button onClick={addExperience} className="w-full bg-gray-200 text-gray-700 py-2 rounded-md hover:bg-gray-300">+ Add Experience</button>
        </div>
    );
};
// Add more editor components (SkillsEditor, ProjectsEditor, etc.) following the pattern above.
const ProjectsEditor: React.FC = () => {
    const context = useContext(PortfolioContext);
    if (!context) return null;
    const { portfolio, addProject, updateProject, removeProject } = context;

    const handleChange = (index: number, e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        updateProject(index, { [name]: value });
    };
    
    return (
        <div className="space-y-4">
            {portfolio.projects.map((proj, index) => (
                <div key={proj.id} className="p-4 border rounded-md space-y-3 relative">
                     <button onClick={() => removeProject(index)} className="absolute top-2 right-2 text-red-500 hover:text-red-700">&times;</button>
                     <div><label className="block text-sm font-medium text-gray-700">Name</label><Input name="name" value={proj.name} onChange={(e) => handleChange(index, e)} /></div>
                     <div><label className="block text-sm font-medium text-gray-700">Description</label><Textarea name="description" value={proj.description} onChange={(e) => handleChange(index, e)} /></div>
                     <div><label className="block text-sm font-medium text-gray-700">Image URL</label><Input name="imageUrl" value={proj.imageUrl} onChange={(e) => handleChange(index, e)} /></div>
                     <div><label className="block text-sm font-medium text-gray-700">Project URL</label><Input name="projectUrl" value={proj.projectUrl} onChange={(e) => handleChange(index, e)} /></div>
                </div>
            ))}
             <button onClick={addProject} className="w-full bg-gray-200 text-gray-700 py-2 rounded-md hover:bg-gray-300">+ Add Project</button>
        </div>
    );
};

const SkillsEditor: React.FC = () => {
    const context = useContext(PortfolioContext);
    if (!context) return null;
    const { portfolio, addSkill, updateSkill, removeSkill } = context;

    const handleChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
        updateSkill(index, { name: e.target.value });
    };
    
    return (
        <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
            {portfolio.skills.map((skill, index) => (
                <div key={skill.id} className="flex items-center">
                    <Input name="name" value={skill.name} onChange={(e) => handleChange(index, e)} />
                    <button onClick={() => removeSkill(index)} className="ml-2 text-red-500 hover:text-red-700">&times;</button>
                </div>
            ))}
            </div>
            <button onClick={addSkill} className="w-full bg-gray-200 text-gray-700 py-2 rounded-md hover:bg-gray-300">+ Add Skill</button>
        </div>
    );
};


const EditorSidebar: React.FC = () => {
    const [openAccordion, setOpenAccordion] = useState<string | null>('profile');
    
    const toggleAccordion = (title: string) => {
        setOpenAccordion(openAccordion === title ? null : title);
    };

    const sections = [
        { title: 'Profile', component: <ProfileEditor /> },
        { title: 'Experience', component: <ExperienceEditor /> },
        { title: 'Projects', component: <ProjectsEditor /> },
        { title: 'Skills', component: <SkillsEditor /> },
        // ... add other sections
    ];

    return (
        <div className="w-full lg:w-1/3 bg-gray-50 border-r border-gray-200 h-full overflow-y-auto p-4">
            <h2 className="text-xl font-bold mb-4">Portfolio Editor</h2>
            {sections.map(section => (
                 <Accordion key={section.title} title={section.title} isOpen={openAccordion === section.title} onToggle={() => toggleAccordion(section.title)}>
                     {section.component}
                 </Accordion>
            ))}
        </div>
    );
};

const LivePreview: React.FC = () => {
    const context = useContext(PortfolioContext);
    if (!context) return <div>Loading Preview...</div>;
    const { portfolio } = context;

    return (
         <div className="w-full lg:w-2/3 p-8 bg-white overflow-y-auto">
             <div className="max-w-4xl mx-auto">
                {/* Header */}
                <header className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 mb-12">
                    <img src={portfolio.profile.photoUrl} alt={portfolio.profile.name} className="w-32 h-32 rounded-full object-cover shadow-lg" />
                    <div>
                        <h1 className="text-4xl font-bold text-gray-800">{portfolio.profile.name}</h1>
                        <p className="text-xl text-brand-accent mt-1">{portfolio.profile.title}</p>
                        <div className="mt-4 flex space-x-4">
                           {portfolio.links.map(link => (
                               <a key={link.name} href={link.url} target="_blank" rel="noreferrer" className="text-gray-600 hover:text-brand-accent transition">{link.name}</a>
                           ))}
                        </div>
                    </div>
                </header>
                
                {/* About Section */}
                <section>
                    <h2 className="text-2xl font-bold border-b-2 border-brand-accent pb-2 mb-4">About Me</h2>
                    <p className="text-gray-700 leading-relaxed">{portfolio.profile.about}</p>
                </section>
                
                {/* Experience Section */}
                <section className="mt-10">
                    <h2 className="text-2xl font-bold border-b-2 border-brand-accent pb-2 mb-4">Experience</h2>
                    <div className="space-y-6">
                        {portfolio.experience.map(exp => (
                            <div key={exp.id}>
                                <h3 className="text-lg font-semibold">{exp.title} at {exp.company}</h3>
                                <p className="text-sm text-gray-500">{exp.period}</p>
                                <p className="mt-2 text-gray-700">{exp.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Projects Section */}
                <section className="mt-10">
                    <h2 className="text-2xl font-bold border-b-2 border-brand-accent pb-2 mb-4">Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {portfolio.projects.map(proj => (
                            <div key={proj.id} className="border rounded-lg overflow-hidden shadow-sm">
                                <img src={proj.imageUrl} alt={proj.name} className="w-full h-48 object-cover" />
                                <div className="p-4">
                                    <h3 className="font-bold text-lg">{proj.name}</h3>
                                    <p className="text-gray-600 mt-1">{proj.description}</p>
                                    <a href={proj.projectUrl} target="_blank" rel="noreferrer" className="text-brand-accent hover:underline mt-2 inline-block">View Project &rarr;</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Skills Section */}
                <section className="mt-10">
                    <h2 className="text-2xl font-bold border-b-2 border-brand-accent pb-2 mb-4">Skills</h2>
                    <div className="flex flex-wrap gap-2">
                        {portfolio.skills.map(skill => (
                            <span key={skill.id} className="bg-brand-accent text-white px-3 py-1 rounded-full text-sm">{skill.name}</span>
                        ))}
                    </div>
                </section>
             </div>
        </div>
    );
};

const BuilderPage: React.FC = () => {
    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="h-[calc(100vh-68px)] flex flex-col lg:flex-row">
            <div className="w-full lg:w-auto bg-white border-b lg:border-b-0 lg:border-r p-4 flex justify-between items-center">
                <h1 className="text-lg font-bold">Dashboard</h1>
                <div className="flex space-x-2">
                    <Link to="/preview/my-portfolio" target="_blank" className="bg-gray-600 text-white px-4 py-2 rounded-md text-sm hover:bg-gray-700">
                        Publish & Get Link
                    </Link>
                    <button onClick={handlePrint} className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700">
                        Download PDF
                    </button>
                </div>
            </div>
            <div className="flex flex-grow overflow-hidden flex-col lg:flex-row">
                <EditorSidebar />
                <LivePreview />
            </div>
        </div>
    );
};

export default BuilderPage;
