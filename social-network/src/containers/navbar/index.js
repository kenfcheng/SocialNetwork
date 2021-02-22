import React from "react";
import { SignInBtn } from "../../components";
import "./style.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <p>SocialNetworkName</p>
      <SignInBtn />
    </div>
  );
}
