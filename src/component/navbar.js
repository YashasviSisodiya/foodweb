import React,{ useRef } from "react";
import '@fortawesome/fontawesome-free/css/all.css';
import Logo from "../assets/images/logo.png";
import { cart } from "../Data";



const Navbar= () =>{
    const NavbarRef = useRef();
    const SearchRef = useRef();
    const CartRef = useRef();
    const navbarHandler = () => {
        NavbarRef.current.classList.toggle("active");
        SearchRef.current.classList.remove("active");
        CartRef.current.classList.remove("active");
    };

    const searchHandler = () => {
        SearchRef.current.classList.toggle("active");
        NavbarRef.current.classList.remove("active");
        CartRef.current.classList.remove("active");
      };
    const cartHandler = () => {
        console.log('cartHandler called');
          console.log('CartRef:', CartRef);
          console.log('SearchRef:', SearchRef);
          console.log('NavbarRef:', NavbarRef);

        CartRef.current.classList.toggle("active");
        SearchRef.current.classList.remove("active");
        NavbarRef.current.classList.remove("active");
    };

  return (
    <>
      <header className="header">
        <a href="#" className="logo">
          <img src={Logo} alt="" />
        </a>
        <nav className="navbar" ref={NavbarRef}>
          <a href="#home">home</a>
          <a href="#about">about</a>
          <a href="#menu">menu</a>
          <a href="#products">products</a>
          <a href="#review">review</a>
          <a href="#contact">contact</a>
          {/* <a href="#cart">cart</a> */}
        </nav>
        <div className="icons">
          <div
            className="fas fa-search"
            id="search-btn"
            onClick={searchHandler}
          ></div>
          <div
            className="fas fa-shopping-cart"
            id="cart-btn"
            onClick={cartHandler}
          ></div>
          <div
            className="fas fa-bars"
            id="menu-btn"
            onClick={navbarHandler}
          ></div>
        </div>
        <div className="search-form" ref={SearchRef}>
          <input type="search" id="search-box" placeholder="search here..." />
          <label htmlFor="search-box" className="fas fa-search"></label>
        </div>
        <div className="cart-items-container" ref={CartRef}>
          {
          <h3>cart</h3>}
          <a href="#" className="btn">
            checkout now
          </a>
        </div>
      </header>
    </>
  );
};


export default Navbar;