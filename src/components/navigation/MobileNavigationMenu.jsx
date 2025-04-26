/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

const MobileNavigationMenu = ({ toggleMenu }) => {
    return (
        <div className="fixed flex justify-between items-center inset-x-6 top-6 z-[200]">
            <motion.a whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.9 }} href="#" className="block size-16 cursor-pointer">
                <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 63.58L1.5 0V102.74H198.5V0L100 63.58Z" fill="#FF5F38"/>
                    <path d="M100 200L198.5 102.74L100 63.58L1.5 102.74L100 200Z" fill="#9F1900"/>
                    <path d="M78.3896 178.66L99.9996 200L121.61 178.66L99.9996 157.18L78.3896 178.66Z" fill="black"/>
                    <path d="M1.5 102.74L100 63.58L198.5 102.74L100 157.18L1.5 102.74Z" fill="#F02600"/>
                </svg>
            </motion.a>
            <motion.button whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.9 }} onClick={toggleMenu} className="flex items-center justify-center bg-green-600 py-1 px-4 w-min h-min rounded-xl">
                <div className="size-6">
                    <svg className="w-full h-full" viewBox="0 0 23 18">
                        <Path
                            d="M 2 5 L 20 5"
                            className="top"
                            variants={{
                            closed: { d: "M 2 5 L 20 5" },
                            open: { d: "M 3 16.5 L 17 5" }
                            }}
                        />
                        <Path
                            d="M 2 13 L 20 13"
                            className="bottom"
                            variants={{
                            closed: { d: "M 2 13 L 20 13" },
                            open: { d: "M 3 2.5 L 17 13" }
                            }}
                        />
                        </svg>
                </div>
            </motion.button>
        </div>
    );
}

const Path = (props) => (
    <path
      fill="transparent"
      strokeWidth="3"
      stroke="white"
      strokeLinecap="round"
      {...props}
    />
  );

export default MobileNavigationMenu;
