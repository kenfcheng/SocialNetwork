import React from "react";
import { signInWithGoogle } from "../../services/auth";
import "./style.css";

export default function signInBtn() {
  const [user, setUser] = useState();

  const signInBtnClick = async () => {
    let user = await signInWithGoogle();
    if (user) setUser(userBySignIn);
  };

  return (
    <div className="signInBtn">
      <p>Sign in with Google</p>
    </div>
  );
}
