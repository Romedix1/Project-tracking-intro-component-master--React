import React, { useState, useEffect} from 'react';

export default function Nav() {
    const [navBarStatus, setNavBarStatus] = useState(true);

    function OpenedNav() {
        return (
            <section className='nav--opened-menu z-20 top-24 absolute text-center w-10/12 px-5 shadow-2xl sm:hidden'>
                <ul className='text-center grid place-items-center font-bold text-xl'>
                    <li className='uppercase cursor-pointer ease-in duration-300 border-b-2 border-transparent border-solid hover:border-black w-fit mt-8 my-2.5'><a href='#'>Product</a></li>
                    <li className='uppercase cursor-pointer ease-in duration-300 border-b-2 border-transparent border-solid hover:border-black w-fit my-2.5'><a href='#'>Features</a></li>
                    <li className='uppercase cursor-pointer ease-in duration-300 border-b-2 border-transparent border-solid hover:border-black w-fit my-2.5'><a href='#'>Pricing</a></li>
                </ul>
                <hr />
                <button className='nav--opened-menu-button cursor-pointer  ease-in duration-300 border-b-2 border-transparent border-solid my-4 w-fit text-xl font-bold uppercase'>Login</button>
            </section>
        )
    }

    return (
        <nav className='w-full grid place-items-center'>
            <section className='w-full px-7 py-10 flex justify-between items-center  sm:px-12 2xl:px-20'>
                <img className='w-8 md:w-10 ' src='./images/logo.svg' alt='logo icon'/>
                { navBarStatus ? <img className='w-8 sm:hidden' src='./images/icon-hamburger.svg' alt='hamburger icon' onClick={() => setNavBarStatus(false)}/> : <img className='w-8 sm:hidden' src='./images/icon-close.svg' alt='close icon' onClick={() => setNavBarStatus(true)}/> }

            <div className='hidden sm:flex items-center'>
                <ul className='text-center flex items-center font-bold text-md '>
                    <li className='uppercase cursor-pointer ease-in duration-300 border-b-2 border-transparent border-solid hover:border-black w-fit mx-2.5 mt-2.5 my-2.5 lg:mx-5'><a href='#'>Product</a></li>
                    <li className='uppercase cursor-pointer ease-in duration-300 border-b-2 border-transparent border-solid hover:border-black w-fit mx-2.5 my-2.5 lg:mx-5'><a href='#'>Features</a></li>
                    <li className='uppercase cursor-pointer ease-in duration-300 border-b-2 border-transparent border-solid hover:border-black w-fit mx-2.5 mr-16 my-2.5 lg:mx-5 lg:mr-20'><a href='#'>Pricing</a></li>
                </ul>
                <button className='nav--opened-menu-button cursor-pointer  ease-in duration-300 border-b-2 border-transparent border-solid my-4 w-fit tracking-widest text-base font-bold uppercase lg:mr-20'>Login</button>
            </div>
            </section>

            {navBarStatus==false && <OpenedNav />}

        </nav>
    )
}