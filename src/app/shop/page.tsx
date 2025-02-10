// import Link from "next/link";
// import Product from "@/Components/Product";
// export default function Shop(){
//     return(
//         <>
// <div className=" mx-auto">
// <main className="bg-hero-pattern w-full h-96 max-w-screen-2xl bg-cover bg-center mx-auto opacity-60 flex justify-center items-center absolute"></main>
// <div className="w-full h-96  flex inline justify-center items-center ">
// <Link href="/shop"><h1 className="text-2xl font-bold text-black absolute">Shop</h1></Link>
// <br />
// <Link href="/shop"><h1 className="text-l font-bold text-black absolute pt-10">Home --</h1></Link>

// </div>

// </div>
        
//     <section  className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
//             <div className="max-w-6xl mx-auto px-4">
//               <h2 className="text-3xl font-bold mb-12 text-center">Featured </h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    
//     <Product/>
//     <Product/>
//     <Product/>
//     <Product/>
    
//                 </div></div></section>


// </>
//     );
// }



import Link from "next/link";
import { productsdata } from "@/data/productsdata";
import Hero_section from "@/Components/Hero_section";

export default function Products() {
    return (
        <>

<section id="projects" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">



        
        
            {
            productsdata.map((shop:any,i:any) => (
                <div key={shop.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
                    <Link href={`/shop/${shop.id}`}>
                        <img src={shop.image} alt={shop.title} className=" object-cover" />
                    </Link>
                    <div className="p-6">
                        <h3 className="text-xl font-semibold mb-2">{shop.title}</h3>
                        <p className="text-gray-600 mb-4">{shop.description}</p>
                        <h5 className="text-gray-800 mb-4">{shop.price}</h5>
                        <Link href="/blog">
                            <button className="border-2 rounded-lg bg-orange-300 py-2 px-4 text-white hover:bg-white hover:text-orange-500">
                                Add to Cart
                            </button>
                        </Link>
                    </div>
                </div>
            ))}


</div></div></section>
        </>
    );
}
