
import { useEffect, useState, useRef } from "react";
import Canvas from "./Canvas"
import data from "./data"
import LocomotiveScroll from 'locomotive-scroll';
import gsap from "gsap";



function App() {
  const growingSpan = useRef(null);
  const headingRef = useRef(null);
  const [showCanvas, setShowCanvas] = useState(false);
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
    locomotiveScroll
  }, );

  useEffect(() => {
    const handleClick = (e) => {
      setShowCanvas((prevShowCanvas) => {
        if (!prevShowCanvas) {
          gsap.set(growingSpan.current, {
            top: e.clientY,
            left: e.clientX,
          });

          gsap.to("body", {
            color: "#000",
            backgroundColor: "#fd2c2a",
            duration: 1.2,
            ease: "power2.inOut",
          });

          gsap.to(growingSpan.current, {
            scale: 1000,
            duration: 2,
            ease: "power2.inOut",
            onComplete: () => {
              gsap.set(growingSpan.current, {
                scale: 0,
                clearProps: "all",
              });

            },
          });
        } else {
          gsap.to("body", {
            color: "#fff",
            backgroundColor: "#000",
            duration: 1.2,
            ease: "power2.inOut",
          });
        }

        return !prevShowCanvas;
      });
    };

    const headingElement = headingRef.current;
    headingElement.addEventListener("click", handleClick);

    // Clean up event listener on unmount
    return () => headingElement.removeEventListener("click", handleClick);
  }, []);



const navLinks = ["Home", "About", "Portfolio", "Contact"];
return (

  <>
    <span ref={growingSpan} className=" block growing rounded-full fixed top-[-20px] left-[-20px] w-5 h-5"></span>
    <div className=" w-full relative min-h-screen font-['Helvetica_Now_Display']  ">
      {showCanvas ? data[0].map((canvasDetails, index) => (<Canvas key={index} details={canvasDetails} />)) : console.log(`Enable Canvas`)}


      <div className="w-full flex justify-around">
        <h3 ref={headingRef} className="text-4xl p-4">thirtySixStudios</h3>
        <nav className=" p-4  ">
          <ul className="flex justify-end space-x-4">
            {navLinks.map((link, index) => (
              <li key={index} className="hover:underline">
                <a href={`#${link.toLowerCase()}`}>{link}</a>
              </li>
            ))}
          </ul>
        </nav>

      </div>

      <div className="text-wrapper relative z-10">
        <div className="textContainer w-full px-[20%]">
          <div className="text w-[50%]">
            <h3 className="text-4xl mt-5  leading-[1.2]">At Thirtysixstudio, we build immersive digital experiences for brands with a purpose.</h3>

          </div>
          <p className="text-md w-[50%]  mt-10 font-large">We’re a boutique production studio focused on design, motion, and creative technology, constantly reimagining what digital craft can do for present-time ads and campaigns .</p>
          <p className="mt-5 text-3xl">Scroll</p>
        </div>

        <div className="w-full">
          <h1 ref={headingRef} className="text-[14rem] font-normal tracking-tight text-center overflow-x-hidden cursor-pointer">thirtySixStudios</h1>

        </div>
      </div>
    </div>

    <div className="w-full  h-screen relative mt-32 px-10">
      {showCanvas ? data[1].map((canvasDetails, index) => (<Canvas key={index} details={canvasDetails} />)) : console.log(`Enable Canvas`)}
      <h1 className="text-4xl">About the brand</h1>
      <p className="text-4xl leading-[1.8] w-[80%] mt-10 font-light tracking-tighter">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia maiores, corrupti quos facere fugit vitae expedita fugiat deleniti ea sed! Vero, ipsa quisquam asperiores eaque odio hic dicta deleniti provident ratione porro deserunt repellendus quidem incidunt sint impedit numquam pariatur ipsum laudantium quas voluptatum eius voluptatem? Error veniam possimus ipsa provident doloremque mollitia, animi maiores facere! Quis porro molestiae temporibus?
      </p>
      <img className="w-[80%] mt-10" src="https://directus.funkhaus.io/assets/b3b5697d-95a0-4af5-ba59-b1d423411b1c?withoutEnlargement=true&fit=outside&width=1400&height=1400" alt="" />
    </div>

    {/* <div className="w-full relative min-h-screen text-white ">
   
    </div>
      <div className="w-full relative  min-h-screen text-white ">
    {data[2].map((canvasDetails, index) => (
         
            <Canvas key={index} details= {canvasDetails} />
        
    ))}
    </div>
      <div className="w-full relative  min-h-screen text-white ">
    {data[3].map((canvasDetails, index) => (
         
            <Canvas key={index} details= {canvasDetails} />
        
    ))}
    </div>
      <div className="w-full relative  min-h-screen text-white ">
    {data[4].map((canvasDetails, index) => (
         
            <Canvas key={index} details= {canvasDetails} />
        
    ))}
    </div>
      <div className="w-full relative  min-h-screen text-white ">
    {data[5].map((canvasDetails, index) => (
         
            <Canvas key={index} details= {canvasDetails} />
        
    ))}
    </div>
      <div className="w-full relative  min-h-screen text-white ">
    {data[6].map((canvasDetails, index) => (
         
            <Canvas key={index} details= {canvasDetails} />
        
    ))}
    </div> */}

  </>
)
}

export default App
