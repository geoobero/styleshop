import CartModal from '@/components/cartModal';
import Navbar from '@/components/Navbar';
import ProductGrid from '@/components/ProductGrid';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { useState } from 'react';

export default function ProductsPage() {
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
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="fixed top-0 z-60 w-full">
        <Navbar />
      </div>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Full Collection
              </p>
              <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900">
                All Products
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
                Explore the full StyleShop collection with every product available in one place.
              </p>
            </div>
            <p className="text-sm font-medium text-slate-500">{products.length} products available</p>
          </div>

          <div className="flex justify-center">
            <ProductGrid products={products} onProductClick={handleAddToCart} />
          </div>
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
