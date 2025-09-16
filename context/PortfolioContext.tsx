
import React, { createContext, useState, ReactNode } from 'react';
import type { Portfolio } from '../types';

interface PortfolioContextType {
    portfolio: Portfolio;
    updatePortfolio: (newPortfolio: Partial<Portfolio>) => void;
    addExperience: () => void;
    updateExperience: (index: number, experience: any) => void;
    removeExperience: (index: number) => void;
    addProject: () => void;
    updateProject: (index: number, project: any) => void;
    removeProject: (index: number) => void;
    addSkill: () => void;
    updateSkill: (index: number, skill: any) => void;
    removeSkill: (index: number) => void;
}

const defaultPortfolio: Portfolio = {
    profile: {
        name: "Your Name",
        title: "Your Professional Title",
        photoUrl: "https://picsum.photos/200",
        about: "A brief and compelling summary about your professional background, skills, and career goals. Make it shine!",
    },
    contact: {
        email: "your.email@example.com",
        phone: "+1 (123) 456-7890",
    },
    links: [
        { name: "LinkedIn", url: "https://linkedin.com/in/yourprofile" },
        { name: "GitHub", url: "https://github.com/yourprofile" },
    ],
    experience: [
        { id: 'exp1', title: 'Senior Developer', company: 'Tech Solutions Inc.', period: 'Jan 2020 - Present', description: 'Developed and maintained web applications using React and Node.js. Collaborated with cross-functional teams to deliver high-quality software.' },
    ],
    education: {
        degree: 'B.S. in Computer Science',
        institution: 'University of Technology',
        period: '2016 - 2020',
    },
    skills: [
        { id: 'skill1', name: 'React' },
        { id: 'skill2', name: 'TypeScript' },
        { id: 'skill3', name: 'Node.js' },
        { id: 'skill4', name: 'Tailwind CSS' },
    ],
    projects: [
        { id: 'proj1', name: 'Project Alpha', description: 'A web-based platform for data visualization.', imageUrl: 'https://picsum.photos/400/300', projectUrl: '#' },
    ],
    layout: {
        template: 'modern',
        color: '#660e1e',
        font: 'Inter',
    },
};


export const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export const PortfolioProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [portfolio, setPortfolio] = useState<Portfolio>(defaultPortfolio);

    const updatePortfolio = (newPortfolioData: Partial<Portfolio>) => {
        setPortfolio(prev => ({ ...prev, ...newPortfolioData }));
    };

    const addExperience = () => {
        setPortfolio(prev => ({
            ...prev,
            experience: [...prev.experience, { id: `exp${Date.now()}`, title: '', company: '', period: '', description: '' }]
        }));
    };
    
    const updateExperience = (index: number, updatedExp: any) => {
        setPortfolio(prev => ({
            ...prev,
            experience: prev.experience.map((exp, i) => i === index ? { ...exp, ...updatedExp } : exp)
        }));
    };

    const removeExperience = (index: number) => {
        setPortfolio(prev => ({
            ...prev,
            experience: prev.experience.filter((_, i) => i !== index)
        }));
    };

    const addProject = () => {
        setPortfolio(prev => ({
            ...prev,
            projects: [...prev.projects, { id: `proj${Date.now()}`, name: '', description: '', imageUrl: 'https://picsum.photos/400/300', projectUrl: '#' }]
        }));
    };
    
    const updateProject = (index: number, updatedProj: any) => {
        setPortfolio(prev => ({
            ...prev,
            projects: prev.projects.map((proj, i) => i === index ? { ...proj, ...updatedProj } : proj)
        }));
    };

    const removeProject = (index: number) => {
        setPortfolio(prev => ({
            ...prev,
            projects: prev.projects.filter((_, i) => i !== index)
        }));
    };
    
    const addSkill = () => {
        setPortfolio(prev => ({
            ...prev,
            skills: [...prev.skills, { id: `skill${Date.now()}`, name: '' }]
        }));
    };
    
    const updateSkill = (index: number, updatedSkill: any) => {
        setPortfolio(prev => ({
            ...prev,
            skills: prev.skills.map((skill, i) => i === index ? { ...skill, ...updatedSkill } : skill)
        }));
    };

    const removeSkill = (index: number) => {
        setPortfolio(prev => ({
            ...prev,
            skills: prev.skills.filter((_, i) => i !== index)
        }));
    };

    return (
        <PortfolioContext.Provider value={{ portfolio, updatePortfolio, addExperience, updateExperience, removeExperience, addProject, updateProject, removeProject, addSkill, updateSkill, removeSkill }}>
            {children}
        </PortfolioContext.Provider>
    );
};
