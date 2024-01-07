import React, { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import useMediaQuery from '../hooks/useMediaQuery';
import { IoMenu } from "react-icons/io5";

const Link = ({ page, selectedPage, setSelectedPage}) => {
    const lowerCasePage = page.toLowerCase();
    return (
        <AnchorLink 
        className={`${selectedPage === lowerCasePage ? "text-yellow": ""} hover:text-yellow transition duration-500`}
        href={`#${lowerCasePage}`}
        onClick={() => setSelectedPage(lowerCasePage)}
        >
            {page}
        </AnchorLink>
    )
}

const Navbar = ({isTopOfPage, selectedPage, setSelectedPage}) => {
    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const isAboveSmallScreens = useMediaQuery("(min-width:768px)");
    const navbarBackground = isTopOfPage ? "" : "bg-red";
  return (
    <div className={`${navbarBackground}z-40 w-full fixed top-0 py-6}`}>
        <div className='flex items-center justify-between mx-auto w-5/6'>
            <h4 className='font-playfair text-4xl font-bold'>AS</h4>

            {isAboveSmallScreens ? (
                <div className='flex justify-between gap-16 font-opensan text-sm font-semibold'>
                    <Link 
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    />
                    <Link 
                    page="Skills"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    />
                    <Link 
                    page="Projects"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    />
                    <Link 
                    page="Contact"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    />
                </div>
            ) : (
                <div>
                    <IoMenu 
                    className='rounded-full bg-orange-900 p-2 text-4xl'
                    onClick={() => setIsMenuToggled(!isMenuToggled)}
                    />
                </div>
            )}

            {!isAboveSmallScreens && isMenuToggled && (
                <div className='fixed right-0 bottom-0 h-full w-[300px] bg-orange-900'>
                    <div className='flex justify-end p-12'>
                        <IoMenu className='text-4xl'
                        onClick={() => setIsMenuToggled(!isMenuToggled)}
                        />
                    </div>
                    <div className='flex flex-col gap-10 ml-[25%] text-2xl text-deep-blue'>
                    <Link 
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    />
                    <Link 
                    page="Skills"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    />
                    <Link 
                    page="Projects"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    />
                    <Link 
                    page="Contact"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    />
                    </div>
                </div>
            )}
        </div>
    </div>
  )
}

export default Navbar;