import React from "react";

const Contact = () => {
  return (
    <>
      <section class="contact" id="contact">
        <h1 class="heading">
          <span>contact</span> us
        </h1>
        <div class="row">
          <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14780285.73847409!2d68.56533975!3d25.2548309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f037b30bcc604f%3A0xb694fd84e31ceef9!2sKhao%20Piyo%20Restaurant!5e0!3m2!1sen!2sin!4v1702319006421!5m2!1sen!2sin"
          allowfullscreen=""
          loading="lazy">
          </iframe>


          <form action="">
            <h3>get in touch</h3>
            <div class="inputBox">
              <span class="fas fa-user"></span>
              <input type="text" placeholder="name" />
            </div>
            <div class="inputBox">
              <span class="fas fa-envelope"></span>
              <input type="email" placeholder="email" />
            </div>
            <div class="inputBox">
              <span class="fas fa-phone"></span>
              <input type="number" placeholder="number" />
            </div>
            <input type="submit" value="contact now" class="btn" />
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
