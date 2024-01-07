import React, { useEffect, useState } from 'react'
import useMediaQuery from './hooks/useMediaQuery';
import Navbar from "./Components/Navbar";
import DotGroup from './Components/DotGroup';
import Landing from './Components/Landing';
import LineGradient from './Components/LineGradient';
import MySkills from './Components/MySkills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

const App = () => {
  const [selectedPage, setSelectedPage] = useState("home");
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY === 0) setIsTopOfPage(true);
      if(window.scrollY !== 0) setIsTopOfPage(false);
    };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  return (
    <div className='bg-deep-blue'>
      <Navbar selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              isTopOfPage={isTopOfPage}
      />
      <div className='w-5/6 mx-auto md:h-full'>
        {isAboveMediumScreen && (
        <DotGroup
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        />
        )}
        <Landing 
        setSelectedPage={setSelectedPage}
        />
      </div>
          <LineGradient />
          <div className='w-5/6 mx-auto h-full'>
            <MySkills />
          </div>
          <LineGradient />
          <div className='w-5/6 mx-auto'>
            <Projects />
          </div>
          <LineGradient />
          <div className='w-5/6 mx-auto md:h-full'>
            <Contact />
          </div>
          <Footer />
    </div>
  )
}

export default App