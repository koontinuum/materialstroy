import Header from './components/header/Header';
import NavBar from './components/navBar/NavBar';
import SliderComponent from './components/slider/SliderComponent';
import CardProduct from './components/cardProduct/CardProduct'
import Category from './components/category/Category';
import Footer from './components/footer/Footer';
import contacts from './assets/icons8-whatsapp.svg'
import Cart from './components/cart/Cart';
import MainCategory from './components/category/MainCategory';
import Info from './components/info/Info';


function App() {
  return (
    <div className='App'>
      <a href='https://stroymaterial911.ru/' className=' fixed items-center left-[93%] top-[85%] z-[3] flex flex-col max-sm:top-[86%] max-sm:left-[72%] max-md:top-[85%] max-md:left-[84%] max-lg:left-[90%] max-xl:left-[90%]'>
        <img className='w-[62px]' src={contacts} />
        <strong className=' text-xs text-[#4a4a4a] max-sm:text-[14px]'>Консультация!</strong>
      </a>
      {/* <NavBar /> */}
      <Header />
      <SliderComponent />
      <Info />
      <Category />
      <MainCategory />
      <CardProduct />
      <Cart/>
      <Footer />
    </div>
  );
}

export default App;
