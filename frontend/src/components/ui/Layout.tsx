import React, { useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import gsap from "gsap";

const Layout = () => {
  const location = useLocation();
  const nodeRef = useRef<HTMLDivElement>(null);

  return (

      <SwitchTransition mode="out-in">
        <CSSTransition
            key={location.pathname}
            nodeRef={nodeRef}
            timeout={600}
            classNames="page"
            appear
            onEnter={() => {
                if (nodeRef.current) {
                // ensure it's invisible before paint
                gsap.set(nodeRef.current, { autoAlpha: 0, x: 100 });
                }
            }}
            onEntering={() => {
                if (nodeRef.current) {
                gsap.to(nodeRef.current, {
                    autoAlpha: 1,
                    x: 0,
                    duration: 0.6,
                    ease: "power3.out",
                });
                }
            }}
          onExit={() => {
            if (nodeRef.current) {
              gsap.to(nodeRef.current, {
                autoAlpha: 0,
                x: -100,
                duration: 0.6,
                ease: "power3.in",
              });
            }
          }}
          unmountOnExit
        >
          <div
            ref={nodeRef}
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          >
            <Outlet />
          </div>
        </CSSTransition>
      </SwitchTransition>

  );
};

export default Layout;
