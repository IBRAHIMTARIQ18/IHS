import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ListingForm } from "./cretaeListingForm";

export const RegisterForm = () => {

  const [open, setopen] = useState(true)
  const navigate = useNavigate();
  const handleopen = () => {
    if (setopen(!open)) {
      console.log("");
    }
    else {
      navigate("/listingform")
      window.location.reload()

    }
  }
  return (

    <>

      {/* Checkout Section: Simple Box */}
      {open && <div className="bg-white"><div className="container mx-auto shadow-2xl bg-white text-black">
        <div className="container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
          {/* Box */}
          <div className="flex flex-col rounded-xl shadow-sm bg-white overflow-hidden">
            <div className="p-5 lg:p-6 grow w-full md:w-3/4 lg:w-3/5 xl:w-2/5 mx-auto">
              {/* Heading */}
              <div className="text-center mt-5">
                <h1 className="text-2xl uppercase font-bold tracking-wider text-black mb-1">
                  Know Your Customer Form
                </h1>
                <h1 className="text-2xl font-bold mb-1">
                  (KYC)
                </h1>
                <p className="text-sm text-gray-600 font-medium mb-3">
                  Please read the Terms & Conditions before filling out this form
                </p>
                <p className="text-sm text-gray-600 font-medium mb-5">
                      Enter valid information only
                </p>

                <div className="flex items-center my-5">
                  <span aria-hidden="true" className="grow bg-gray-200 rounded h-px" />

                  <span aria-hidden="true" className="grow bg-gray-200 rounded h-px" />
                </div>
              </div>
              {/* END Heading */}
              {/* Checkout Form */}
              <div className="space-y-6">
                <form /*onsubmit="return false;"*/ className="space-y-6">
                  <div className="space-y-6 p-4 rounded border bg-gray-50">
                    <div className="space-y-1">
                      <input className="block border placeholder-gray-400 px-5 py-3 leading-6 w-full rounded border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" type="text" id="fname" name="text" placeholder="FIRST NAME" />
                    </div>
                    <div className="space-y-1">
                      <input className="block border placeholder-gray-400 px-5 py-3 leading-6 w-full rounded border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" type="text" id="lname" name="text" placeholder="LAST NAME" />
                    </div>
                    <div className="space-y-1">
                      <input className="block border placeholder-gray-400 px-5 py-3 leading-6 w-full rounded border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" type="email" id="email" name="email" placeholder="EMAIL" />
                    </div>
                    <div className="space-y-1">
                      <input className="block border placeholder-gray-400 px-5 py-3 leading-6 w-full rounded border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" type="password" id="password" name="password" placeholder="PASSWORD" />
                    </div>
                  </div>

                  <div className="space-y-6 p-4 rounded border bg-gray-50">
                    <div className="space-y-1">
                      <label htmlFor="Address" className="font-medium">ADDRESS:</label>
                      <input className="block border placeholder-gray-400 px-5 py-3 leading-6 w-full rounded border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" type="text" id="address" name="address" />
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="City" className="font-medium">CITY:</label>
                      <input className="block border placeholder-gray-400 px-5 py-3 leading-6 w-full rounded border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" type="text" id="city" name="city" />
                    </div>
                    <div className="space-y-1 grow">
                      <label htmlFor="Contact" className="font-medium">CONTACT NO:</label>
                      <input className="block border placeholder-gray-400 px-5 py-3 leading-6 w-full rounded border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" type="tel" id="contact" name="contact" />
                    </div>
                    <div className="space-y-1 grow">
                      <label htmlFor="CNICNo" className="font-medium">CNIC NO:</label>
                      <input className="block border placeholder-gray-400 px-5 py-3 leading-6 w-full rounded border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" type="tel" id="cnic" name="cnic" />
                    </div>
                    <div className="space-y-1 grow">
                      <label htmlFor="CNICNoF" className="font-medium">CNIC NO (Front):</label>
                      <input className="block border placeholder-gray-400 px-5 py-3 leading-6 w-full rounded border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" type="file" id="cnicfront" name="cnicfront" />
                    </div>
                    <div className="space-y-1 grow">
                      <label htmlFor="CNICNoB" className="font-medium">CNIC NO (Back):</label>
                      <input className="block border placeholder-gray-400 px-5 py-3 leading-6 w-full rounded border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" type="file" id="cnicback" name="cnicback" />
                    </div>
                  </div>

                  <div className="space-y-6 p-4 rounded border bg-gray-50">
                    <div className="space-y-1">
                      <label className="font-medium text-lg block pt-2 pb-7">WITNESS 1:</label>
                      <label htmlFor="W1FN" className="font-medium">FIRST NAME:</label>
                      <input className="block border placeholder-gray-400 px-5 py-3 leading-6 w-full rounded border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" type="text" id="w1fname" name="w1fname" />
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="W1LN" className="font-medium">LAST NAME:</label>
                      <input className="block border placeholder-gray-400 px-5 py-3 leading-6 w-full rounded border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" type="text" id="w1lname" name="w1lname" />
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="W1Address" className="font-medium">ADDRESS:</label>
                      <input className="block border placeholder-gray-400 px-5 py-3 leading-6 w-full rounded border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" type="text" id="w1address" name="w1address" />
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="W1CITY" className="font-medium">CITY:</label>
                      <input className="block border placeholder-gray-400 px-5 py-3 leading-6 w-full rounded border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" type="text" id="w1city" name="w1city" />
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="W1Contact" className="font-medium">CONTACT NO:</label>
                      <input className="block border placeholder-gray-400 px-5 py-3 leading-6 w-full rounded border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" type="tel" id="w1contact" name="w1contact" />
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="W1CNIC" className="font-medium">CNIC NO:</label>
                      <input className="block border placeholder-gray-400 px-5 py-3 leading-6 w-full rounded border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" type="tel" id="w1cnic" name="w1cnic" />
                    </div>
                  </div>

                  <div className="space-y-6 p-4 rounded border bg-gray-50">
                    <div className="space-y-1">
                      <label className="font-medium text-lg block pt-2 pb-7">WITNESS 2:</label>
                      <label htmlFor="W2FN" className="font-medium">FIRST NAME:</label>
                      <input className="block border placeholder-gray-400 px-5 py-3 leading-6 w-full rounded border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" type="text" id="w2fname" name="w2fname" />
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="W2LN" className="font-medium">LAST NAME:</label>
                      <input className="block border placeholder-gray-400 px-5 py-3 leading-6 w-full rounded border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" type="text" id="w2lname" name="w2lname" />
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="W2Address" className="font-medium">ADDRESS:</label>
                      <input className="block border placeholder-gray-400 px-5 py-3 leading-6 w-full rounded border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" type="text" id="w2address" name="w2address" />
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="W2CITY" className="font-medium">CITY:</label>
                      <input className="block border placeholder-gray-400 px-5 py-3 leading-6 w-full rounded border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" type="text" id="w2city" name="w2city" />
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="W2Contact" className="font-medium">CONTACT NO:</label>
                      <input className="block border placeholder-gray-400 px-5 py-3 leading-6 w-full rounded border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" type="tel" id="w2contact" name="w2contact" />
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="W2CNIC" className="font-medium">CNIC NO:</label>
                      <input className="block border placeholder-gray-400 px-5 py-3 leading-6 w-full rounded border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" type="tel" id="w2cnic" name="w2cnic" />
                    </div>
                  </div>
                  <div className="rounded border p-5 text-sm text-gray-600 text-center">
                    <input type="checkbox" /> I agree, on the terms & conditions mentioned in the Terms & Conditions Page, also the information provided above is valid
                  </div>
                  <button onClick={handleopen} type="submit" className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none w-full px-4 py-3 leading-6 rounded border-green-700 bg-green-700 text-white hover:text-white hover:bg-blue-800 hover:border-blue-800 focus:ring focus:ring-blue-500 focus:ring-opacity-50 active:bg-blue-700 active:border-blue-700">
                    <span>Submit</span>
                  </button>
                </form>
              </div>
              {/* Footer */}
            </div>
          </div>
          {/* END Box */}
        </div>
      </div></div>
      }
      {/* END Checkout Section: Simple Box */}


    </>
  )
}


