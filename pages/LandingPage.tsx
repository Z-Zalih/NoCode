
import React from 'react';
import { Link } from 'react-router-dom';

const templates = [
    { id: 'modern', name: 'Modern', imgSrc: 'https://picsum.photos/seed/modern/500/600', style: 'modern' },
    { id: 'creative', name: 'Creative', imgSrc: 'https://picsum.photos/seed/creative/500/600', style: 'creative' },
    { id: 'professional', name: 'Professional', imgSrc: 'https://picsum.photos/seed/professional/500/600', style: 'professional' },
    { id: 'minimal', name: 'Minimalist', imgSrc: 'https://picsum.photos/seed/minimal/500/600', style: 'minimal' },
];

const features = [
    {
        icon: '✏️',
        title: 'Easy Customization',
        description: 'Personalize colors, fonts, and layouts to match your unique style with our intuitive editor.'
    },
    {
        icon: '🖼️',
        title: 'Stunning Templates',
        description: 'Choose from a variety of professionally designed templates that make your profile stand out.'
    },
    {
        icon: '🔗',
        title: 'One-Click Sharing',
        description: 'Get a shareable link for your portfolio to send to recruiters, clients, or showcase on social media.'
    }
];

const LandingPage: React.FC = () => {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="bg-gray-50">
                <div className="container mx-auto px-6 py-24 text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 leading-tight">
                        Build & Share Your <span className="text-brand-accent">Unique</span> Portfolio
                    </h1>
                    <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                        Create a professional online presence in minutes. No coding required. Just your creativity.
                    </p>
                    <div className="mt-8 flex justify-center space-x-4">
                        <Link to="/builder" className="bg-brand-accent text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-brand-accent-light transition-transform transform hover:scale-105">
                            Start Building for Free
                        </Link>
                        <Link to="#templates" className="bg-white text-gray-700 px-8 py-3 rounded-md text-lg font-semibold border border-gray-300 hover:bg-gray-100 transition-transform transform hover:scale-105">
                            Explore Templates
                        </Link>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                         <h2 className="text-3xl font-bold text-gray-800">Why UniqCvGuy?</h2>
                         <p className="text-gray-600 mt-2">Everything you need to create the perfect portfolio.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {features.map((feature, index) => (
                             <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                                 <div className="text-5xl mb-4">{feature.icon}</div>
                                 <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                                 <p className="text-gray-600">{feature.description}</p>
                             </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Templates Section */}
            <section id="templates" className="bg-white py-20">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-800">Find Your Style</h2>
                        <p className="text-gray-600 mt-2">Browse our curated collection of portfolio templates.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {templates.map(template => (
                            <div key={template.id} className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer">
                                <img src={template.imgSrc} alt={template.name} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="text-center">
                                        <h3 className="text-white text-2xl font-bold">{template.name}</h3>
                                        <Link to={`/preview/${template.id}`} className="mt-4 inline-block bg-brand-accent text-white px-6 py-2 rounded-md hover:bg-brand-accent-light">
                                            Preview
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LandingPage;
