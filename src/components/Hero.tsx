import "../assets/css/Hero.css";
import { useTypeWriter } from "../hooks/useTypeWriter";
import "../assets/css/Hero.css";
import { RefObject, useEffect } from "react";
import { toast } from "react-hot-toast";

export const Hero = () => {
  const [headingText, headingRef] = useTypeWriter("Euan Bell", 1400, 1000);
  const [subHeadingText, subHeadingRef] = useTypeWriter(
    "Full Stack Developer",
    2000,
    1000
  );
  useEffect(() => {
    toast("Welcome to my website!", {
      icon: "👋",
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
        fontSize: "1.5rem",
      },
    });
    setTimeout(() => {
      toast("It is still work in progress but feel free to look around", {
        icon: "👀",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
          fontSize: "1.5rem",
        },
      });
    }, 2500);
  }, []);
  return (
    <>
      <section className="hero-section">
        <h1 ref={headingRef as RefObject<HTMLHeadingElement>}>{headingText}</h1>
        <h2 ref={subHeadingRef as RefObject<HTMLHeadingElement>}>
          {subHeadingText}
        </h2>
        <img
          className="hero-image"
          src="/images/hero.jpg"
          alt="Background Image"
        ></img>
      </section>
    </>
  );
};
