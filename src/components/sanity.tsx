import Image, { StaticImageData } from "next/image";
import { client } from "@/lib/client";
import { urlForImage } from "@/lib/image";
import { ProductTypes } from "@/utils/types";
import AddToCart from "@/components/AddToCart";

export const ProductsData = async () => {
  const res = await client.fetch(`*[_type=="product"]{
    _id,
    product,
    category,
    group -> {
      name
    },
    price,
    image
  }`);
  return res;
};

export default async function Home() {
  const data: ProductTypes[] = await ProductsData();
  // console.log(data);
  return (
    <>
      <div>
        {data.map((product) => (
          <div key={product._id}>
            <Image
              width={200}
              height={300}
              src={urlForImage(product.image).url()}
              alt={product.product}
            />
            <h1>{product.product}</h1>
            <h3>{product.category}</h3>
            <h4>${product.price}</h4>
            <AddToCart />
          </div>
        ))}
      </div>
    </>
  );
}
