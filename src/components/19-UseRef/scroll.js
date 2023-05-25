import React, { useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import "./scroll.scss";

const Scroll = () => {
  const refAboutUs = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const aboutUsEl = refAboutUs.current;
      const currentScrollPosition = window.scrollY;

      const elScrollPosition = aboutUsEl.offsetTop;
      const elHeight = aboutUsEl.offsetHeight;
      const currentWindowHeight = window.innerHeight;

      const targetScrollPosition =
        elScrollPosition + elHeight - currentWindowHeight;

      if (currentScrollPosition > targetScrollPosition) {
        aboutUsEl.classList.add("active");
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <Container>
        {[...Array(30)].map((item, index) => (
          <p key={index}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            accusantium at velit? Sunt culpa ipsam, velit ex tempora, voluptates
            iusto inventore delectus ipsa id sed labore quae aliquid harum
            molestias.
          </p>
        ))}
        <p className="about-us" ref={refAboutUs}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          accusantium at velit? Sunt culpa ipsam, velit ex tempora, voluptates
          iusto inventore delectus ipsa id sed labore quae aliquid harum
          molestias.
        </p>
        {[...Array(30)].map((item, index) => (
          <p key={index}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            accusantium at velit? Sunt culpa ipsam, velit ex tempora, voluptates
            iusto inventore delectus ipsa id sed labore quae aliquid harum
            molestias.
          </p>
        ))}
      </Container>
    </div>
  );
};

export default Scroll;
