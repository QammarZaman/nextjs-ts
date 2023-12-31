"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { MutableRefObject } from "react";
import { useRef } from "react";

interface HeaderTypes {
  pageTitle: string;
}

const Header = ({ pageTitle }: HeaderTypes) => {
  const navLinks = useRef(null) as unknown as MutableRefObject<HTMLDivElement>;
  // const navLinks:s HTMLElement | null = document.getElementById("navLinks");
  const pathName = usePathname();

  const showMenu = (): void => {
    if (navLinks) {
      navLinks.current.style.right = "0";
    }
  };
  const hideMenu = (): void => {
    if (navLinks) {
      navLinks.current.style.right = "-200px";
    }
  };

  return (
    <section className={pathName !== "/" ? "Sub-header" : "header"}>
      <nav>
        <Link href="/" className="logo">
          Xplore
          <i className="fab fa-staylinked"></i>kill
        </Link>
        <div className="nav-links" id="navLinks" ref={navLinks}>
          {/* Reposnive bar open and close */}
          <i className="fa fa-times" onClick={hideMenu}></i>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <a href="/course">Course</a>
            </li>
            <li>
              <Link href="/about">About </Link>
            </li>
          </ul>
        </div>
        <i className="fa fa-bars" onClick={showMenu}></i>
        {/* Reposnive bar open and close */}
      </nav>

      {pathName === "/" ? (
        <>
          <div className="text_box">
            <h2>GET READY</h2>
            <p id="headtext">TO DISCOVER CAMPUS</p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
              consequuntur corrupti sapiente aut porro
              <br /> esse blanditiis in quae perspiciatis quo.
            </p>
            <a href="#" className="hero_btn">
              Visit Us To Know More
            </a>
          </div>
        </>
      ) : (
        <>{pathName !== "/" && <h1>{pageTitle}</h1>}</>
      )}
    </section>
  );
};

export default Header;
