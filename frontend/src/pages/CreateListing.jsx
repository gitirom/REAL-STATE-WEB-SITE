import { useState } from 'react';

const CreateListing = () => {
    const [formData, setformData] = useState({
        type: "rent",
        name: "",
        bedrooms: 1,
        bathrooms: 1,
        parking: false,
        furnished: false,
        adress: "",
        Description: "",
        Offers : false,
        regularPrice: 0,
        DiscountedPrice: 0
    });
    const {type, name, bedrooms, bathrooms, parking, DiscountedPrice, furnished, adress, Description, Offers, regularPrice} = formData;
    function onChange(){

    }
    return (
        <main className='max-w-md px-2 mx-auto '>
            <h1 className='text-3xl text-center mt-6 font-bold '>Create a Listing</h1>
            <form>
                <p className='text-lg mt-6 font-semibold' >Sell / Rent </p>
                <div className='flex'>
                    <button type='button' id='type' value="sale" onClick={onChange} className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
                        type === "rent" ? "bg-white text-black" : "bg-slate-600 text-white"                 // these is for the dynamic style when the type change 
                    } `}> 
                        Sell
                    </button>
                    <button type='button' id='type' value="sale" onClick={onChange} className={`ml-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full  ${
                        type === "Sell" ? "bg-white text-black" : "bg-slate-600 text-white"                 // these is for the dynamic style when the type change 
                    } `}> 
                        rent
                    </button>
                </div>

                <p className='text-lg mt-6 font-semibold' >Name</p>
                    <input type="text" id='name' value={name} onChange={onChange} placeholder="Name" maxLength="32" minLength="10" required className='w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white  mb-6 ' />
                    <div className="flex space-x-6 mb-6 ">
                        <div >
                            <p className='text-lg font-semibold'> Beds</p>
                            <input type="number" id="bedrooms" value={bedrooms} onChange={onchange} min="1" max="50" required className=' w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white text-center  ' />
                        </div>
                        <div >
                            <p className='text-lg font-semibold'> Baths</p>
                            <input type="number" id="bathrooms" value={bathrooms} onChange={onchange} min="1" max="50" required className=' w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white text-center  ' />
                        </div>
                    </div>
                    <p className='text-lg mt-6 font-semibold' >Parking Spot</p>
                <div className='flex'>
                    <button type='button' id='parking' value={true} onClick={onChange} className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
                        !parking ? "bg-white text-black" : "bg-slate-600 text-white"                 // these is for the dynamic style when the type change 
                    } `}> 
                        Yes
                    </button>
                    <button type='button' id='parking' value="false" onClick={onChange} className={`ml-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full  ${
                        parking ? "bg-white text-black" : "bg-slate-600 text-white"                 
                    } `}> 
                        No
                    </button>
                </div>
                <p className='text-lg mt-6 font-semibold' >Furnished </p>
                <div className='flex'>
                    <button type='button' id='Furnished' value={true} onClick={onChange} className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
                        !furnished ? "bg-white text-black" : "bg-slate-600 text-white"                  
                    } `}> 
                        Yes
                    </button>
                    <button type='button' id='furnished' value={false} onClick={onChange} className={`ml-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full  ${
                        furnished ? "bg-white text-black" : "bg-slate-600 text-white"                  
                    } `}> 
                        No
                    </button>
                </div>
                <p className='text-lg mt-6 font-semibold' >Adress </p>
                <div className='flex'>
                    <textarea type='button' id='adress' value={adress} onClick={onChange} placeholder="Adress" className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
                        type === "rent" ? "bg-white text-black" : "bg-white text-black"                 
                    } `}> 
                    
                    </textarea>
                    
                </div>
                <p className='text-lg mt-6 font-semibold' >Description </p>
                <div className='flex'>
                    <textarea type='button' id='Description' value={Description} onClick={onChange} placeholder="Description" className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
                        type === "rent" ? "bg-white text-black" : "bg-white text-black"                 
                    } `}> 
                        
                    </textarea>
                </div>
                <p className='text-lg mt-6 font-semibold' >Offers </p>
                <div className='flex mb-6'>
                    <button type='button' id='Offers ' value={true} onClick={onChange} className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
                        !Offers  ? "bg-white text-black" : "bg-slate-600 text-white"                 // these is for the dynamic style when the type change 
                    } `}> 
                        Yes
                    </button>
                    <button type='button' id='Offers ' value={false} onClick={onChange} className={`ml-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full  ${
                        Offers  ? "bg-white text-black" : "bg-slate-600 text-white"                 
                    } `}> 
                        No
                    </button>
                </div>
                <div className="flex items-center mb-6">
                    <div className="">
                        <p className='text-lg font-semibold'>Regular Price</p>
                        <div className="flex w-full justify-center items-center space-x-6 ">
                        <input type="number" id='regularPrice' value={regularPrice} onChange={onChange} min="50" max="4000000" required className='w-full px-4 py-2 text-xl text-gray-700 bg-white border rounded transition duration-150 ease-in-out mb-6 text-center ' />
                        {type === "rent" && (
                            <div className="text-md w-full whitespace-nowrap ">
                                <p className='mb-6 text-lg'>$ / Month</p>
                            </div>
                        ) }
                        </div>
                    
                    </div>
                </div>
                {Offers && (                                // if Offers true we gone show the Discounted price  
                    <div className="flex items-center mb-6">
                    <div className="">
                        <p className='text-lg font-semibold'>Discounted Price</p>
                        <div className="flex w-full justify-center items-center space-x-6 ">
                        <input type="number" id='DiscountedPrice' value={DiscountedPrice} onChange={onChange} min="50" max="4000000" required={Offers} className='w-full px-4 py-2 text-xl text-gray-700 bg-white border rounded transition duration-150 ease-in-out mb-6 text-center ' />
                        {type === "rent" && (
                            <div className="text-md w-full whitespace-nowrap ">
                                <p className='mb-6 text-lg'>$ / Month</p>
                            </div>
                        ) }
                        </div>
                    
                    </div>
                </div>
                )}
                <div className="mb-6 ">
                    <p className='text-lg font-semibold'>Images</p>
                    <p className='text-gray-600'>The first image will be cover (max 6) </p>
                    <input type="file" id='images' onChange={onchange} accept=".jpg, .png, .jpeg" multiple required className='w-full px-3 py-1.5 text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:bg-white '  /> 
                </div>
                <button type='submit' className='mb-6 w-full px-7 py-3 bg-blue-600 text-white font-medium text-sm uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus-bg-blue-700 focus:shadow-lg transition duration-150 ease-in-out  '>Create Listing</button>
            </form>
        </main>
    );
}

export default CreateListing;