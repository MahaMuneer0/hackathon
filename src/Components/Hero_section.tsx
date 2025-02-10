import { text } from "stream/consumers";

interface headerprop{
   heading: string
   p:string


}

export default function Hero_section(prop:{ headerprop:string}){
    return(
        <>
        
      <main className=" bg-white w-full h-96">
<header className=" bg-hero-pattern max-w-screen-2xl overflow-hidden w-full h-96 bg-center bg-cover mx-auto bg-blend-darken">
    
    <div>
       <h2 className="bg-red-300 w-full h-10">cart</h2>
       <h3></h3> 
    </div>
    
    </header>
    </main> 
        
        </>
    )
}