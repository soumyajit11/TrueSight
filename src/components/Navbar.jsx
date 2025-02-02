import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
    return (
        <nav className='bg-black text-white flex justify-around items-center h-10'>
            <div className='gradient-text'>TrueSight</div>
            {/* <div className=' h-[50px]'><img className='pt-3 h-[40px] rounded-3xl' src="logo.png" alt="" /></div> */}
            <ul>

                <li className='flex gap-4'>
                <a href="/" className=" font-lg  hover:font-bold hover:shadow-xl px-2 py-1 rounded">
                Home</a>
                    <a className=" font-lg  hover:font-bold hover:shadow-xl px-2 py-1 rounded" href="#">About</a>
                    <a className=" font-lg  hover:font-bold hover:shadow-xl px-2 py-1 rounded" href="#">Contacts</a>
                </li>
            </ul>
            <NavLink className={(e)=>{return e.isActive?"red": "" }} to="/signup"><div>Log In</div></NavLink>
        </nav>
    )
}

export default Navbar
