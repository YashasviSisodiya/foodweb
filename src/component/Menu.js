import { Buffer } from "buffer";
import React, { useState, useEffect } from 'react';
import menu1 from "../assets/images/BURGER.jpg";
import { menu } from "../Data";

const Menu = () => {
   const [posts, setPosts] = useState([]);
   useEffect(() => {
    fetch('http://localhost:8008/item/viewall')
         .then((response) => response.json())
         .then((data) => {
            console.log(data);
            setPosts(data);
         })
         .catch((err) => {
            console.log(err.message);
         });
   }, []);

   return (
    <>
      <section className="menu" id="menu">
        <h1 className="heading">
          our <span>menu</span>
        </h1>
    <div className="box-container">
      
       {posts.map((post) => {
          return (


            <div className="box" key={post.itemId}>
              
              <img src={"data:image/jpeg;base64,"+post.image} />
              <h3>{post.itemName}</h3>
              <div className="price">{post.price}</div>
              <a href="#" className="btn">
                add to cart
              </a>
              </div>
          );
       })}
    </div>
      </section>
    </>
    );
};

export default Menu;