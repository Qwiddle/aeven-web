import React from 'react';

function FAQ() {
  return ( 
    <div className="space-y-4 container mx-auto pb-10 px-5">
      <details className="group [&_summary::-webkit-details-marker]:hidden" open>
        <summary
          className="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-red-400"
        >
          <h2 className="main-text text-gray-900">
            What utility does $LIGHT have?
          </h2>

          <svg
            className="ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </summary>

        <p className="px-4 mt-4 leading-relaxed sub-text text-stone-200">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
          molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
          voluptate dicta quo officiis explicabo consequuntur distinctio corporis
          earum similique!
        </p>
      </details>

      <details className="group [&_summary::-webkit-details-marker]:hidden">
        <summary
          className="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-red-400"
        >
          <h2 className="main-text text-gray-900">
            How do i purchase $LIGHT?
          </h2>

          <svg
            className="ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </summary>

        <p className="px-4 mt-4 leading-relaxed sub-text text-stone-200">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
          molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
          voluptate dicta quo officiis explicabo consequuntur distinctio corporis
          earum similique!
        </p>
      </details>

      <details className="group [&_summary::-webkit-details-marker]:hidden">
        <summary
          className="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-red-400"
        >
          <h2 className="main-text text-gray-900">
            When will I be able to mint my own Lantern?
          </h2>

          <svg
            className="ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </summary>

        <p className="px-4 mt-4 leading-relaxed sub-text text-stone-200">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
          molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
          voluptate dicta quo officiis explicabo consequuntur distinctio corporis
          earum similique!
        </p>
      </details>
    </div>
  )
}

export default FAQ;