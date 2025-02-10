import Header from "@/Components/Header"
import Range from "@/Components/Range"
import Products from "./shop/page"
// import Product from "@/Components/Product"
import Container from "@/Components/Container"
import Gallery from "@/Components/Gallery"
import Link from "next/link"
export default function homepage(){
  return(
    <>
    
    <main className="bg-hero-pattern max-w-screen-2xl mx-auto bg-cover bg-center relative w-full h-screen overflow-hidden">
    <div className="bg-orange-200 space-y-8 w-full md:w-2/5 h-auto absolute top-56 right-0 md:right-10 m-4 p-10">
        <h5 className="capitalize text-sm md:text-xl">new arrival</h5>
        <h1 className="capitalize font-extrabold text-xl md:text-5xl">discover our new collection</h1>
        <p className="text-sm md:text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam eum earum sint voluptate eos cum necessitatibus aliquam repellat quibusdam similique illo, labore non esse harum itaque. Quae, nemo assumenda? Aliquid?</p>
        <button className="py-4 uppercase px-6 bg-orange-400">buy now</button>
    </div>
</main>

    <Range/>
  


    {/* <section id="projects" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> */}
          <Products/>


            {/* </div></div></section> */}

<Container/>
<Gallery/>

    </>
  )
}