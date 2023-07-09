import Image from "next/image";
import { ProductsData } from "@/utils/mock";
import { ProductTypes } from "@/utils/types";
import { urlForImage } from "@/lib/image";
import AddToCart from "@/components/AddToCart";
export default async function getProductsByGroup({
  params,
}: {
  params: { group: string };
}) {
  const data: ProductTypes[] = await ProductsData();
  const result = data.filter((product) => product.group.name === params.group);
// console.log(data)
// console.log(result)
  return (
    <div>
      <div className="flex gap-x-10 justify-around">
        {result.length > 0 ? (
          result.map((product) => (
            <div key={product._id}>
              <Image
                src={urlForImage(product.image).url()}
                alt={product.product}
                width={200}
                height={300}
              />
              <h1 className="font-bold text-lg">{product.product}</h1>
              <h3>${product.price}</h3>
              <AddToCart />
            </div>
          ))
        ) : (
          <p className="text-white bg-black rounded-lg px-5 py-2 mt-20 text-2xl">
            No Product Found
          </p>
        )}
      </div>
    </div>
  );
}

// async function getProductsByGroup({
//   params,
// }: {
//   params: { group: { name: string } };
// }) {
//   const data: ProductTypes[] = await ProductsData();
//   const result = data.filter(
//     (product) => product.group.name === product.group.name
//   )
// //   console.log(result);
// }

// export default function Page({ params }: { params: { group: string } }) {
//   const result = getProductsByGroup(params.group);
//   return (
//     <div className="flex gap-x-10 justify-around">
//       <div>
//         {result.length > 0 ? (
//           result.map((product) => (
//             <div key={product._id}>{product.group.name}</div>
//           ))
//         ) : (
//           <p className="text-white bg-black rounded-lg px-5 py-2 mt-20 text-2xl">
//             No Product Found
//           </p>
//         )}
//       </div>
//     </div>
//   );
// }
