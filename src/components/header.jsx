import React, { useState } from "react";
import { Outlet,Link } from "react-router-dom";

const Header =()=>{
  const [open,setopen] = useState(true)
  const handleopen = () => {  
      (setopen(!open))
  }

    return(
        <>
         <header className="text-white bg-green-500 body-font ">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
  <Link to='/'>
    <a className="flex title-font font-medium items-center  text-black mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-10 h-10 text-black p-2 bg-green-500  rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
      <span className="ml-3 text-4xl">I H S</span>
    </a></Link>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      
      <a className="mr-5 border py-1 px-3 font-bold rounded text-xl hover:text-gray-900"><Link to='/signin'> Login</Link></a>
      <a className="mr-5 border py-1 px-3 font-bold rounded text-xl hover:text-gray-900"><Link to='/register'>Register</Link></a>
    </nav>
   
  </div>
  <div className="flex flex-row pb-7  justify-start container mx-auto justify-items-center gap-3 text-lg ">
              <div className="flex flex-row gap-1 justify-items-around px-2 py-1 border rounded border-white text-white font-bold ml-4">
                <span><Link to={'/'} >HOME</Link></span>
              </div>
              {/* <div className="flex flex-row gap-1 justify-items-around px-2 py-1  text-white  ">
                <span> <Link to={'listingform'}>Listing Form</Link></span>
              </div>
              <div className="flex flex-row gap-1 justify-items-around px-2 py-1  text-white  ">
                <span onClick={handleopen}> <Link to={'register'}>Register</Link></span>
              </div> 
              <div className="flex flex-row gap-1 justify-items-around px-2 py-1  text-white  ">
                <span> <Link to={'detail'}>Detail</Link></span>
              </div>*/}
              
            </div>
  <Outlet />
</header>

        </>
    )
}
export default Header;