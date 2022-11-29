import React from "react";
import "./Home.css";
import imgHomeShop from "./shopimg.jpg";

export default function Home() {
  return (
    <div className="global-container">
      <h1 className="home-title">
        Bienvenue au <span>Shop</span>
      </h1>
      <p>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here'.
      </p>
      <img src={imgHomeShop} alt="accueil shop" />
    </div>
  );
}
