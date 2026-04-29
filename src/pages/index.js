import CartModal from '@/components/cartModal';
import Navbar from '@/components/Navbar';
import ProductGrid from '@/components/ProductGrid';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const featuredProducts = products.slice(0, 4);
  const [showCartModal, setShowCartModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { addItem } = useCart();

  const handleAddToCart = (product) => {
    setSelectedProduct(product);
    setShowCartModal(true);
  };

  const handleAddToCartConfirm = (product) => {
    addItem(product);
    setShowCartModal(false);
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 ">
      <div className="fixed top-0 w-full z-60">
        <Navbar />
      </div>

      <main>
        <div
          className="bg-[url('https://images.unsplash.com/photo-1561715276-a2d087060f1d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]
          relative flex h-130 w-full items-center justify-items-center overflow-hidden bg-amber-500 bg-bottom bg-cover md:h-200 lg:h-screen"
        >
          <div className="absolute inset-0 bg-black/5" />
          <div className="relative z-10 w-full px-6">
            <div className="mx-auto max-w-6xl">
              <div className="max-w-3xl pt-28 md:pt-25">
                <h1 className="text-6xl leading-none text-white drop-shadow-[0_12px_30px_rgba(0,0,0,0.35)] sm:text-7xl md:text-8xl lg:text-[9rem]">
                  StyleShop
                </h1>
                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.35em] text-amber-500 md:text-sm lg:text-lg">
                  Curated Modern Storefront
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute right-4 bottom-128 z-50 flex cursor-pointer items-center gap-2 rounded-full px-5 py-3 text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:bg-indigo-500 md:bottom-60 lg:bottom-4">
          <span className="text-sm font-medium">Made by Geo</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 245 240" className="h-5 w-5 fill-white">
            <path d="M104.4 104.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1.1-6.1-4.5-11.1-10.2-11.1zm36.2 0c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1s-4.5-11.1-10.2-11.1z" />
            <path d="M189.5 20h-134C34.3 20 20 34.3 20 52.5v135c0 18.2 14.3 32.5 32.5 32.5h113.4l-5.3-18.3 12.8 11.8 12.1 11.1 21.6 19V52.5c-.1-18.2-14.4-32.5-32.6-32.5zM163 155s-4.6-5.5-8.4-10.3c16.7-4.7 23.1-15.1 23.1-15.1-5.2 3.4-10.1 5.8-14.5 7.4-6.3 2.7-12.4 4.4-18.3 5.4-12.1 2.3-23.2 1.7-32.8-.1-7.2-1.4-13.5-3.4-18.7-5.4-2.9-1.1-6-2.4-9.1-4.1-.4-.2-.8-.3-1.1-.5-.3-.1-.4-.2-.6-.3-2.7-1.5-4.1-2.5-4.1-2.5s6.1 10.2 22.2 15c-3.8 4.8-8.5 10.6-8.5 10.6-28.1-.9-38.8-19.4-38.8-19.4 0-41.1 18.4-74.5 18.4-74.5 18.4-13.8 35.9-13.4 35.9-13.4l1.3 1.6c-23 6.6-33.7 16.5-33.7 16.5s2.8-1.5 7.5-3.5c13.6-5.9 24.4-7.5 28.9-7.9.7-.1 1.3-.2 2-.2 7.1-.9 15.2-1.2 23.5-.2 11 1.3 22.8 4.5 34.9 11.1 0 0-10.1-9.6-31.9-16.2l1.8-2.1s17.5-.4 35.9 13.4c0 0 18.4 33.4 18.4 74.5 0 .1-10.8 18.6-38.9 19.5z" />
          </svg>
        </div>
      </main>

      <section className="py-16">
        <div className="container mx-auto flex justify-center px-6">
          <div>
            <h2 className="mb-12 text-start text-2xl font-bold text-gray-600">Featured Products</h2>
            <ProductGrid products={featuredProducts} onProductClick={handleAddToCart} />
          </div>
        </div>
        <div className="mt-15 flex justify-center">
          <Link href="/products" className="cursor-pointer text-lg text-slate-700 hover:text-black">
            See more →
          </Link>
        </div>
      </section>

      <section className="bg-gray-800 py-12 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="mb-4 text-2xl font-bold">Stay Updated</h2>
          <p className="mb-6 opacity-90">Subscribe to our newsletter for the latest products and deals</p>
        </div>
        <div className="mx-auto text-center lg:ml-10 lg:text-start">
          Photo used from{' '}
          <a className="underline" target="_blank" rel="noreferrer" href="https://unsplash.com">
            Unsplash.com
          </a>
        </div>
      </section>

      <CartModal
        isOpen={showCartModal}
        onClose={() => {
          setShowCartModal(false);
          setSelectedProduct(null);
        }}
        product={selectedProduct}
        onAddToCart={handleAddToCartConfirm}
      />
    </div>
  );
}
