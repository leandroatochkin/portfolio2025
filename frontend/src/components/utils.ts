import gsap from "gsap";

export const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
        // highlight hovered one
        gsap.to(e.currentTarget, {
          scale: 1.03, 
          zIndex: 10, 
          duration: 0.3, 
          ease: "power2.out",
        });
      };

export const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
        // reset hovered one
        gsap.to(e.currentTarget, { 
            scale: 1, 
            zIndex: 1, 
            duration: 0.3, 
        });
}