import React from "react";
import style from "./styles/home.module.css";
import Header from "./sections/Header";

export default function Home() {
  return (
    <div className={style.container}>
      <Header />
    </div>
  );
}
