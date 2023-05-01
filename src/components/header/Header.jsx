import React from "react";
import styles from "./Header.module.scss";
import logo from "../../assets/logo.png";
import search from "../../assets/searchImg.svg";
import call from "../../assets/phoneCallIcon.svg";
import delivery from "../../assets/deliveryIcon.svg";

function Header() {
  return (
    <div className={styles.header_wrapper}>
      <img src={logo} alt="logo" />
      <h1>
        Качество и надежность <br /> это наша главная цель!
      </h1>
      <div className={styles.search_container}>
        <input type="search" placeholder="Поиск продукции..." />
        <button>
          <img src={search} alt="" />
        </button>
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
