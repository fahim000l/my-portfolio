import React, { useEffect, useState } from 'react';
import AboutMeModal from './Banner/AboutMeModal/AboutMeModal';
import Banner from './Banner/Banner';
import ContactMe from './ContactMe/ContactMe';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';
import Tools from './Tools/Tools';

const Home = () => {

    const [isOpen, setIsOpen] = useState(true);

    useEffect(() => {
        setIsOpen(true);
    }, [isOpen])

    return (
        <div>
            <Banner></Banner>
            {
                isOpen &&
                <AboutMeModal setIsOpen={setIsOpen} />
            }
            <Skills></Skills>
            <Tools></Tools>
            <Projects></Projects>
            <ContactMe></ContactMe>
        </div>
    );
};

export default Home;