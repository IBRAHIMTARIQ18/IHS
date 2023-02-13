import React, { useState } from "react";
import { ImageSlider } from "../components/imageSlider";
import { useLocation } from "react-router-dom";

export const Detail = () => {

  const location = useLocation();
  const [option, setOption] = useState(location.state?.City);
  return (
    <>
      <section className="text-gray-600 body-font bg-white">
        <div className="container px-5 py-24 mx-auto flex flex-col shadow-2xl  ">
        <div className="rounded-lg  overflow-hidden">
              {/* <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src="https://dummyimage.com/1200x500"
              /> */}
              <span >
              <ImageSlider  />
              </span>
            </div>
          <div className="lg:w-4/6 mx-auto">
           
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-10 h-10"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                    <circle cx={12} cy={7} r={4} />
                  </svg>
                </div>
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                    {option}
                  </h2>
                  <div className="w-12 h-1 bg-green-500 rounded mt-2 mb-4" />
                  <p className="text-base">
                     HOST NAME
                  </p>
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <h1 className="leading-relaxed font-bold text-xl mb-4"> PRICE IN PKR </h1>
                <h1 className="leading-relaxed font-semibold text-xl mb-4"> TITLE OF LISTING </h1>
                <p className="leading-relaxed text-lg mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed officia aspernatur perferendis nisi architecto excepturi 
                  doloribus numquam? Tempora eius dolorum at hic aliquam, eos quod minus vitae quasi 
                  voluptate cum vel repudiandae sed vero fugiat velit beatae! Quasi non eaque quos 
                  dolore id explicabo, asperiores, beatae illo suscipit temporibus minima!
                </p>
                
                <button type="submit" className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none w-full px-4 py-3 leading-6 rounded border-blue-700 bg-green-600 text-white hover:text-white hover:bg-green-700 hover:border-blue-800 focus:ring focus:ring-blue-500 focus:ring-opacity-50 active:bg-blue-700 active:border-blue-700">
                CONTACT
                </button>

                
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
