import { getproductByid, productsdata } from "@/data/productsdata"
import { notFound } from "next/navigation";



interface PageProps {
    params: {
      id: string;
    };
  }



export default async function DynamicPage({
    params
  }:PageProps) {
    const product = await getproductByid(params.id as string);
    // return <div>My Post: {id}</div>
  
  if (!productsdata) {
    return notFound();
  }
  return(
    <>
   <div>hello world</div>


   <img src={Shop.image} alt="" />
    </>
  )
}





















//   export default async function BlogPosts({ params }: PageProps) {
//     const post = await getPostBySlug(params.slug as string);
  
//     if (!post) {
//       return notFound();
//     }
  