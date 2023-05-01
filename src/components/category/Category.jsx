import React from "react";
import { CategoryData } from "../../constants/categoryData";

function Category() {
  return (
    <div className="mt-[100px] pb-[100px]">
      <div className="flex justify-between items-center px-[32px]">
        <h3 className="text-start text-4xl text-medium font-serif my-5">
          Категории товаров
        </h3>
        <a className="text-[#2e2e2e] font-bold" href="#">
          ВЕСЬ КАТАЛОГ
        </a>
      </div>
      <div className="w-full items-center gap-1 flex flex-col sm:flex-wrap sm:flex-row p-4 md:justify-center ">
        {CategoryData.map((item) => (
          <div
            className="w-5/6 p-3 bg-white shadow-md sm:h-[340px] sm:w-[300px] flex flex-col hover:shadow-2xl cursor-pointer hover:scale-100"
            key={item.id}
          >
            <div className="object-cover h-5/6 w-5/6 flex self-center">
              <img
                className="w-full h-full self-center "
                src={item.img}
                alt={item.title}
              />
            </div>
            <p className="text-sm w-full md:text-2xl text-center mt-3">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
