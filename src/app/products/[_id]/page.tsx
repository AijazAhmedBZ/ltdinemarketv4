// import { ProductsData } from "@/utils/mock";
// import ProductCard from "@/components/ProductCard";
// import Image from "next/image";
// import AddToCart from "@/components/AddToCart";
// import { ProductTypes } from "@/utils/types";

// const getProductsById = (_id: string) => {
//   return ProductsData.filter((product:ProductTypes) => product._id === _id);
// };

// export default function Page({ params }: { params: { _id: string } }) {
//   const result = getProductsById(params._id);
//   return (
//     <div className="flex justify-center">
//       {result.map((products:ProductTypes) => (
//         <div key={products._id}>
//           <div>
//             <Image src={products.image} alt={products.product}/>
//           </div>
//           <div>Product Detail</div>
//           <AddToCart/>
//         </div>
//       ))}
//     </div>
//   );
// }
