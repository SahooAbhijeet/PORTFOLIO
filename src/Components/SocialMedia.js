import React from 'react'
import { FaLinkedin, FaSquareXTwitter  } from "react-icons/fa6";
import { FaInstagram, FaFacebook } from "react-icons/fa";


const SocialMedia = () => {
  return (
    <div className='flex justify-center md:justify-start my-10 gap-7'>
        <a 
        className='hover:opacity-50 transition duration-500'
        href="https://www.linkedin.com/in/abhijeet-sahoo-/"
        target='_blank'
        rel='noreferrer'
        >
            <FaLinkedin className='text-3xl'/>
        </a>

        <a 
        className='hover:opacity-50 transition duration-500'
        href="https://twitter.com/064Etc"
        target='_blank'
        rel='noreferrer'
        >
            <FaSquareXTwitter className='text-3xl'/>
        </a>

        <a 
        className='hover:opacity-50 transition duration-500'
        href="https://www.instagram.com/_abhijeetsahoo/"
        target='_blank'
        rel='noreferrer'
        >
            <FaInstagram className='text-3xl'/>
        </a>

        <a 
        className='hover:opacity-50 transition duration-500'
        href="https://www.facebook.com/abhijeet.sahoo.5602/"
        target='_blank'
        rel='noreferrer'
        >
            <FaFacebook className='text-3xl'/>
        </a>


    </div>
  )
}

export default SocialMedia