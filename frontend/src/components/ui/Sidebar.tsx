import React, { useLayoutEffect, useRef, useEffect } from "react";
import gsap from "gsap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import type { RootState } from "../../store/store";

interface SidebarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ open, setOpen }) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const theme = useSelector((state: RootState) => state.theme);
  const navigate = useNavigate();
  const lineRefs = useRef<(HTMLDivElement | null)[]>([]);

  const sidebarLinks = [
    { name: "Home", link: "/home" },
    { name: "Skills", link: "/skills" },
    { name: "Projects", link: "/projects" },
    { name: "Resume", link: "/resume" },
    { name: "Contact", link: "/contact" },
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
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
            duration: 0.5,
            ease: "power3.out",
          }
        );
      } else {
        gsap.to(el, {
          clipPath: "circle(0% at 100% 0%)",
          duration: 0.5,
          ease: "power3.in",
          onComplete: () => {
            gsap.set(el, { visibility: "hidden", pointerEvents: "none" });
          },
        });
      }
    });

    return () => ctx.revert();
  }, [open]);

  useEffect(() => {
  if (open) {
    // Prevent scrolling
    document.body.style.overflow = "hidden";
  } else {
    // Restore scrolling
    document.body.style.overflow = "";
  }

  // Cleanup on unmount
  return () => {
    document.body.style.overflow = "";
  };
}, [open]);

const handleEnter = (i: number) => {
  const line = lineRefs.current[i];
  const text = line?.previousElementSibling as HTMLElement | null;
  if (line && text) {
    const textWidth = text.offsetWidth; // get text width
    gsap.killTweensOf(line);
    gsap.fromTo(
      line,
      { scaleX: 0, width: textWidth, transformOrigin: "left center" },
      { scaleX: 1, duration: 0.4, ease: "power3.out" }
    );
  }
};

const handleLeave = (i: number) => {
  const line = lineRefs.current[i];
  const text = line?.previousElementSibling as HTMLElement | null;
  if (line && text) {
    const textWidth = text.offsetWidth;
    gsap.killTweensOf(line);
    gsap.to(line, {
      scaleX: 0,
      width: textWidth,
      transformOrigin: "right center",
      duration: 0.4,
      ease: "power3.in",
    });
  }
};


  return (
  <div
    ref={overlayRef}
    style={{
      position: "fixed",
      inset: 0,
      background: "transparent", // let blur layer handle bg
      clipPath: "circle(0% at 100% 0%)",
      visibility: "hidden",
      pointerEvents: "none",
      willChange: "clip-path",
      zIndex: 2000,
      overflow: "hidden", // prevent blur from leaking
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    {/* Blurred background layer */}
    <div
      style={{
        position: "absolute",
        inset: 0,
        background: theme.colors.background,
        opacity: 0.95,
        //filter: "blur(5px)", // only this layer is blurred
        zIndex: 0,
      }}
    />

    {/* Content layer */}
    <div
      style={{
        position: "relative",
        zIndex: 1,
        color: theme.colors.text,
        padding: "20px",
      }}
    >
      {sidebarLinks.map((link, i) => (
        <div
          key={i}
          onMouseEnter={() => handleEnter(i)}
          onMouseLeave={() => handleLeave(i)}
          onClick={() => {
            navigate(link.link, {viewTransition: true})
            setOpen(false)
          }}
        >
          <h1
            style={{
              fontSize: 32,
              fontWeight: "bold",
              cursor: "pointer",
              display: "inline-block",
            }}
          >
            {link.name}
          </h1>
          <div
            ref={(el) => { lineRefs.current[i] = el; }}
            style={{
                height: 2,
                background: theme.colors.text,
                marginTop: 8,
                transform: "scaleX(0)",
                transformOrigin: "left center",
            }}
            ></div>
        </div>
      ))}
    </div>
  </div>
);

};

export default Sidebar;
