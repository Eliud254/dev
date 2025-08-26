/// App.jsx
import React, { useRef } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Technologies } from './components/Technologies';
import { Footer } from './components/Footer';

const projectsData = [
    {
        id: 1,
        title: "Linkly",
        description: "A comprehensive social media automation platform that manages multiple social media pages by scheduling posts and automating content distribution across various platforms.",
        technologies: ["React", "Next.js", "TypeScript", "Python", "OpenAI", "MongoDB"],
        link: "https://www.linkly.africa/",
        image: "/wordpress.jpg"
    },
    {
        id: 2,
        title: "Optrise",
        description: "An advanced SEO analyzer platform that scans websites to identify broken links, SEO issues, and optimization opportunities for comprehensive website analysis and improvement.",
        technologies: ["React", "Next.js", "TypeScript", "Express", "Node.js", "PostgreSQL"],
        link: "https://optrise-africa.vercel.app/",
        image: "/optrise.jpg"
    },
    {
        id: 3,
        title: "SmartWound",
        description: "A telemedicine platform that analyzes wound and disease photos using AI to provide accurate medical assessments and treatment recommendations.",
        technologies: ["React", "Next.js", "TypeScript", "Node.js", "Express", "OpenAI", "PostgreSQL"],
        link: "https://smartowund.vercel.app/",
        image: "/smartwound.jpg"
    },
    {
        id: 4,
        title: "Rilla-voice_ai",
        description: "Rilla Voice AI transforms audio into text and PDFs into voice.",
        technologies: ["React","Next","Tailwind CSS", "Python","Firebase"],
        link: "https://rilla-voice-ai.vercel.app/",
        image: "/rillov.jpg"
    },
    {
        id: 5,
        title: "AI Rate My Professor",
        description: "An AI-driven platform that empowers students with smart, data-backed professor ratings",
        technologies: ["Javascript", "React", "Next","Python", "MongoDB","Open API"],
        link: "https://rate-my-professor-rag-five.vercel.app/",
        image: "rateprof.jpg"
    },
    {
        id: 6,
        title: "Go Digital Africa",
        description: "Go Digital Africa is a digital marketing company that provides businesses with innovative solutions to enhance their online presence and drive growth.",
        technologies: ["JavaScript", "React", "Tailwind", "Python", "MySQL"],
        link: "https://godigital-africa.web.app/",
        image: "godigital.jpg"
    }
];
const technologiesData = [
    { category: "Frontend", name: "JavaScript", image: "/javascript.svg" },
    { category: "Frontend", name: "React", image: "/react.svg" },
    { category: "Frontend", name: "Tailwind CSS", image: "/tailwindcss.svg" },
    { category: "Backend", name: "Node.js", image: "/nodejs.svg" },
    { category: "Backend", name: "Python", image: "/python.svg" },
    { category: "Backend", name: "Go", image: "/express.svg" },
    { category: "Backend", name: "Django", image: "/django.svg" },
    { category: "Database", name: "PostgreSQL", image: "/postgresql.svg" },
    { category: "Database", name: "MongoDB", image: "/mongodb.svg" },
    { category: "Other", name: "Git", image: "/git.svg" },
    { category: "Other", name: "Docker", image: "/docker.svg" },
];

const App = () => {
    const homeRef = useRef(null);
    const projectsRef = useRef(null);
    const technologiesRef = useRef(null);
    const contactRef = useRef(null);

    const scrollToSection = (ref) => {
        if (ref && ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar 
                scrollToSection={scrollToSection} 
                homeRef={homeRef} 
                projectsRef={projectsRef} 
                technologiesRef={technologiesRef} 
                contactRef={contactRef}
            />
            <section ref={homeRef} id="home" className="py-20">
                <Hero /> {/* Hero is back! */}
            </section>
            <section ref={projectsRef} id="projects">
                <Projects projects={projectsData} />
            </section>
            <section ref={technologiesRef} id="technologies" className="py-12 bg-gray-100">
                <Technologies technologies={technologiesData} />
            </section>
            <footer ref={contactRef} id="contact">
                <Footer />
            </footer>
        </div>
    );
};

export default App;