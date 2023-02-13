import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const ListingForm = () => {
    const [open, setopen] = useState(true)
    const [City, setCity] = useState('')








    const navigate = useNavigate();
    const handleSearch = () => {
        navigate("/detail", { state: { City } });
    };

    const handleopen = () => {
        if (setopen(!open)) {
            console.log("");
        }
        else {

            navigate("/detail");
            setTimeout()

        }
    }
    return (

        <>

            {/* Checkout Section: Simple Box */}
            <div className="bg-white"><div className="container mx-auto shadow-2xl bg-white text-black">
                <div className="container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
                    {/* Box */}
                    <div className="flex flex-col rounded-xl shadow-sm bg-white overflow-hidden">
                        <div className="p-5 lg:p-6 grow w-full md:w-3/4 lg:w-3/5 xl:w-2/5 mx-auto">
                            {/* Heading */}
                            <div className="text-center mt-5">
                                <h1 className="text-2xl uppercase font-bold tracking-wider text-black mb-1">
                                    BECOME A HOST FORM
                                </h1>
                                <h1 className="text-2xl font-bold mb-1">

                                </h1>
                                <p className="text-sm text-gray-600 font-medium mb-5">
                                    Fill up all the fields in order to create your listing
                                </p>

                                <div className="flex items-center my-5">
                                    <span aria-hidden="true" className="grow bg-gray-200 rounded h-px" />

                                    <span aria-hidden="true" className="grow bg-gray-200 rounded h-px" />
                                </div>
                            </div>
                            {/* END Heading */}
                            {/* Checkout Form */}
                            <div className="space-y-6">
                                <form onsubmit="return false;" className="space-y-6">
                                    <div className="space-y-6 p-4 rounded border bg-gray-50">
                                        <div className="space-y-1">
                                            <label htmlFor="Pic/vid" className="font-medium">PICTURE/VIDEO:</label>
                                            <input className="block border placeholder-gray-400 px-5 py-3 leading-6 w-full rounded border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" type="file" id="picfiles" name="picfiles" multiple="multiple" />
                                        </div>
                                        {/* <div className="space-y-1">
                                            <label htmlFor="City" className="font-medium">CITY:</label>
                                            <input onChange={(e) => setCity(e.target.value)} className="block border placeholder-gray-400 px-5 py-3 leading-6 w-full rounded border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" type="text" id="city" name="city" />
                                        </div> */}
                            
                                        <div className="space-y-1 grow">
                                            <label htmlFor="ListingTitle" className="font-medium">TITLE OF LISTING:</label>
                                            <input className="block border placeholder-gray-400 px-5 py-3 leading-6 w-full rounded border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" type="text" id="title" name="title" />
                                        </div>
                                        <div className="space-y-1 grow">
                                            <label htmlFor="Description" className="font-medium">DESCRIPTION:</label>
                                            <textarea className="block border placeholder-gray-400 px-5 py-3 leading-6 h-44 w-full rounded border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" type="text" id="description" name="description" />
                                        </div>
                                        <div className="space-y-1 grow">
                                            <label htmlFor="PropertyOwnerName" className="font-medium">PROPERTY OWNER NAME:</label>
                                            <input className="block border placeholder-gray-400 px-5 py-3 leading-6 w-full rounded border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" type="text" id="propertyownername" name="propertyownername" />
                                        </div>
                                        <div className="space-y-1 grow">
                                            <label htmlFor="ContactNo" className="font-medium">CONTACT NO:</label>
                                            <input className="block border placeholder-gray-400 px-5 py-3 leading-6 w-full rounded border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" type="text" id="contactno" name="contactno" />
                                        </div>
                                        <div className="grid grid-cols-2 gap-5">
                                            <div className="space-y-1 grow">
                                                <label htmlFor="Dimensions" className="font-medium">DIMENSION (Length):</label>
                                                <input className="block border placeholder-gray-400 px-5 py-3 leading-6 w-full rounded border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" type="number" id="dimensionlength" name="dimensionlength" placeholder="Length in Foot" />
                                            </div>
                                            <div className="space-y-1 grow">
                                                <label htmlFor="Dimensions" className="font-medium">DIMENSION (Width):</label>
                                                <input className="block border placeholder-gray-400 px-5 py-3 leading-6 w-full rounded border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" type="number" id="dimensionwidth" name="dimensionwidth" placeholder="Width in Foot" />
                                            </div>
                                        </div>
                                        <div className="space-y-1 grow">
                                            <label htmlFor="Price" className="font-medium">PRICE (PKR):</label>
                                            <input className="block border placeholder-gray-400 px-5 py-3 leading-6 w-full rounded border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" type="tel" id="price" name="price" placeholder="Eg. 25000" />
                                        </div>
                                        <div className="space-y-1 grow">
                                            <label htmlFor="Location" className="font-medium">LOCATION ADDRESS:</label>
                                            <input className="block border placeholder-gray-400 px-5 py-3 leading-6 w-full rounded border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" type="text" id="location" name="location" />
                                        </div>
                                        <div className="space-y-1 grow">
                                            <label htmlFor="City" className="font-medium">CITY:</label>
                                            <input className="block border placeholder-gray-400 px-5 py-3 leading-6 w-full rounded border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" type="text" id="city" name="city" />
                                        </div>
                                        <div className="space-y-1 grow">
                                            <label htmlFor="Category" className="font-medium">CATEGORY: <select
                                                className=" border mt-2   border-green-500 p-1 rounded"
                                                //   onClick={(ev) => setCar(ev.target.value)}
                                                name=""
                                                id=""
                                            >
                                                <option value="Select">
                                                    Select
                                                </option>
                                                <option value="24/7 Available Storage">
                                                    24/7 Available Storage
                                                </option>
                                                <option value="Business Stock Storage">
                                                    Business Stock Storage
                                                </option>
                                                <option value="Vehicle Storage">
                                                    Vehicle Storage
                                                </option>
                                                <option value="Cold Storage">
                                                    Cold Storage
                                                </option>
                                                <option value="Warehouse Storage">
                                                    Warehouse Storage
                                                </option>
                                            </select>
                                            </label>
                                        </div>
                                        <div className="space-y-1 grow">
                                            <label htmlFor="Category" className="font-medium">INDOOR/OUT DOOR: <select
                                                className=" border mt-2   border-green-500 p-1 rounded"
                                                //   onClick={(ev) => setCar(ev.target.value)}
                                                name=""
                                                id=""
                                            >
                                                <option value="Select">
                                                    Select
                                                </option>
                                                <option value="Indoor">
                                                    Indoor
                                                </option>
                                                <option value="Outdoor">
                                                    Outdoor
                                                </option>
                                            </select>
                                            </label>
                                        </div>
                                        <div className="space-y-1 grow">
                                        <label htmlFor="Category" className="font-medium">ACCESSIBILITY: <select
                                                className=" border mt-2   border-green-500 p-1 rounded"
                                                //   onClick={(ev) => setCar(ev.target.value)}
                                                name=""
                                                id=""
                                            >
                                                <option value="Select">
                                                    Select
                                                </option>
                                                <option value="Daily">
                                                    Daily
                                                </option>
                                                <option value="Weekly">
                                                    Weekly
                                                </option>
                                                <option value="Monthly">
                                                    Monthly
                                                </option>
                                            </select>
                                            </label>
                                        </div>
                                        <div className="space-y-1 grow">
                                            <label htmlFor="Category" className="font-medium">VISTING HOURS: <select
                                                className=" border mt-2   border-green-500 p-1 rounded"
                                                //   onClick={(ev) => setCar(ev.target.value)}
                                                name=""
                                                id=""
                                            >
                                                <option value="Select">
                                                    Select
                                                </option>
                                                <option value="DayTime(12PM to 6PM)">
                                                 DayTime (12PM to 6PM)
                                                </option>
                                                <option value="NightTime(6PM to 12PM)">
                                                    NightTime (6PM to 12AM)
                                                </option>
                                                <option value="24/7">
                                                    24 Hours
                                                </option>
                                            </select>
                                            </label>
                                        </div>
                                        <div className="space-y-1 grow">
                                            <label htmlFor="FloorLevel" className="font-medium">FLOOR LEVEL:</label>
                                            <input className="block border placeholder-gray-400 px-5 py-3 leading-6 w-full rounded border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" type="number" id="floorlevel" name="floorlevel" />
                                        </div>
                                        <div className="space-y-1 grow">
                                            <label htmlFor="Stairs" className="font-medium">STAIRS ( YES / NO ):</label>
                                            <input className="block border placeholder-gray-400 px-5 py-3 leading-6 w-full rounded border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" type="text" id="stairs" name="stairs" />
                                        </div>
                                        <div className="space-y-1 grow">
                                            <label htmlFor="Lift" className="font-medium">LIFT AVAILABLE ( YES / NO ):</label>
                                            <input className="block border placeholder-gray-400 px-5 py-3 leading-6 w-full rounded border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" type="text" id="lift" name="lift" />
                                        </div>
                                        <div className="space-y-1 grow">
                                            <label htmlFor="PrivateEntrance" className="font-medium">PRIVATE ENTRANCE ( YES / NO ):</label>
                                            <input className="block border placeholder-gray-400 px-5 py-3 leading-6 w-full rounded border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" type="text" id="privateentrance" name="privateentrance" />
                                        </div>
                                    </div>
                                    <button onClick={handleopen} type="submit" className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none w-full px-4 py-3 leading-6 rounded border-green-700 bg-green-700 text-white hover:text-white hover:bg-blue-800 hover:border-blue-800 focus:ring focus:ring-blue-500 focus:ring-opacity-50 active:bg-blue-700 active:border-blue-700">
                                        <span>Submit</span>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                    {/* END Box */}
                </div>
            </div></div>
        </>
    )
}


