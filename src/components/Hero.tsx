import "../assets/css/Hero.css";
import "../assets/css/Hero.css";
import "../assets/css/Typewriter.css";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import TypeWriter from "typewriter-effect";

export const Hero = () => {
  useEffect(() => {
    toast("Welcome to my website!", {
      icon: "👋",
    });
    setTimeout(() => {
      toast("It is still work in progress but feel free to look around", {
        icon: "👀",
      });
    }, 2500);
  }, []);
  return (
    <>
      <section className="hero-section">
        <TypeWriter
          options={{
            cursor: "|",
            delay: "natural",
            deleteSpeed: 50,
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString("Euan Bell")
              .pauseFor(1400)
              .deleteAll()
              .typeString("Full Stack Developer")
              .pauseFor(2000)
              .start();
          }}
          component={"h1"}
        />
        <img
          className="hero-image"
          src="/images/hero.jpg"
          alt="Background Image"
        ></img>
      </section>
    </>
  );
};
