import Header from './components/header/Header';
import SliderComponent from './components/slider/SliderComponent';
import CardProduct from './components/cardProduct/CardProduct'
import Category from './components/category/Category';
import Footer from './components/footer/Footer';
import contacts from './assets/icons8-whatsapp.svg'
import Cart from './components/cart/Cart';
import MainCategory from './components/category/MainCategory';
import Info from './components/info/Info';
import React from 'react';
import NavBar from './components/navBar/NavBar';
import AboutStore from './components/aboutStore/AboutStore';

function App() {
  return (
    <React.Fragment>
      <div className='App'>
        <a href='https://stroymaterial911.ru/' className=' fixed items-center left-[93%] top-[85%] z-[3] flex flex-col sm:left-[85%] max-sm:left-[68%] max-sm:top-[88%] lg:left-[90%] max-md:top-[70%]'>
          <img className='w-[62px]' src={contacts} />
          <strong className=' text-xs text-[#4a4a4a] max-sm:text-[14px]'>Консультация!</strong>
        </a>
        <NavBar />
        {/* <Header /> */}
        <SliderComponent />
        <Category />
        <MainCategory />
        <CardProduct />
        <Cart />
        <AboutStore />
        <Info />
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
