import React from "react";
import styles from "./NavBar.module.scss";
import { navIcons } from "../../constants/differentObjects";

function NavBar() {
  return (
    <div>
      <div className="overflow-hidden bg-[#ddd]">
        <div className={styles.dropdown}>
          {navIcons.map((item) => (
            <button className={styles.dropbtn}>
              <img src={item.img} alt="navProduct" />
            </button>
          ))}
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
