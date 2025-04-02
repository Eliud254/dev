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
        title: "Rilla-voice_ai",
        description: "Rilla Voice AI transforms audio into text and PDFs into voice.",
        technologies: ["React","Next","Tailwind CSS", "Python","Firebase"],
        link: "https://rilla-voice-ai.vercel.app/",
        image: "/rillov.jpg"
    },
    {
        id: 2,
        title: "AirBnB Clone",
        description: "A Django-based solution leveraging search algorithms to simplify property rentals, enabling seamless listing, booking, and discovery.",
        technologies: ["Python", "Django", "MySQL","RestAPI"],
        link: "https://github.com/Eliud254/AirBnB_clone",
        image: "/airbnbclone.jpg"
    },
    {
        id: 3,
        title: "TrendLens",
        description: "An AI-powered tool using machine learning and NLP algorithms to predict video success by analyzing trends and audience engagement.",
        technologies: ["JavaScript", "React", "Tailwind","Python", "MongoDB","RestAPI"],
        link: "https://github.com/Eliud254/TrendLens",
        image: "trendlens.jpg"
    },

  {
    id: 4,
    title: "Online Compiler",
    description: "A versatile online IDE supporting 10 languages with customizable themes, smart output handling",
    technologies: ["Typescript","Next", "Tailwind","Convex",],
    link: "https://github.com/Eliud254/compiler",
    image: "compiler.jpg"

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
    title: "Silicon Scribe",
    description: "Silicon Scribe empowers African startups through hackathons, pitch deck writing, and MVP development, accelerating product launches.",
    technologies: ["TypeScript", "React", "Tailwind"],
    link: "https://siliconscribe.vercel.app/",
    image: "silicon.jpg"

  },

  {
    id: 6,
    title: "Go Digital Africa",
    description: "Go Digital Africa is a digital marketing company that provides businesses with innovative solutions to enhance their online presence and drive growth.",
    technologies: ["JavaScript", "React", "Tailwind", "Python", "MySQL"],
    link: "https://godigital-africa.web.app/",
    image: "godigital.jpg"

  },


 
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