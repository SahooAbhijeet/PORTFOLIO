import LineGradient from "./LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const MySkills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="skills" className="pt-10 pb-24 mx-28">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between mx-auto md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-red ">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7">
            
          </p>
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveLarge ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-blue before:z-[-1] "
            >
              <img
                alt="skills"
                className="z-10"
                src="https://static.jobscan.co/blog/uploads/Skills-for-resume-1-600x318.webp"
              />
            </div>
          ) : (
            <img alt="skills" className="z-10" src="https://static.jobscan.co/blog/uploads/Skills-for-resume-1-600x318.webp" />
          )}
        </div>
      </div>

      {/* SKILLS */}
      <div className="md:flex md:justify-between mt-16 gap-32">
        {/* EXPERIENCE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32 ">
            <div className="z-10 ">
              
              <p className="font-playfair font-extrabold text-3xl mt-3 flex justify-center h-screen">
                TECH  STACK
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32  absolute right-0 top-0 z-[-1]" />
          </div>
          <div className="flex flex-wrap justify-between gap-16 ">

          <img 
          className="bg-deep-blue size-16"
          src="https://cdn.icon-icons.com/icons2/2108/PNG/512/javascript_icon_130900.png"
          />

          <img 
          className="bg-deep-blue size-16"
          src="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_reactjs_icon_130205.png" 
          />

          <img 
          className="bg-deep-blue size-16"
          src="https://cdn.icon-icons.com/icons2/2415/PNG/512/babel_original_logo_icon_146634.png"
          />

          <img 
          className="bg-deep-blue size-16"
          src="https://cdn.icon-icons.com/icons2/2415/PNG/512/nodejs_original_logo_icon_146411.png"
          />

          <img 
          className="bg-deep-blue size-16"
          src="https://cdn.icon-icons.com/icons2/2699/PNG/512/mysql_official_logo_icon_169938.png"
          />

          <img 
          className="bg-deep-blue size-16"
          src="https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_wordmark_logo_icon_146425.png"
          />

          <img 
          className="bg-deep-blue size-16"
          src="https://cdn.icon-icons.com/icons2/2699/PNG/96/firebase_logo_icon_171157.png"
          />

          <img 
          className=" bg-white size-16 rounded-full"
          src="https://cdn.icon-icons.com/icons2/936/PNG/512/github-logo_icon-icons.com_73546.png"
          />

          <img 
          className="bg-deep-blue size-16"
          src="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_git_icon_130581.png"
          />

          <img 
          className="bg-deep-blue size-16"
          src="https://cdn.icon-icons.com/icons2/1495/PNG/512/code_103074.png"
          />

          <img 
          className="bg-deep-blue size-16"
          src="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_tailwind_icon_130128.png"
          />

          <img 
          className="bg-deep-blue size-16"
          src="https://cdn.icon-icons.com/icons2/2415/PNG/512/bootstrap_plain_wordmark_logo_icon_146620.png"
          />

          <img 
          className="bg-deep-blue size-16"
          src="https://cdn.icon-icons.com/icons2/3053/PNG/512/postman_alt_macos_bigsur_icon_189814.png"
          />

          <img 
          className="bg-deep-blue size-16 "
          src="https://cdn.icon-icons.com/icons2/2699/PNG/512/rabbitmq_logo_icon_170812.png"
          />

          <img 
          className="bg-deep-blue size-16"
          src="https://cdn.icon-icons.com/icons2/2415/PNG/512/redux_original_logo_icon_146365.png"
          />

          <img 
          className="bg-white rounded-full size-16"
          src="https://cdn.icon-icons.com/icons2/2389/PNG/512/socket_io_logo_icon_144874.png"
          />

          <img 
          className="bg-deep-blue size-16"
          src="https://nodemailer.com/nm_logo_200x136.png"
          />

          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;