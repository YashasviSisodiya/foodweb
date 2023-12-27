import logo from './logo.svg';
import './assets/css/style.css';
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import About from "./component/About";
import Menu from "./component/Menu";
import Products from "./component/Products";
import Review from "./component/Review";
import Contact from "./component/Contact";
import Footer from "./component/Footer";

const App = () =>{
  return (<>
  <Navbar />
  <Home />
   <About />
   <Menu />
   <Products />
   <Review />
   <Contact />
   <Footer />
   {/* <Cart /> */}
  </>
  );

};

export default App;
