/// App.jsx
import React, { useRef } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Technologies } from './components/Technologies';
import { Footer } from './components/Footer';

const projectsData = [
    {
        id: 1,
        title: "Somalia Integrated Data Management System",
        description: "A comprehensive data management platform for the Somalia National Bureau of Statistics. This system enables efficient data collection, processing, analysis, and reporting for national statistics, supporting evidence-based policy making and development planning.",
        technologies: ["Python", "Django", "OpenAI", "PostgreSQL", "PostGIS", "Scrapy", "BeautifulSoup", "Leaflet", "React"],
        link: "https://sidms.gov.so/",
        image: "/somalia.jpg",
        category: "Government & Data Systems"
    },
    {
        id: 2,
        title: "Linkly",
        description: "A comprehensive social media automation platform that manages multiple social media pages by scheduling posts and automating content distribution across various platforms. Built to help businesses scale their social media presence efficiently.",
        technologies: ["React", "Next.js", "TypeScript", "Python", "OpenAI", "MongoDB"],
        link: "https://www.linkly.africa/",
        image: "/linkly.jpg",
        category: "AI & Automation"
    },
    {
        id: 3,
        title: "Optrise",
        description: "An advanced SEO analyzer platform that scans websites to identify broken links, SEO issues, and optimization opportunities. Provides comprehensive website analysis and actionable insights for improvement.",
        technologies: ["React", "Next.js", "TypeScript", "Express", "Node.js", "PostgreSQL"],
        link: "https://optrise-africa.vercel.app/",
        image: "/optrise.jpg",
        category: "SEO & Analytics"
    },
    {
        id: 4,
        title: "SmartWound",
        description: "A telemedicine platform that analyzes wound and disease photos using AI to provide accurate medical assessments and treatment recommendations. Empowers healthcare providers with AI-driven diagnostics.",
        technologies: ["React", "Next.js", "TypeScript", "Node.js", "Express", "OpenAI", "PostgreSQL"],
        link: "https://smartowund.vercel.app/",
        image: "/smartwound.jpg",
        category: "AI & Automation"
    },
    {
        id: 5,
        title: "Rilla Voice AI",
        description: "An intelligent voice AI platform that transforms audio into text and PDFs into voice. Enables seamless conversion between audio and text formats for improved accessibility and productivity.",
        technologies: ["React", "Next.js", "Tailwind CSS", "Python", "Firebase"],
        link: "https://rilla-voice-ai.vercel.app/",
        image: "/rillov.jpg",
        category: "AI & Automation"
    },
    {
        id: 6,
        title: "AI Rate My Professor",
        description: "An AI-driven platform that empowers students with smart, data-backed professor ratings. Uses advanced AI to provide comprehensive and accurate professor evaluations.",
        technologies: ["JavaScript", "React", "Next.js", "Python", "MongoDB", "OpenAI API"],
        link: "https://rate-my-professor-rag-five.vercel.app/",
        image: "/rateprof.jpg",
        category: "AI & Automation"
    }
];

const App = () => {
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const projectsRef = useRef(null);
    const technologiesRef = useRef(null);
    const contactRef = useRef(null);

    const scrollToSection = (ref) => {
        if (ref && ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 overflow-x-hidden">
            <Navbar 
                scrollToSection={scrollToSection} 
                homeRef={homeRef}
                aboutRef={aboutRef}
                projectsRef={projectsRef} 
                technologiesRef={technologiesRef} 
                contactRef={contactRef}
            />
            <main className="relative overflow-x-hidden">
                <section ref={homeRef} id="home" className="scroll-mt-20">
                    <Hero />
                </section>
                <section ref={aboutRef} id="about" className="scroll-mt-20">
                    <About />
                </section>
                <section ref={projectsRef} id="projects" className="scroll-mt-20">
                    <Projects projects={projectsData} />
                </section>
                <section ref={technologiesRef} id="technologies" className="scroll-mt-20">
                    <Technologies />
                </section>
            </main>
            <footer ref={contactRef} id="contact" className="scroll-mt-20">
                <Footer />
            </footer>
        </div>
    );
};

export default App;