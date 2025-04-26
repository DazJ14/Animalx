/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import clsx from "clsx";

const Button = ({ icon, children, path = "#", theme = "white", className }) => {
    return (
      <motion.a 
        whileHover={{ scale: 1.03 }}
        href={path} 
        className={clsx(theme === "dark" ? "bg-[rgb(34,34,34)] text-white" : "bg-white text-black" ,"flex gap-2 items-center w-fit mx-auto py-5 px-8 rounded-3xl text-xl font-bold font-[Figtree] cursor-pointer", className)}
      >
        <span>{children}</span>
        {icon}
      </motion.a>
    );
}

export default Button;
