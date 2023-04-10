import React, { useState, useEffect } from "react";
import styles from "./SlidingComponent.module.css";

const SlidingComponent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const component = document.querySelector(".sliding-component");
      if (component) {
        const componentTop = component.offsetTop;
        const componentBottom = componentTop + component.offsetHeight;
        const windowBottom = window.pageYOffset + window.innerHeight;
        if (windowBottom >= componentTop && window.pageYOffset <= componentBottom) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`${styles.container} ${isVisible ? styles.slideIn : ""}`}>
      <h2 className={styles.title}>Sliding Component</h2>
      <p className={styles.text}>
        This component slides in from the right when it becomes visible on the screen as you
        scroll down.
      </p>
    </div>
  );
};

export default SlidingComponent;
