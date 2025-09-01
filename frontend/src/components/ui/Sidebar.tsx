import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import { useNavigate } from "react-router-dom";

interface SidebarProps {
  open: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ open }) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const theme = useSelector((state: RootState) => state.theme);

  const navigate = useNavigate();

  const sidebarLinks = [
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
    { name: "Settings", link: "/settings" },
  ];

  // store refs in an array
  const lineRefs = useRef<(HTMLDivElement | null)[]>([]);

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

  const handleEnter = (i: number) => {
    const line = lineRefs.current[i];
    if (line) {
      gsap.fromTo(
        line,
        { scaleX: 0, transformOrigin: "left center" },
        { scaleX: 1, duration: 0.4, ease: "power3.out" }
      );
    }
  };

  const handleLeave = (i: number) => {
    const line = lineRefs.current[i];
    if (line) {
      gsap.to(line, {
        scaleX: 0,
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
        background: theme.colors.background,
        opacity: 0.85,
        color: theme.colors.text,
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(10px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        clipPath: "circle(0% at 100% 0%)",
        visibility: "hidden",
        pointerEvents: "none",
        willChange: "clip-path",
        zIndex: 2000,
      }}
    >
      <div>
        {sidebarLinks.map((link, i) => (
          <div
            key={i}
            onMouseEnter={() => handleEnter(i)}
            onMouseLeave={() => handleLeave(i)}
            onClick={() => navigate(link.link)}
          >
            <h1
              style={{
                fontSize: 32,
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              {link.name}
            </h1>
            <div
              ref={(el) => { lineRefs.current[i] = el; }}
              style={{
                height: 2,
                background: theme.colors.text,
                margin: "10px 0",
                width: "100%",
                transform: "scaleX(0)", // start hidden
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
