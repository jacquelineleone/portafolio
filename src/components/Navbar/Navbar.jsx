import React from "react";
import style from "./styles/navbar.module.css";

export default function Navbar() {
  return (
    <nav className={style.nav}>
      <a href="#about">
        <p>About me</p>
      </a>
      <p>|</p>
      <a href="#proyectos">
        <p>Proyectos</p>
      </a>
      <p>|</p>
      <a href="#contacto">
        <p>Contacto</p>
      </a>
    </nav>
  );
}
