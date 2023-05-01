import './App.css';
import styles from './App.module.scss'
import Header from './components/header/Header';
import NavBar from './components/navBar/NavBar';
import SliderComponent from './components/slider/SliderComponent'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <SliderComponent />
    </div>
  );
}

export default App;
