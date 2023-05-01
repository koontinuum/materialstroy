import React from "react";
import styles from "./NavBar.module.scss";

function NavBar() {
  return (
    <div>
      <div className={styles.navbar}>
        <a href="#home">Home</a>
        <a href="#news">News</a>
        <div className={styles.dropdown}>
          <button className={styles.dropbtn}>
            Dropdown
            <i class="fa fa-caret-down"></i>
          </button>
          <div className={styles.dropdown_content}>
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
