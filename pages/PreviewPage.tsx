
import React, { useContext } from 'react';
import { PortfolioContext } from '../context/PortfolioContext';
import { useParams } from 'react-router-dom';

const PreviewPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const context = useContext(PortfolioContext);
    
    if (!context) {
        return <div className="text-center p-10">Loading Portfolio...</div>;
    }
    const { portfolio } = context;

    // In a real app, you would fetch portfolio data based on the `id`
    // For this demo, we'll just show the portfolio from the context.

    return (
        <div className="bg-white min-h-screen">
            <div className="container mx-auto p-8 md:p-12">
                 <div className="max-w-4xl mx-auto bg-gray-50 p-8 rounded-lg shadow-lg">
                    {/* Header */}
                    <header className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 mb-12 text-center md:text-left">
                        <img src={portfolio.profile.photoUrl} alt={portfolio.profile.name} className="w-32 h-32 rounded-full object-cover shadow-lg mx-auto md:mx-0" />
                        <div>
                            <h1 className="text-4xl font-bold text-gray-800">{portfolio.profile.name}</h1>
                            <p className="text-xl text-brand-accent mt-1">{portfolio.profile.title}</p>
                            <div className="mt-4 flex space-x-4 justify-center md:justify-start">
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
                                <div key={proj.id} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow">
                                    <img src={proj.imageUrl} alt={proj.name} className="w-full h-48 object-cover" />
                                    <div className="p-4">
                                        <h3 className="font-bold text-lg">{proj.name}</h3>
                                        <p className="text-gray-600 mt-1 h-20 overflow-hidden">{proj.description}</p>
                                        <a href={proj.projectUrl} target="_blank" rel="noreferrer" className="text-brand-accent hover:underline mt-2 inline-block font-semibold">View Project &rarr;</a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Skills Section */}
                    <section className="mt-10">
                        <h2 className="text-2xl font-bold border-b-2 border-brand-accent pb-2 mb-4">Skills</h2>
                        <div className="flex flex-wrap gap-3">
                            {portfolio.skills.map(skill => (
                                <span key={skill.id} className="bg-brand-accent bg-opacity-10 text-brand-accent px-4 py-2 rounded-full font-medium">{skill.name}</span>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default PreviewPage;
