import React from "react";
import logo from "./logo.png";
import "./Header.css";

export default function Header() {
  return (
    <div className="Header">
      {/* <p>Header</p> */}
      <img src={logo} alt="Logo" className="image" />
    </div>
  );
}
