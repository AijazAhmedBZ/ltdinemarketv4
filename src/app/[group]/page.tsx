// import { ProductsData } from "@/utils/mock";
// import ProductCard from "@/components/ProductCard";
// import { ProductTypes } from "@/utils/types";

// const getProductsByGroup = (group:string) => {
//   return ProductsData.filter((product:ProductTypes) => product.group.name === group);
// };
// export default function Page({
//   params,
// }: {
//   params: { group: string  };
// }) {
//   const result = getProductsByGroup(params.group);
//   return (
//     <div className="flex gap-x-10 justify-around">
//       {result.length > 0 ? (
//         result.map((products:ProductTypes) => (
//           <ProductCard
//             key={products._id}
//             _id={products._id}
//             product={products.product}
//             category={products.category}
//             group={products.group}
//             price={products.price}
//             image={products.image}
//           />
//         ))
//       ) : (
//         <p className="text-white bg-black rounded-lg px-5 py-2 mt-20 text-2xl">
//           No Product Found
//         </p>
//       )}
//     </div>
//   );
// }
