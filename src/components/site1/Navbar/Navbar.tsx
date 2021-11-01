import React from "react";
import Logo from "../svg/Logo";
import MenuIcon from "../svg/MenuIcon";
import styles from "./navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Logo className={styles.logo} />
      <div className={styles.links}>
        <a href="#" className="hire">
          We&apos;re hiring
        </a>
        <button>
          <MenuIcon /> Menu
        </button>
      </div>
    </div>
  );
};

export default Navbar;
