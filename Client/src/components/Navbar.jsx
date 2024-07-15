import React, { useState } from 'react'
import logo from "../assets/logo.svg"
import wish from "../assets/wish.svg"
import cart from "../assets/cart.svg"
import { Link } from 'react-router-dom'
import serach from "../assets/serach.svg"

const Navbar = () => {
  const [page,setPage]=useState(false);
  return (
    <>
    <nav>
    <div className='flex justify-around pt-10 mr-28 ml-28'>
    <div>
        <img src={logo} alt="" />
      </div>
      <div className='flex gap-10'>
        <Link to={"/"} 
              onClick={()=>setPage(!page)}
        
        >Home</Link>
        <Link 
        to={"/about"} 
        onClick={()=>setPage(!page)}
        
        >About</Link>
        <Link
        to={"/contact"} 
        onClick={()=>setPage(!page)}
        >Contact</Link>
        <Link
        to={"/signup"} 
        onClick={()=>setPage(!page)}>SignUp</Link>
      </div>
      <div className='flex items-center border rounded-lg overflow-hidden '>
        <input className='py-2 px-4 bg-transparent flex-grow focus:outline-none' type='text'placeholder='What are you looking for ' />
        <img  className ="  w-4 h-4 " src={serach} />
      </div>
      <div className='flex gap-5 '>
        <img src={wish} />
        <img src={cart} />
      </div>
    </div>
    </nav>
    
    </>
  )
}

export default Navbar