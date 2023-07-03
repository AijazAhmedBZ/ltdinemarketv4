import Hero from '@/views/Hero'
import ProductList from '@/views/ProductList';
import Image from 'next/image'
export default function Home() {
  return (
    <>
      <div>
        <Hero />
        <ProductList/>
      </div>
    </>
  );
}
