import JewellerySection from '@/views/JewellerySection';
import ProductSection from '@/components/ProductSection';
import Hero from '@/views/Hero'
import ProductList from '@/views/ProductList';
import Promotions from '@/views/Promotions';
import Image from 'next/image'
import NewsLetter from '@/views/NewsLetter';
export default function Home() {
  return (
    <>
      <div>
        <Hero />
        <Promotions/>
        <ProductSection/>
        <ProductList/>
        <JewellerySection/>
        <NewsLetter/>
      </div>
    </>
  );
}
