import Header from './components/header/Header';
import NavBar from './components/navBar/NavBar';
import SliderComponent from './components/slider/SliderComponent';
import CardProduct from './components/cardProduct/CardProduct'
import Category from './components/category/Category';
import Footer from './components/footer/Footer';


function App() {
  return (
    <div className='App'>
      <NavBar />
      <Header />
      <SliderComponent />
      <CardProduct />
      <Category />
      <Footer />
    </div>
  );
}

export default App;
