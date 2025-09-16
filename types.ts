
export interface Link {
    name: string;
    url: string;
}

export interface Experience {
    id: string;
    title: string;
    company: string;
    period: string;
    description: string;
}

export interface Project {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
    projectUrl: string;
}

export interface Skill {
    id: string;
    name: string;
}

export interface Portfolio {
    profile: {
        name: string;
        title: string;
        photoUrl: string;
        about: string;
    };
    contact: {
        email: string;
        phone: string;
    };
    links: Link[];
    experience: Experience[];
    education: {
        degree: string;
        institution: string;
        period: string;
    };
    skills: Skill[];
    projects: Project[];
    layout: {
        template: string;
        color: string;
        font: string;
    };
}
