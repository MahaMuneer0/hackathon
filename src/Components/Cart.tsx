"use client"
import Link from "next/link"

export default function Cart(){
    return<>
    <Link href="/blog">
     <button  className="flex ml-auto text-white bg-orange-400 border-0 py-2 px-6 focus:outline-none hover:bg-white hover:text-orange-500 border border-2 border-orange-400 rounded">
            add to cart
          </button>
    </Link>
    </>
}