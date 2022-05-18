import React, { useState, useEffect } from "react";

function ParallaxAnimation(props) {
  const [YOffset, setYOffset] = useState(0);

  function handleScroll() {
    setYOffset(window.pageYOffset);

    return () => window.removeEventListener("scroll", handleScroll);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        transform: `translateY(${YOffset * props.parallaxSpeed}px)`,
        height: `${props.height}`,
        width: "100%",
        backgroundRepeat: "no-repeat",
        background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${props.src})`,
        backgroundSize: "cover",
        zIndex: "-999",
        backgroundAttachment: `${props.backgroundAttachment}`,
      }}
    ></div>
  );
}

export default ParallaxAnimation;
