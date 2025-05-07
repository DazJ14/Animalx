import { motion } from "motion/react";

const BlogPage = () => {
  return (
    <div className="p-32">
        <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="size-16 bg-amber-400" 
        />
    </div>
  );
}

export default BlogPage