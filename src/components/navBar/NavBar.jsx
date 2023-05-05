import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./../../styles/navBar.css";
import Search from "../search/Search";
import logo from "../../assets/logo.png";
import phone from "../../assets/phoneCallIcon.svg";
import delivery from "../../assets/deliveryIcon.svg";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <img src={logo} alt="" />
      <h1 className=" max-xl:hidden text-xl text-green-600 font-semibold">
        Качество и надежность <br /> это наша главная цель!
      </h1>
      <div className=" max-md:hidden">
        <Search />
      </div>
      <nav ref={navRef}>
        <a href="/#">Главная</a>
        <a href="/#">Весь каталог материалов</a>
        <a href="/#">Совершить заказ</a>
        <a href="/#">О нас</a>
        <div className="contacts">
          <b>
            <img className=" w-[44px]" src={phone} alt="" />
            Контакты: +79017029445
          </b>
          <b>
            <img className=" w-[44px]" src={phone} alt="" />
            Контакты: +79160540090
          </b>
        </div>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <div className="flex items-center gap-4 max-xl:hidden">
        <img className="w-12 h-12" src={delivery} alt="" />
        <p className="text-green-600 font-semibold">
          Доставка по Москве <br />и Московской области.
          <br /> Оплата по факту доставки.
        </p>
      </div>
      <div className="flex  items-center gap-2 max-lg:hidden">
        <img className="w-10 h-10" src={phone} alt="call" />
        <div className=" flex flex-col gap-1">
          <strong className="cursor-pointer text-green-600 hover:text-green-900">
            +79017029445
          </strong>
          <strong className="cursor-pointer text-green-600 hover:text-green-900">
            +79017029445
          </strong>
        </div>
      </div>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
