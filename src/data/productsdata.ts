export interface Product{
    id :string;
    title:string;
    description :string;
    image:string;
    price : string
   
  }


  export const productsdata: Product[] = [

    {    id:"1",
        image :"/pro3.jpg",
        title:"sofa-1",
        description :"Fam locavore kickstarter distillery. Mixtape chillwave tumeric",
        price :"$399"

     
    },


    {   id:"2",
        image :"/pro2.webp",
        title:"sofa-2",
        description :"Fam locavore kickstarter distillery. Mixtape chillwave tumeric",
        price :"$688"

     
    },

    {    id:"3",
        image:"/pro3.jpg",
        title:"sofa-3",
        description:"Fam locavore kickstarter distillery. Mixtape chillwave tumeric",
        price:"$39"  
    },

    {    id:"4",
        image:"/pro2.webp",
        title:"sofa-4",
        description:"Fam locavore kickstarter distillery. Mixtape chillwave tumeric",
        price:"$389" 
    },

    {  id:"5",
        image :"/pro1.jpeg",
title:"sofa-5",
description :"Fam locavore kickstarter distillery. Mixtape chillwave tumeric",
price :"$379"

     
    },
    {   id:"6",
        image:"/pro3.jpg",
        title:"sofa-6",
        description:"Fam locavore kickstarter distillery. Mixtape chillwave tumeric",
        price:"$888"  
    },
    {   id:"7",
        image:"/pro3.jpg",
        title:"sofa-7",
        description:"Fam locavore kickstarter distillery. Mixtape chillwave tumeric",
        price:"$66"  
    },
    {   id:"8",
        image:"/pro1.jpeg",
        title:"sofa-8",
        description:"Fam locavore kickstarter distillery. Mixtape chillwave tumeric",
        price:"$8"  
    },
    {   id:"9",
        image:"/pro2.webp",
        title:"sofa-8",
        description:"Fam locavore kickstarter distillery. Mixtape chillwave tumeric",
        price:"$8"  
    }
];
export async function getproductByid(id: string) {
    return productsdata.find((shop) => shop.id === id);
  }




