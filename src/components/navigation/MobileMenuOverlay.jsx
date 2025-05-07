/* eslint-disable react/prop-types */
import { motion } from "motion/react";

const MobileNavigationOverlay = () => {
  return (
    <motion.div 
    // ref={overlayScope} 
    initial={{ display: "none", opacity: 0 }} 
    // animate={isMenuOpen ? { display: "block", opacity: 1 } : { display: "none", opacity: 0 }}
    className="overlay fixed w-full h-screen bg-[rgb(250,247,239)] top-0 left-0 z-100"
    >
        <div className="w-full h-full relative">
            <motion.nav initial={{ x: -150, opacity: 0 }} className="w-full h-full pt-32 px-12 relative z-10 space-y-8">
                <a href="#" className="block uppercase text-2xl font-black">Inicio</a>
                <div className="nav-item">
                    <span className="block uppercase text-2xl font-black mb-3">Adopcion</span>
                    <div className="space-y-3 ml-9">
                        <a href="#" className="block text-xl font-bold">Proceso</a>
                        <a href="#" className="block text-xl font-bold">Mascotas</a>
                        <a href="#" className="block text-xl font-bold">Contacto</a>
                    </div>
                </div>
                <a href="#" className="block uppercase text-2xl font-black">Servicios</a>
                <a href="#" className="block upper case text-2xl font-black">Blog</a>
            </motion.nav>
        </div>
    </motion.div>
  );
}

export default MobileNavigationOverlay;
