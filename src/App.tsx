import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppStore from './assets/App Store.svg';
import PlayStore from './assets/Play Store.svg';
import macbook from './assets/macbook.svg';
import ContentBlock from './components/ContentBlock';
import FAQ from './components/FAQ';
import Buy from './components/Buy';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App gap-4">
      <header className="header sticky top-0 bg-black bg-opacity-80 shadow-md flex items-center justify-between px-8 py-02 w-full">
        <div className="w-3/12 text-3xl text-stone-100 main-text whitespace-nowrap">
          LANTERN&nbsp;
          <i className="fas fa-fire text-red-400 fa-sm h-30" />
        </div> 
        <nav className="nav font-semibold text-lg">
          <ul className="flex items-center hidden lg:flex">
            <li className="main-text text-l p-4 border-b-2 border-red-400 border-opacity-0 hover:border-opacity-90 text-white hover:text-white duration-200 cursor-pointer active">
              <a href="">home</a>
            </li>
            <li className="main-text text-l p-4 border-b-2 border-red-400 border-opacity-0 hover:border-opacity-90 text-white hover:text-white duration-200 cursor-pointer">
              <a href="">about</a>
            </li>
            <li className="main-text text-l p-4 border-b-2 border-red-400 border-opacity-0 hover:border-opacity-90 text-white hover:text-white duration-200 cursor-pointer">
              <a href="">roadmap</a>
            </li>
            <li className="main-text text-l p-4 border-b-2 border-red-400 border-opacity-0 hover:border-opacity-90 text-white hover:text-white duration-200 cursor-pointer">
              <a href="">buy</a>
            </li>
          </ul>
        </nav>
        <nav className="nav font-semibold text-lg lg:hidden p-6">
          <div className="lg:hidden">
              <button className="navbar-burger flex items-center text-red-400">
                <svg className="block h-6 w-6 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <title>Mobile menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                </svg>
              </button>
          </div>
        </nav>
      </header>
      <ContentBlock />
      <Buy />
      <FAQ />

      <footer className="text-gray-600 body-font">
        <div className="flex p-2 items-center sm:flex-row flex-col sticky top-0 bg-black bg-opacity-80 shadow-md w-full">
          <a className="flex items-center md:justify-start justify-center gap-2 text-gray-900">
            <span className="ml-3 text-3xl text-stone-200 main-text">LANTERN</span>
            <i className="fas fa-fire text-red-500 fa-xl"></i>
          </a>

          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a className="ml-3 text-stone-200">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 16 16">
                <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"/>
              </svg>
            </a>
            <a className="ml-3 text-stone-200">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-3 lg:mr-3 text-stone-200">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
              </svg>
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
}

export default App;
