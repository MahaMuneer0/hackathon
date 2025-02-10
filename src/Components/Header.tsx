// 'use client'
import Link from "next/link"
// import { useState } from "react";


// const [menuOpen, setMenuOpen] = useState(false);
export default function Header(){
    return(
        <>
     <header className="mx-auto container  flex justify-around items-center  w-full h-20">
        
<div className="flex h-10  ">
    <img  className="w-12 sm:w-8  h-12" src="/logo1.png" alt="logo" />
    <img className="w-38 sm: w-32 h-12 " src="/logo.png" alt="logo" /> 
    </div>
<img  className="h-6 sm:hidden" src="/menu.png" alt="menu" />
<nav className="hidden sm:block space-x-12 capitalize  text-xl">
<Link href="/">Home</Link>
<Link href="/shop">Shop</Link>
<Link href="/blog">Cart</Link>
<Link href="/contact">Contact</Link>
</nav>
{/* <div className=" hidden  lg: block bg-red-300 lg: w-48 h-6 ">
<img src="/user.png" alt="user" />
<img src="/heart.png" alt="heart" />
<img src="/search.png" alt="search" />
<img src="/cart.png" alt="cart" />



</div> */}

<div className="hidden lg:flex space-x-10  w-48 h-6">
  <img src="/user.png" alt="user" />
  <img src="/heart.png" alt="heart" />
  <img src="/search.png" alt="search" />
  <img src="/cart.png" alt="cart" />
</div>

    </header>
        




</>



// {/* 
// <header className="mx-auto container flex justify-between items-center w-full h-20 px-4">
//     <div className="flex items-center h-10 space-x-4">
//         <img className="w-12" src="/logo1.png" alt="logo" />
//         <img className="w-38" src="/logo.png" alt="logo" />
//     </div>
//     <div className="sm:hidden">
//         <img className="h-6 cursor-pointer" src="/menu.png" alt="menu" onClick={() => setMenuOpen(!menuOpen)} />
//     </div>
//     <nav className={`fixed top-0 left-0 w-full h-full bg-white flex flex-col items-center justify-center space-y-6 text-lg capitalize transition-transform transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'} sm:relative sm:flex sm:flex-row sm:space-x-6 sm:space-y-0 sm:bg-transparent sm:translate-x-0`}>
//         <Link href="/" onClick={() => setMenuOpen(false)}>home</Link>
//         <Link href="/shop" onClick={() => setMenuOpen(false)}>shop</Link>
//         <Link href="/blog" onClick={() => setMenuOpen(false)}>blog</Link>
//         <Link href="/contact" onClick={() => setMenuOpen(false)}>contact</Link>
//     </nav>
//     <div className="flex items-center space-x-4 h-6">
//         <img src="/user.png" alt="user" />
//         <img src="/heart.png" alt="heart" />
//         <img src="/search.png" alt="search" />
//         <img src="/cart.png" alt="cart" />
//     </div>
// </header>
// {/* 
// <script>
//     const [menuOpen, setMenuOpen] = useState(false);
// </script> */}


















        
//         </>



// <>
// <header className="text-gray-600 body-font w-full">
//   <div className=" w-full container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
//     <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         fill="none"
//         stroke="currentColor"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         strokeWidth={2}
//         className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
//         viewBox="0 0 24 24"
//       >
//         <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
//       </svg>
//       <span className="ml-3 text-xl">Tailblocks</span>
//     </a>
//     <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
//       <a className="mr-5 hover:text-gray-900">First Link</a>
//       <a className="mr-5 hover:text-gray-900">Second Link</a>
//       <a className="mr-5 hover:text-gray-900">Third Link</a>
//       <a className="mr-5 hover:text-gray-900">Fourth Link</a>
//     </nav>
//     <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
//       Button
//       <svg
//         fill="none"
//         stroke="currentColor"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         strokeWidth={2}
//         className="w-4 h-4 ml-1"
//         viewBox="0 0 24 24"
//       >
//         <path d="M5 12h14M12 5l7 7-7 7" />
//       </svg>
//     </button>
//   </div>
// </header>





// </>



    )
}