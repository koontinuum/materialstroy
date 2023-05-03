import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/slices/CartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.reducer.cartItems);
  const acc = 0
  console.log(cart.reduce((total) =>  total.price + acc, acc));
  console.log(acc)
	
  return (
    <>
      <div className="bg-[#e5e7eb] pl-8 pt-5 cursor-pointer relative">
        <h5 className="text-xl will-change-scroll">
         Корзина
        </h5>
    
      </div>
      <div className="w-full items-center gap-4 flex flex-col sm:flex-wrap sm:flex-row p-4 md:justify-center bg-[#e5e7eb] py-[60px]">
        {cart.map((card) => (
            <div
              className="w-5/6 sm:w-72 relative bg-white shadow-md sm:h-[500px] flex flex-col  "
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

export default Cart;
