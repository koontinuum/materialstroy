import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeCart } from "../../redux/slices/CartSlice";
import noImage from "../../assets/no_image.png";
const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.reducer.cartItems);
  const priceCard = useSelector((state) => state.reducer.cartTotalAmount);
const cardValue = cart.length
  return (
    <>
      <div className="bg-[#e5e7eb] pl-8 pt-5 cursor-pointer relative">
        <h5 className="text-4xl font-semibold will-change-scroll text-center">
          Корзина
        </h5>
      </div>
      <div>
        <table className=" w-full items-center justify-center gap-4 flex flex-col sm:flex-wrap sm:flex-row p-4 md:justify-center bg-[#e5e7eb] py-[60px]">
          {cart.map((card, i) => (
            <tbody
              className="bg-white even:bg-gray-200 shadow-2xl w-5/6 relative justify-evenly px-1 flex-col sm:flex-col items-center flex* overflow-x-auto "
              key={card.id}
            >
              <tr className="flex flex-col sm:flex-row gap-3 w-/6  h-90 p-6 sm:p-0 md:p-6">
                <td className="self-center text-2xl font-semibold ">{i + 1}</td>
                <td>
                  <img
                    className="object-cover h-52 w-52 mx-auto sm:h-20 sm:w-20"
                    src={card.img ? card.img : noImage}
                    alt={card.tile}
                  />
                </td>
                <td className="shrink grow self-center">{card.title}</td>
                <td className="self-center w-18 text-center">
                  <div className="w-fit">
                    {card.price} {card.value} {card.cartQuantity}
                  </div>
                </td>
                <td className="self-center w-32">
                  <button
                    onClick={() => dispatch(removeCart(card))}
                    className="self-end ease-in-out w-10 h-10 duration-300 bg-red-500   rounded-3xl hover:bg-red-600 cursor-pointer "
                  >
                    -
                  </button>
                  <button
                    onClick={() => dispatch(addToCart(card))}
                    className="self-end ml-2 w-10 h-10 ease-in-out text-sm duration-300 bg-green-500  rounded-3xl  hover:bg-green-600 cursor-pointer"
                  >
                    +
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
        <div className="flex flex-col justify-center bg-[#e5e7eb] justify-center items-center ">
          <h1>Количества видов материала {cardValue} штук</h1>
          <h2 className="text-2xl font-semibold my-4">
            Total price: {priceCard} рублей
          </h2>
          <button className=" ml-2 ease-in-out duration-300 rounded-sm bg-emerald-500 m-5 font-sans w-fit p-5 hover:bg-emerald-600 cursor-pointer bg-transparent text-3xl">
            Оформить покупку
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
