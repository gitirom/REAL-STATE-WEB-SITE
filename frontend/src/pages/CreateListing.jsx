import { useState } from 'react';
import { toast } from 'react-toastify';
import Spinner from '../components/Spinner';

const CreateListing = () => {
    const [geoLocationEnabled, setgeoLocationEnabled] = useState(true);        // for geolocation API
    const [Loading, setLoading] = useState(false);
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
        DiscountedPrice: 0,
        latitude: 0,
        longitude: 0,
    });
    const {type, name, bedrooms, bathrooms, parking, DiscountedPrice, furnished, adress, Description, Offers, regularPrice, latitude, longitude} = formData ;
    function onChange(e){
        let boolean = null;
        if(e.target.value === "true"){
            boolean = true;
        }
        
        if(e.target.value === "false"){
            boolean = false; 
        }
        //Files if we have e.target.files so considered as a image 
        if(e.target.files){
            setformData((prevState) => ({
                ...prevState,
                images: e.target.files,
            }));
        }
        //Text/Boolean//Number
        if(!e.target.files){
            setformData((prevState) => ({
                ...prevState,
                [e.target.id]: boolean ?? e.target.value, // if the boolean is not null  
            }));
        }
        
        
        
        
    }
    function onSubmit(e){
        e.preventDefault();                              // when you click at submit button the page can not refresh 
        setLoading(true);
        if(DiscountedPrice >= regularPrice ){            // if the Discounted price bigger then the regular price that not acceptable 
            setLoading(false);
            toast.error("Discounted price needs to be regular price");
        }
        return;
    }
    if(Loading){
        return <Spinner /> ;
    }
    return (
        <main className='max-w-md px-2 mx-auto '>
            <h1 className='text-3xl text-center mt-6 font-bold '>Create a Listing</h1>
            <form onSubmit={onSubmit}>
                <p className='text-lg mt-6 font-semibold' >Sell / Rent </p>
                <div className='flex'>
                    <button type='button' id='type' value="rent" onClick={onChange} className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
                        type === "sell" ? "bg-white text-black" : "bg-slate-600 text-white"                 // these is for the dynamic style when the type change 
                    } `}> 
                        Sell
                    </button>
                    <button type='button' id='type' value="sell" onClick={onChange} className={`ml-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full  ${
                        type === "rent" ? "bg-white text-black" : "bg-slate-600 text-white"                 // these is for the dynamic style when the type change 
                    } `}> 
                        rent
                    </button>
                </div>

                <p className='text-lg mt-6 font-semibold' >Name</p>
                    <input type="text" id='name' value={name} onChange={onChange} placeholder="Name" maxLength="32" minLength="10" required className='w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white  mb-6 ' />
                    <div className="flex space-x-6 mb-6 ">
                        <div >
                            <p className='text-lg font-semibold'> Beds</p>
                            <input type="number" id="bedrooms" value={bedrooms} onChange={onChange} min="1" max="50" required className=' w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white text-center  ' />
                        </div>
                        <div >
                            <p className='text-lg font-semibold'> Baths</p>
                            <input type="number" id="bathrooms" value={bathrooms} onChange={onChange} min="1" max="50" required className=' w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white text-center  ' />
                        </div>
                    </div>
                    <p className='text-lg mt-6 font-semibold' >Parking Spot</p>
                <div className='flex'>
                    <button type='button' id='parking' value={true} onClick={onChange} className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
                        !parking ? "bg-white text-black" : "bg-slate-600 text-white"                 // these is for the dynamic style when the type change 
                    } `}> 
                        Yes
                    </button>
                    <button type='button' id='parking' value={false} onClick={onChange} className={`ml-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full  ${
                        parking ? "bg-white text-black" : "bg-slate-600 text-white"                 
                    } `}> 
                        No
                    </button>
                </div>
                <p className='text-lg mt-6 font-semibold' >Furnished </p>
                <div className='flex'>
                <button type='button' id='furnished' value={true} onClick={onChange} className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
                        !furnished ? "bg-white text-black" : "bg-slate-600 text-white"                 // these is for the dynamic style when the type change 
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
                    <textarea type='button' id='adress' value={adress} onChange={onChange} placeholder="Adress" className={` mb-6 mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full bg-white text-black`}> 
                    
                    </textarea>
                    
                </div>
                {!geoLocationEnabled && (                          //if geolocation false return the two inputs 
                    <div className="flex space-x-6 justify-start">
                        <div className="">
                            <p className='text-lg font-semibold '>Latitude</p>
                            <input type="number" id="latitude" value={latitude} onChange={onChange} required min="-90" max="90" className="w-full px-4 py-2 font bg-white shadow-md rounded border border-gray-600 hover:shadow-xl transition duration-150 ease-in-out text-center text-xl  " />
                        </div>
                        <div className="">
                            <p className='text-lg font-semibold '>Longitude</p>
                            <input type="number" id="Longitude" value={longitude} onChange={onChange} required min="-180" max="180" className="w-full px-4 py-2 font-normal bg-white shadow-md rounded border border-gray-600 hover:shadow-xl transition duration-150 ease-in-out text-center text-xl " />
                        </div>
                    </div>
                )}
                <p className='text-lg mt-6 font-semibold' >Description </p>
                <div className='flex'>
                    <textarea type='button' id='Description' value={Description} onChange={onChange} placeholder="Description" className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full bg-white text-black `}> 
                    
                    </textarea>
                </div>
                <p className='text-lg mt-6 font-semibold' >Offers </p>
                <div className='flex mb-6'>
                <button type='button' id='Offers' value={true} onClick={onChange} className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
                        !Offers ? "bg-white text-black" : "bg-slate-600 text-white"                 // these is for the dynamic style when the type change 
                    } `}> 
                        Yes
                    </button>
                    <button type='button' id='Offers' value={false} onClick={onChange} className={`ml-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full  ${
                        Offers ? "bg-white text-black" : "bg-slate-600 text-white"                 
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
