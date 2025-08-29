import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useLocation } from "react-router-dom";

function Stairs(props) {

    const currentPath = useLocation().pathname
    const stairParentRef = useRef(null)
    const pageRef = useRef(null)

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(stairParentRef.current,{
        display:'block',
        opacity: .5, y: -100, scale: 2, rotate: -180, skewX: 50
    })
    tl.from(".stair", {
      height: 0,
      stagger: {
        amount: -0.5,
      },
      opacity: .5, y: 50, scale: 2, rotate: 100, skewX: 100
    });

    tl.to(".stair", {
      stagger: {
        amount: -0.5,
      },
      opacity: 0, y: -50, scale: 2, rotate: 200, skewX: 200
    });
    tl.to(stairParentRef.current,{
        display:'none',
    })
    tl.to('.stair',{
        y:'0%'
    }
    )
    
  },[currentPath]);

  return (
    <div>
      <div ref={stairParentRef} className="h-screen w-full fixed z-20 top-0">
        <div className="h-full w-full flex fixed">
          <div className="stair h-full w-1/5 bg-stone-50"></div>
          <div className="stair h-full w-1/5 bg-stone-50"></div>
          <div className="stair h-full w-1/5 bg-stone-50"></div>
          <div className="stair h-full w-1/5 bg-stone-50"></div>
          <div className="stair h-full w-1/5 bg-stone-50"></div>
        </div>
      </div>
      <div ref={pageRef}>
        {props.children}
      </div>
    </div>
  );
}

export default Stairs;
