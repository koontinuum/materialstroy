import { Map, Placemark, YMaps } from "@pbe/react-yandex-maps";
import React from "react";
import styles from "./Info.module.scss";

function Info() {
  return (
    <div className={styles.storeInfo}>
      <div className=" w-[50%] flex flex-col gap-8 bg-[#deb887] border border-[#ddd] py-8 items-center opacity-80 max-sm:w-[100%]">
        <h1 className=" text-center text-4xl font-semibold">О МАГАЗИНЕ</h1>
        <h2 className=" text-center text-3xl font-semibold">
          Строительный Магазин
        </h2>
        <p className=" text-center font-medium px-5">
          Добро пожаловать в наш магазин стройматериалов! Здесь вы найдете все
          необходимое для ремонта, строительства или отделки вашего дома,
          квартиры или офиса. Мы предлагаем широкий ассортимент
          высококачественных строительных материалов от ведущих производителей,
          таких как кирпич, цемент, гипсокартон, изоляционные материалы и многое
          другое. Мы также предоставляем инструменты для выполнения различных
          строительных работ, от мелких ремонтных работ до крупномасштабных
          проектов. Наша команда профессионалов готова помочь вам в выборе
          необходимых материалов и инструментов, а также предоставить экспертные
          советы и рекомендации. Мы гарантируем качество нашей продукции и
          приятные цены на все товары в нашем магазине. Приходите к нам и
          создайте свой дом мечты или обновите свое жилье с помощью наших
          строительных материалов и инструментов!
        </p>
        <button className=" font-semibold border-2 border-[#636363] py-3 px-12">
          Подробнее
        </button>
      </div>
      <YMaps>
        <div className=" w-[30%] max-sm:w-full">
          <h1 className=" text-center font-semibold text-3xl max-sm:text-lg">
            Наше местоположение
          </h1>
          <Map
            className=" w-full h-[330px]"
            defaultState={{ center: [55.611914, 37.485882], zoom: 15 }}
          >
            <Placemark geometry={[55.611914, 37.485882]} />
          </Map>
        </div>
      </YMaps>
    </div>
  );
}

export default Info;
