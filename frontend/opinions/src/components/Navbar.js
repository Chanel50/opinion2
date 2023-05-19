import React, { useEffect } from 'react';
import { Navbar } from 'react-bootstrap';
import '../styles/Navbar.css'

const Navigation = () => {
  useEffect(() => {
    const btn = document.querySelector('.mobile-menu-button');
    const menu = document.querySelector('.mobile-menu');

    btn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });
  }, []);
  return (
    <>
      <nav className="bg-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-7">
              <div>
                <a href="#" className="flex items-center py-4 px-2">
                  <img src="\images\opinion.png" alt="Logo" className="h-8 w-8 mr-2 opi" />
                </a>
              </div>
              <div className="hidden md:flex items-center space-x-1">
                <a href="/Home" className="py-4 px-2 text-red-300 border-b-4 border-red-300 font-semibold acl">Accueil</a>
                <a href="/Articles" className="py-4 px-2 text-gray-500 font-semibold hover:text-red-300 transition duration-300">Articles</a>
                <a href="/About" className="py-4 px-2 text-gray-500 font-semibold hover:text-red-300 transition duration-300">Apropos</a>
                <a href="/Contact" className="py-4 px-2 text-gray-500 font-semibold hover:text-red-300 transition duration-300">Contact </a>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-3 ">
              <a href="/Login" className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-red-300 hover:text-white transition duration-300">Connexion</a>
              <a href="/Register" className="py-2 px-2 font-medium text-white bg-red-300 rounded hover:bg-rose-100 transition duration-300">Inscription</a>
            </div>
            <div className="md:hidden flex items-center">
              <button className="outline-none mobile-menu-button">
                <svg className="w-6 h-6 text-gray-500 hover:text-red-300"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="hidden mobile-menu">
          <ul>
            <li className="active"><a href="/Home" className="block text-sm px-2 py-4 text-white bg-red-300 font-semibold acl">Accueil</a></li>
            <li><a href="/Articles" className="block text-sm px-2 py-4 hover:bg-red-300 transition duration-300">Articles</a></li>
            <li><a href="/About" className="block text-sm px-2 py-4 hover:bg-red-300 transition duration-300">Apropos</a></li>
            <li><a href="/Contact" className="block text-sm px-2 py-4 hover:bg-red-300 transition duration-300">Contact </a></li>
          </ul>
        </div>
      </nav>
      
    </>
  );
};

export default Navigation;