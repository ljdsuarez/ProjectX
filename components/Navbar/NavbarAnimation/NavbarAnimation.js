import React, { useState, useEffect } from "react";

function NavbarAnimation(props) {
  const [Scrolled, setScrolled] = useState(false);

  function handleScroll() {
    if (window.pageYOffset > props.pageYOffset) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={Scrolled ? props.after : props.before}>{props.text}{props.children}</div>
  );
}

export default NavbarAnimation;
