import React from "react";
import logo from "../../assets/logo2dark-bg.png";
import locationIcon from "../../assets/locationIcon.svg";
import phoneCallIcon from "../../assets/phoneCallIcon.svg";
import dileveryIcon from "../../assets/deliveryIcon.svg";

const Footer = () => {
  return (
    <footer className="w-full flex-col flex py-4 px-4 bg-green-950 text-base text-white md:flex-row md:gap-2 lg:gap-4">
      <div className="w-full mb-5 text-sm flex flex-col md:w-1/3 ">
        <img className="w-24  mb-6" src={logo} alt="" />
        <p>
          Торговая сеть «СтройДвор.KG» – перспективная компания Кыргызстана,
          специализирующаяся на поставках и продаже строительных товаров и
          товаров хозяйственного назначения.
        </p>
      </div>
      <div className="w-full mb-5 text-sm flex flex-col md:w-1/3">
        <h4 className="text-2xl mb-2">Наши основные приоритеты</h4>
        <ul>
          <li>Комплексный подход</li>
          <li>
            Одной из главных задач компании является обеспечение своих клиентов
            любым необходимым ассортиментом строительных материалов в одном
            централизованном месте.
          </li>
          <li>Здесь есть все: от гвоздя до целого дома.</li>
          <li>Шаговая доступность</li>
        </ul>
      </div>
      <div className="w-full gap-3 text-sm flex flex-col md:w-1/3 ">
        <div className="flex gap-4 w-1/3">
          <img className="w-6 invert" src={phoneCallIcon} alt="" />
          <div className="flex-col flex">
            <b>+79017029445</b>
            <b>+79160540090</b>
          </div>
        </div>
        <div className="flex gap-4 ">
          <img className="w-6 invert" src={dileveryIcon} alt="" />
          <p className="w-full">
            Доставка по Москве и Московской области. Оплата по факту доставки.
          </p>
        </div>
        <div className="flex gap-4">
          <img className="w-6 invert" src={locationIcon} alt="" />
          <p>Строительный рынок "Мельница" МКАД 41 км наша местоположение.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
