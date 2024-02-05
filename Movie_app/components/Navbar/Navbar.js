import React, { useEffect, useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./Navbar.css";

function Navbar() {
  const [dark, setDark] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      setDark(true);
    } else {
      setDark(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);

    return () => {
      //cleanup

      window.removeEventListener("scroll", transitionNavBar);
    };
  }, []);

  return (
    <div className={`navbar_container ${dark && "navbar_dark"}`}>
      <img
        className="navbar_logo"
        src="data:image/png;base64,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"
        alt="Logo"
      />
      <h4 className="user_name">Hi user</h4>
      <p className="navbar_icon">
        {" "}
        <AccountCircleIcon />
      </p>
    </div>
  );
}

export default Navbar;