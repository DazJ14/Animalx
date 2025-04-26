import { useEffect } from "react";
import { useAnimate } from "framer-motion";

const UseMenuAnimation = (isOpen) => {
    const [scope, animate] = useAnimate();

    useEffect(() => {
      const menuAnimations = isOpen
        ? [
            [
              ".overlay",
              { display: "block", opacity: 1 },
              { duration: 0.4, at: "<" }
            ],
            [
              "nav",
              { x: 0, opacity: 1 },
              { at: "<", ease: [0.17, 0.67, 0.83, 0.95], duration: 0.55 }
            ]
          ]
        : [
            [
              "nav",
              { x: -150, opacity: 0 },
              { at: "<" }
            ],
            [".overlay", { display: "none", opacity: 0 }, { at: "-0.1" }]
          ];
  
      animate([
        [
          "path.top",
          { d: isOpen ? "M 4 16.5 L 19 2.5" : "M 2 5 L 20 5" },
          { at: "<" }
        ],
        [
          "path.bottom",
          { d: isOpen ? "M 4 2.5 L 19 16.5" : "M 2 13 L 20 13" },
          { at: "<" }
        ],
        ...menuAnimations
      ]);
    }, [isOpen, animate]);
  
    return scope;
}

export default UseMenuAnimation;
