import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

interface SidebarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ open, setOpen }) => {
  const overlayRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = overlayRef.current;
    if (!el) return;

    gsap.killTweensOf(el);

    if (open) {
      gsap.set(el, { visibility: "visible", pointerEvents: "auto" });
      gsap.fromTo(
        el,
        { clipPath: "circle(0% at 100% 0%)" },
        {
          clipPath: "circle(150% at 50% 50%)",
          duration: 0.8,
          ease: "power3.out",
        }
      );
    } else {
      gsap.to(el, {
        clipPath: "circle(0% at 100% 0%)",
        duration: 0.6,
        ease: "power3.in",
        onComplete: () => {
          gsap.set(el, { visibility: "hidden", pointerEvents: "none" });
        },
      });
    }
  }, [open]);

  return (
      <div
        ref={overlayRef}
        style={{
          position: "fixed",
          inset: 0,
          background: "black",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          clipPath: "circle(0% at 100% 0%)",
          visibility: "hidden", // starts hidden
          pointerEvents: "none", // allow clicks to pass through when hidden
          willChange: "clip-path",
            zIndex: 2000,
        }}
      >
        <h1 style={{ fontSize: 32, fontWeight: "bold" }}>Sidebar Content</h1>
      </div>
    
  );
};

export default Sidebar;
