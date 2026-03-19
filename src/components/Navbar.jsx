import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLenis } from "lenis/react";

gsap.registerPlugin(ScrollTrigger);

const Navbar = ({ navOpen }) => {
  const lastActiveLink = useRef();
  const activeBox = useRef();
  const linksRef = useRef([]);
  const isClickScrolling = useRef(false);

  const lenis = useLenis();

  // ===== INIT ACTIVE BOX =====
  const initActiveBox = () => {
    if (!lastActiveLink.current) return;

    const el = lastActiveLink.current;

    activeBox.current.style.top = el.offsetTop + "px";
    activeBox.current.style.left = el.offsetLeft + "px";
    activeBox.current.style.width = el.offsetWidth + "px";
    activeBox.current.style.height = el.offsetHeight + "px";
  };

  // ===== SET ACTIVE =====
  const setActive = (el) => {
    if (!el || !lastActiveLink.current) return;

    lastActiveLink.current.classList.remove("active");
    el.classList.add("active");
    lastActiveLink.current = el;

    activeBox.current.style.top = el.offsetTop + "px";
    activeBox.current.style.left = el.offsetLeft + "px";
    activeBox.current.style.width = el.offsetWidth + "px";
    activeBox.current.style.height = el.offsetHeight + "px";
  };

  // ===== CLICK NAV =====
  const handleClick = (e, link) => {
    e.preventDefault();

    if (!lenis) return;

    isClickScrolling.current = true;

    setActive(e.currentTarget);

    lenis.scrollTo(link, {
      duration: 1.2,
      offset: 40,
    });
  };

  // ===== SYNC LENIS =====
  useEffect(() => {
    if (!lenis) return;

    const onScroll = () => {
      isClickScrolling.current = false;
    };

    lenis.on("scroll", onScroll);

    return () => {
      lenis.off("scroll", onScroll);
    };
  }, [lenis]);

  // ===== SCROLL TRIGGER =====
  useEffect(() => {
    initActiveBox();

    const sections = ["#home", "#about", "#skills", "#projects", "#contact"];

    const triggers = sections.map((id, index) => {
      const section = document.querySelector(id);
      const link = linksRef.current[index];

      if (!section || !link) return null;

      return ScrollTrigger.create({
        trigger: section,
        start: "top center",
        end: "bottom center",

        onEnter: () => {
          if (!isClickScrolling.current) setActive(link);
        },
        onEnterBack: () => {
          if (!isClickScrolling.current) setActive(link);
        },
      });
    });

    window.addEventListener("resize", initActiveBox);

    return () => {
      window.removeEventListener("resize", initActiveBox);
      triggers.forEach((t) => t && t.kill());
    };
  }, []);

  // ===== NAV ITEMS =====
  const navItems = [
    { label: "Home", link: "#home" },
    { label: "About", link: "#about" },
    { label: "Skills", link: "#skills" },
    { label: "Projects", link: "#projects" },
    { label: "Contact", link: "#contact", className: "md:hidden" },
  ];

  return (
    <nav className={"navbar " + (navOpen ? "active" : "")}>
      {navItems.map((item, index) => (
        <a
          key={index}
          href={item.link}
          className={`nav-link ${index === 0 ? "active" : ""} ${
            item.className || ""
          }`}
          ref={(el) => {
            linksRef.current[index] = el;
            if (index === 0) lastActiveLink.current = el;
          }}
          onClick={(e) => handleClick(e, item.link)}
        >
          {item.label}
        </a>
      ))}

      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
};

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
};

export default Navbar;
