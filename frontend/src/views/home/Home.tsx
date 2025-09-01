import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { useMobile } from "../../hooks/hooks";
import type { RootState } from '../../store/store';                  
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const items = ['photos', 'blogs', 'articles', 'news', 'updates', 'stories'];

const Home: React.FC = () => {
  const columnRefs = useRef<Array<HTMLDivElement | null>>([]);
  const tweensRef = useRef<gsap.core.Tween[]>([]);
  const isMobile = useMobile();
  //const user = useSelector((state: RootState) => state.user);
  const theme = useSelector((state: RootState) => state.theme);
  const navigate = useNavigate();

  useLayoutEffect(() => {
    // Kill any previous tweens
    tweensRef.current.forEach((t) => t?.kill());
    tweensRef.current = [];

    columnRefs.current.forEach((col, i) => {
      if (!col) return;

      const wrapper = col.querySelector<HTMLDivElement>(".scroll-inner");
      if (!wrapper) return;

      const direction = i % 2 === 0 ? -1 : 1;
      const speed = 15;

      const allItems = wrapper.children;
      const itemCount = allItems.length / 2; // original batch
      let singleSetHeight = 0;
      for (let j = 0; j < itemCount; j++) {
        const item = allItems[j] as HTMLElement;
        const rect = item.getBoundingClientRect();
        const style = window.getComputedStyle(item);
        singleSetHeight += rect.height + parseFloat(style.marginBottom || "0");
      }

      // Set initial position for smooth upward/downward movement
      wrapper.style.transform = direction === 1 ? `translateY(-${singleSetHeight}px)` : `translateY(0px)`;

      tweensRef.current[i] = gsap.to(wrapper, {
        y: `+=${direction * singleSetHeight}px`,
        repeat: -1,
        ease: "none",
        duration: singleSetHeight / speed,
        modifiers: {
          y: (y) => {
            const yVal = parseFloat(y);
            const wrappedY = ((yVal % singleSetHeight) + singleSetHeight) % singleSetHeight;
            return `${-wrappedY}px`;
          },
        },
      });
    });

    // Cleanup
    return () => {
      tweensRef.current.forEach((t) => t?.kill());
    };
  }, []);

const handleMouseEnter = (colIndex: number, e: React.MouseEvent<HTMLDivElement>) => {
  const tween = tweensRef.current[colIndex];
  tween?.pause();

  // blur all items except the hovered one
  const allItems = document.querySelectorAll(".scroll-item");
  allItems.forEach((item) => {
    if (item !== e.currentTarget) {
      gsap.to(item, { filter: "blur(4px)", duration: 0.3, ease: "power2.out" });
    }
  });

  // highlight hovered one
  gsap.to(e.currentTarget, {
    backgroundSize: "105%", 
    scale: 1.02, 
    zIndex: 10, 
    filter: "blur(0px)", 
    duration: 0.3, 
    ease: "power2.out" 
  });
};

const handleMouseLeave = (colIndex: number, e: React.MouseEvent<HTMLDivElement>) => {
  const tween = tweensRef.current[colIndex];
  tween?.play();

  // reset all items back to sharp
  const allItems = document.querySelectorAll(".scroll-item");
  allItems.forEach((item) => {
    gsap.to(item, { filter: "blur(0px)", duration: 0.3, ease: "power2.out" });
  });

  // reset hovered one
  gsap.to(e.currentTarget, { 
    backgroundSize: "102%", 
    scale: 1, 
    zIndex: 1, 
    duration: 0.3, 
    ease: "power2.out" 
  });
};

  return (
    <>    
    <div
      style={{
        display: "flex",
        gap: "16px",
        padding: "16px",
        alignItems: "flex-start",
        overflow: "hidden",
        backgroundColor: theme.colors.background,
      }}
    >
      {Array.from({ length: isMobile ? 1 : 3 }).map((_, colIndex) => {
        const colItems = items.map((item, i) => (
          <div
            key={`${colIndex}-${item}`}
            onMouseEnter={(e) => handleMouseEnter(colIndex, e)}
            onMouseLeave={(e) => handleMouseLeave(colIndex, e)}
            onClick={() => navigate(`/${item}`, {viewTransition: true})}
            className="scroll-item"
            style={{
              height: `${150 + Math.random() * 150}px`,
              borderRadius: "12px",
              background: `url(/image${i+1}.jpg) center/cover no-repeat`,
              backgroundSize: "102%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "20px",
              fontWeight: 600,
              marginBottom: "16px",
              cursor: "pointer",
              color: "white",
              textShadow: "0 2px 4px rgba(0,0,0,0.3)",
              boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
              transformOrigin: "center center",
              position: "relative"
            }}
          >
           {item}
          </div>
        ));

        return (
          <div
            key={colIndex}
            ref={(el) => {
            columnRefs.current[colIndex] = el;
            }}
            style={{
              display: "flex",
              flexDirection: "column",
              overflow: "visible",
              flex: 1,
              height: "100%",
            }}
          >
            <div className="scroll-inner" style={{ display: "flex", flexDirection: "column" }}>
              {colItems}
              {colItems} {/* duplicate for seamless scroll */}
            </div>
          </div>
        );
      })}
    </div>
    </>
  );
};

export default Home;

