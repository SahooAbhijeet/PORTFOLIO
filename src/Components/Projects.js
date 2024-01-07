import React from 'react'
import LineGradient from './LineGradient';
import { motion } from 'framer-motion'

const project =[
  {
    title: 'Project 1',
    description: 'AIRLINE BOOKING MANAGEMENT SYSTEM',
    link: 'https://docs.google.com/document/d/18aWsuKy7ibsw6u2m2LKf0Xh8CDk-gDPxk1BbwKJirkc/edit?usp=sharing',
    imageUrl: 'https://img.freepik.com/free-vector/book-your-flight-isometric-landing-page_88138-484.jpg?size=626&ext=jpg&ga=GA1.1.2003483851.1692983094&semt=ais', // Replace with your image URL
  },
  {
    title: 'Project 2',
    description: 'TWITTER BACKEND SYSTEM',
    link: 'https://github.com/SahooAbhijeet/Twitter-Dev',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_RfQkNiCBlZYDF5Jnu61-7sbW549zgjQpLLIwg5vkVsND1YfaMvHTd-8buTUIGySkZr4&usqp=CAU', // Replace with your image URL
  },
  {
    title: 'Project 3',
    description: 'YOUTUBE CLONE',
    link: 'https://youtube-tau-gray.vercel.app/',
    imageUrl: 'https://img.freepik.com/free-photo/pile-3d-play-button-logos_1379-880.jpg?w=996&t=st=1704645187~exp=1704645787~hmac=98fc6b60e6a6a434712ecf0fcdd1cf65b7797ce1af2c25b6c5d093f722155259', // Replace with your image URL
  }
]

const Projects = () => {
  
    const container = {
              hidden: {opacity: 0},
              visible: {
                opacity: 1,
                  transition: {staggerChildren: 0.2 }
              },
          };
      
          const projectVariant = {
              hidden: {opacity:0, scale:0.8},
              visible: {opacity:1, scale: 1},
          }
          return (
            <section className="py-12">
            <div className="container mx-auto ">
            <p className="font-playfair font-semibold text-4xl text-center">
              <span className="text-red my-6">PRO</span>JECTS
            </p>
            <div className='flex justify-center mt-5 my-10'>
           <LineGradient width="w-1/3 " />
           </div>
           
              <motion.div
                className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
                variants={container}
                initial="hidden"
                animate="visible"
              >
                {project.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 hover:shadow-xl"
              variants={projectVariant}
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 bg-red">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-w mb-4">{project.description}</p>
                <p className="text-blue-500 font-semibold hover:underline">
                  View Project
                </p>
              </div>
            </motion.a>
          ))}
        </motion.div>
        </div>
    </section>
  );
};

export default Projects