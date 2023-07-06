import { ProductsData } from "@/utils/mock";
import ProductCard from "@/components/ProductCard";
import Image from "next/image";
import AddToCart from "@/components/AddToCart";

const getProductsById = (id: string) => {
  return ProductsData.filter((product) => product.id === id);
};

export default function Page({ params }: { params: { id: string } }) {
  const result = getProductsById(params.id);
  return (
    <div className="flex justify-center">
      {result.map((products) => (
        <div key={products.id}>
          <div>
            <Image src={products.image} alt={products.title}/>
          </div>
          <div>Product Detail</div>
          <AddToCart/>
        </div>
      ))}
    </div>
  );
}
