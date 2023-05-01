import React, { useState } from "react";
import { CardData } from "../../constants/CardData";
import cn from "classnames";

const CardProduct = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="w-full items-center gap-4 flex flex-col sm:flex-wrap sm:flex-row p-4 md:justify-center bg-[#e5e7eb] py-[60px]">
      {CardData.map((card) => (
        <div
          className="w-5/6 sm:w-72 relative bg-white shadow-md sm:h-[500px] flex flex-col  "
          key={card.id}
        >
          <div
            className={`absolute bg-stone-300 p-1  font-serif transition-[2000]  ${
              show ? "visible left-0 animate-bounce" : "hidden left-[100%]"
            }`}
            //className={cn(
            //  "absolute bg-stone-300 p-1  font-serif left-[100%] hidden",
            //  {
            //    "visible!impotant": show,
            //    "left-0!impotant": show,
            //  }
            //)}
          >
            <p>{card.discription}</p>
          </div>
          <img
            className="object-cover h-3/6 w-full border-b-2 "
            src={card.img}
            alt=""
          />
          <div className="p-3 grow">
            <h2 className="text-xl md:text-2xl">{card.title}</h2>
          </div>
          <div className="mr-3 mb-5">
            <p className=" border w-fit  float-right font-medium border-dashed p-2  ">
              {card.price} {card.value}
            </p>
          </div>
          <div className="flex   justify-between  mx-3 mb-5 ">
            <button
              onClick={() => setTimeout(() => setShow(!show), 1000)}
              className="self-end ease-in-out duration-300 bg-slate-100 w-fit p-2 hover:bg-slate-300 cursor-pointer "
            >
              Подробнее
            </button>
            <button className="self-end ease-in-out duration-300 bg-slate-100 w-fit p-2 hover:bg-slate-300 cursor-pointer">
              В корзину
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardProduct;
