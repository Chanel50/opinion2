import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <>
  <footer>
  <div className="container3">
    <div className="row">
      <div className="col-md-4 footer-column">
        <ul className="nav flex-column">
          <li className="nav-item">
            <span className="footer-title">Produits</span>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/Notfaund">Produits</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/Notfaund">Plans et tarifs"</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/Notfaund">Questions fréquemment posées</a>
          </li>
        </ul>
      </div>
      <div className="col-md-4 footer-column">
        <ul className="nav flex-column">
          <li className="nav-item">
            <span className="footer-title">Blog</span>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/About">À propos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/Notfaund">Job postings</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/Notfaund">News et articles</a>
          </li>
        </ul>
      </div>
      <div className="col-md-4 footer-column">
        <ul className="nav flex-column">
          <li className="nav-item">
            <span className="footer-title">Contact et support</span>
          </li>
          <li className="nav-item">
            <span className="nav-link"><i className="fas fa-phone"></i>+47 45 80 80 80</span>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/Notfaund"><i className="fas fa-comments"></i>Live chat</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/Contact"><i className="fas fa-envelope"></i>Contact nous</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/Notfaund"><i className="fas fa-star"></i>feedback</a>
          </li>
        </ul>
      </div>
    </div>

    <div className="text-center"><i className="fas fa-ellipsis-h"></i></div>
    
    <div className="row text-center">
      <div className="col-md-4 box">
        <span className="copyright quick-links">Copyright &copy; Opinion <script>document.write(new Date().getFullYear())</script>
        </span>
      </div>
      <div className="col-md-4 box">
        <ul className="list-inline social-buttons">
          <li className="list-inline-item">
            <a href="/Notfaund">
            <i className="fab fa-twitter"></i>
          </a>
          </li>
          <li className="list-inline-item">
            <a href="/Notfaund">
            <i className="fab fa-facebook-f"></i>
          </a>
          </li>
          <li className="list-inline-item">
            <a href="/Notfaund">
            <i className="fab fa-linkedin-in"></i>
          </a>
          </li>
        </ul>
      </div>
      <div className="col-md-4 box">
        <ul className="list-inline quick-links">
          <li className="list-inline-item">
            <a href="/Notfaund">Politique de confidentialité</a>
          </li>
          <li className="list-inline-item">
            <a href="/Notfaund">Conditions d'utilisation</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</footer>
    </>
  );
};

export default Footer;

