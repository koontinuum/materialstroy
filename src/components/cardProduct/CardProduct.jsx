import { CardData } from "../../constants/CardData";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addToCart } from "../../redux/slices/CartSlice";

const CardProduct = () => {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.search.value);
  const cart = useSelector((state) => state.reducer);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const catagory = [
    " алфавиту с начала",
    " алфавиту с конца",
    " цена возрастанию",
    " цена убывания",
  ];
  const onClickSort = (index) => {
    setSelected(index);
    index === 0
      ? CardData.sort((x, y) => (x.title > y.title ? 1 : -1))
      : index === 1
      ? CardData.sort((x, y) => (y.title > x.title ? 1 : -1))
      : index === 2
      ? CardData.sort((x, y) => x.price - y.price)
      : CardData.sort((x, y) => y.price - x.price);
  };
  const popup = () => {
    setOpen(!open);
  };
  return (
    <>
      <div className="bg-[#e5e7eb] pl-8 pt-5 cursor-pointer relative">
        <h5 className="text-xl will-change-scroll" onClick={() => popup()}>
          Сортировка по
          {catagory[selected]}
        </h5>
        <div className="bg-slate-100  absolute top-14 z-10 left-8">
          {open &&
            catagory.map((item, i) => (
              <p
                key={i}
                onClick={() => {
                  onClickSort(i);
                  popup();
                }}
                className={selected === i ? "text-blue-500 m-4" : " p-4"}
              >
                {item}
              </p>
            ))}{" "}
        </div>
      </div>
      <div className="w-full items-center gap-4 flex flex-col sm:flex-wrap sm:flex-row p-4 md:justify-center bg-[#e5e7eb] py-[60px]">
        {CardData.filter((item) => {
          if (item.title.toLocaleLowerCase().includes(search)) {
            return true;
          }
          return false;
        }).map((card) => (
          <div
            className="w-[100%] sm:w-72 relative bg-white shadow-md sm:h-[500px] flex flex-col  "
            key={card.id}
          >
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
              <button className="self-end ease-in-out duration-300 bg-slate-100 w-fit p-2 hover:bg-slate-300 cursor-pointer ">
                Подробнее
              </button>
              <button
                onClick={() => dispatch(addToCart(card))}
                className="self-end ease-in-out duration-300 bg-slate-100 w-fit p-2 hover:bg-slate-300 cursor-pointer"
              >
                В корзину
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CardProduct;
