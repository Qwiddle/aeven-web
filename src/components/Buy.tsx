import React from 'react';

function Buy() {
  return (
    <section className="text-gray-600 body-font">
    <div className="container px-5 pb-12 mx-auto flex flex-wrap">
      <div className="flex flex-wrap w-full">
        <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
          <div className="flex relative pb-12">
            <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-500 inline-flex items-center justify-center text-white relative z-10">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <div className="flex-grow pl-4">
              <h2 className="main-text text-sm text-red-400">Q1 2023</h2>
              <p className="leading-relaxed text-stone-100 sub-text"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatismolestias culpa in</p>
            </div>
          </div>
          <div className="flex relative pb-12">
            <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-500 inline-flex items-center justify-center text-white relative z-10">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <div className="flex-grow pl-4">
              <h2 className="main-text text-sm text-red-400">Q2 2023</h2>
              <p className="leading-relaxed text-stone-100 sub-text"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatismolestias culpa in</p>
            </div>
          </div>
          <div className="flex relative pb-12">
            <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-500 inline-flex items-center justify-center text-white relative z-10">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <circle cx="12" cy="5" r="3"></circle>
                <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
              </svg>
            </div>
            <div className="flex-grow pl-4">
              <h2 className="main-text text-sm text-red-400">Q3 2023</h2>
              <p className="leading-relaxed text-stone-100 sub-text"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatismolestias culpa in</p>
            </div>
          </div>
          <div className="flex relative pb-12">

            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-500 inline-flex items-center justify-center text-white relative z-10">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <div className="flex-grow pl-4">
              <h2 className="main-text text-sm text-red-400">Q4 2023</h2>
              <p className="leading-relaxed text-stone-100 sub-text"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatismolestias culpa in</p>
            </div>
          </div>
        </div>
        <img className="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0" src="https://dummyimage.com/1200x500" alt="step" />
      </div>
    </div>
  </section>
  )
}

export default Buy;