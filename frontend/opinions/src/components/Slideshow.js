import React, { useEffect } from 'react';
import '../styles/Slideshow.css';

const Slideshow = () => {
  useEffect(() => {
    let slideIndex = 0;
    showSlides();

    function showSlides() {
      let i;
      let slides = document.getElementsByClassName('mySlides');
      let dots = document.getElementsByClassName('dot');
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
      }
      slideIndex++;
      if (slideIndex > slides.length) {
        slideIndex = 1;
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '');
      }
      slides[slideIndex - 1].style.display = 'block';
      dots[slideIndex - 1].className += ' active';
      setTimeout(showSlides,4000); // Change image every 2 seconds
    }
  }, []);

  return (
    <>
      <div className="slideshow-container">
        <div className="mySlides fade">
          <div className="numbertext">1 / 3</div>
          <img src="/images/Design sans titre.png" alt="Slide 1" style={{ width: '100%' }} />
          <div className="text">Un support expert à chaque étape, pour trouver vos produits en toute confiance</div>
        </div>

        <div className="mySlides fade">
          <div className="numbertext">2 / 3</div>
          <img src="/images/Design sans titre (1).png" alt="Slide 2" style={{ width: '100%' }} />
          <div className="text">Testés avec soin, approuvés avec confiance : la garantie d'excellence pour vos produits.</div>
        </div>

        <div className="mySlides fade">
          <div className="numbertext">3 / 3</div>
          <img src="/images/Design sans titre (2).png" alt="Slide 3" style={{ width: '100%' }} />
          <div className="text"> votre tranquillité d'esprit est notre priorité.</div>
        </div>
      </div>
      <br />

      <div style={{ textAlign: 'center' }}>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </>
  );
};

export default Slideshow;








