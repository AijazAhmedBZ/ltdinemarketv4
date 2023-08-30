import Image from "next/image";
import { ProductsData } from "@/utils/sanity_data";
import { ProductTypes } from "@/utils/product_types";
import { urlForImage } from "@/lib/image";
import AddToCart from "@/components/AddToCart";
import { Image as Img } from "sanity";

export default async function getProductsByGroup({
  params,
}: {
  params: { group: string };
}) {
  const data: ProductTypes[] = await ProductsData();
  const result = data.filter(
    (product) => product.group.name.toLowerCase() === params.group
  );
  return (
    <div className="mt-10">
      <div className="grid grid-cols-1 gap-y-10 md:grid md:grid-cols-2 md:gap-x-10 lg:grid lg:grid-cols-4 lg:gap-x-10">
        {result.length > 0 ? (
          result.map((product) => (
            <div key={product._id}>
              <Image
                src={urlForImage(product.image as unknown as Img).url()}
                alt={product.product}
                width={370}
                height={394}
              />
              <h3 className="font-bold text-lg">{product.product}</h3>
              <h3 className="font-bold text-lg mt-3 text-gray-400">
                {product.category}
              </h3>
              <h3 className="font-bold text-lg">${product.price.toFixed(2)}</h3>
              <AddToCart _id={product._id} />
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
