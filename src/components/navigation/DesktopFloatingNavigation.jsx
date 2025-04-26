/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

const DesktopFloatingNavigation = ({ navigationActive = false }) => {
    return (
        <motion.div
          initial={{ y: -200 }}
          animate={navigationActive ? { y: 0 } : { y: -200 }}
          id="floating-navigation" 
          className="hidden lg:block border border-white h-20 fixed lg:inset-x-12 xl:inset-x-24 top-8 bg-[rgb(34,34,34)] rounded-3xl py-4 px-8 z-50 max-w-[2000px] mx-auto"
        >
          <nav className="h-full relative flex justify-between items-center">
            <div className="flex gap-12 h-min">
              <a href="#" className="block text-white py-1 px-3 font-black font-[Figtree] text-xl rounded-xl transition-colors hover:bg-[rgb(175,127,113)] hover:text-white">Inicio</a>
              <a href="#" className="block text-white py-1 px-3 font-black font-[Figtree] text-xl rounded-xl transition-colors hover:bg-[rgb(175,127,113)] hover:text-white">Servicios</a>
            </div>
            <div className="flex gap-12 h-min">
              <a href="#" className="block text-white py-1 px-3 font-black font-[Figtree] text-xl rounded-xl transition-colors hover:bg-[rgb(175,127,113)] hover:text-white">Blog</a>
              <div className="block text-white py-1 px-3 font-black font-[Figtree] text-xl rounded-xl transition-colors cursor-pointer hover:bg-[rgb(175,127,113)] hover:text-white">Idioma</div>
            </div>
            <a href="#" className="flex items-center gap-2 absolute left-1/2 -translate-x-1/2 w-auto h-full hover:scale-110 transition-transform cursor-pointer">
              <svg height="100%" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 63.58L1.5 0V102.74H198.5V0L100 63.58Z" fill="#FF5F38"/>
                <path d="M100 200L198.5 102.74L100 63.58L1.5 102.74L100 200Z" fill="#9F1900"/>
                <path d="M78.3896 178.66L99.9996 200L121.61 178.66L99.9996 157.18L78.3896 178.66Z" fill="black"/>
                <path d="M1.5 102.74L100 63.58L198.5 102.74L100 157.18L1.5 102.74Z" fill="#F02600"/>
              </svg>
              <span className="text-5xl text-white font-black font-[Figtree]">
              Animalx
              </span>
            </a>
          </nav>
        </motion.div>
    );
}

export default DesktopFloatingNavigation;
