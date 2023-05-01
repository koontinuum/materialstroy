import React from "react";
import styles from "./NavBar.module.scss";

function NavBar() {
  return (
    <div>
      <div className="overflow-hidden bg-[#052e16]">
        <div className={styles.dropdown}>
          <button className={styles.dropbtn}>Dropdown</button>
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
