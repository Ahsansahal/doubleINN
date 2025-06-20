"use client";;
import { AnimatePresence, motion } from "framer-motion";

import { cn } from "@/lib/utils";

export default function GradualSpacing({
  text,
  duration = 0.5,
  delayMultiple = 0.04,

  framerProps = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  },

  className
}) {
  return (
    (<div className="flex flex-wrap ">
      <AnimatePresence>
        {text.split("").map((char, i) => (
          <motion.h3
            key={i}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={framerProps}
            transition={{ duration, delay: i * delayMultiple }}
            className={cn("drop-shadow-sm ", className)} 
           
           >
            {char === " " ? <span>&nbsp;</span> : char}
           </motion.h3>
        
        ))}
      </AnimatePresence>
    </div>)
  );
}
