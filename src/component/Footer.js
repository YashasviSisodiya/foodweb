import React from "react";

const Footer = () => {
  return (
    <>
      <section class="footer">
        <div class="share">
          <i class="fas fa-bars" id="menu-bars"></i>
          <a href="#" class="fab fa-facebook-f"></a>
          <a href="#" class="fab fa-twitter"></a>
          <a href="#" class="fab fa-instagram"></a>
          <a href="#" class="fab fa-linkedin"></a>
          <a href="#" class="fab fa-pinterest"></a>
        </div>
        <div class="links">
          <a href="#">home</a>
          <a href="#">about</a>
          <a href="#">menu</a>
          <a href="#">products</a>
          <a href="#">review</a>
          <a href="#">contact</a>
          <a href="#">blogs</a>
        </div>
        <div class="credit">
          created by <span>24/7 khao-piyo</span> | all rights reserved
        </div>
      </section>
    </>
  );
};

export default Footer;