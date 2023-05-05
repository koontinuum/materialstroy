import React from "react";
import styles from "./Header.module.scss";
import logo from "../../assets/logo.png";

import call from "../../assets/phoneCallIcon.svg";
import delivery from "../../assets/deliveryIcon.svg";
import Search from "../search/Search";

function Header() {
  return (
    <div className={styles.header_wrapper}>
      <img src={logo} alt="logo" />
      <h1>
        Качество и надежность <br /> это наша главная цель!
      </h1>
      <div className={styles.search_container}>
        <Search />
      </div>
      <div className={styles.header_info}>
        <img src={delivery} alt="" />
        <p>
          Доставка по Москве <br />и Московской области.
          <br /> Оплата по факту доставки.
        </p>
      </div>
      <div className={styles.header_contact}>
        <img src={call} alt="call" />
        <div>
          <strong>+79017029445</strong>
          <strong>+79017029445</strong>
        </div>
      </div>
    </div>
  );
}

export default Header;
