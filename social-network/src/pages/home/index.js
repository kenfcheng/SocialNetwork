import React from "react";
import { SignInBtn } from "../../components";
import { Navbar } from "../../containers";
// Style
import "./style.css";

export default function Home() {
  return (
    <div className="home">
      <Navbar />
      <SignInBtn />
    </div>
  );
}
