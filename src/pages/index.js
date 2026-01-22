import Navbar from '@/components/Navbar';
import CartModal from '@/components/cartModal';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const featuredProducts = [
    { id: 1, name: "Wireless Headphones", price: "$99.99", image: "https://images.unsplash.com/photo-1619296794093-3df1ae6819a8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1025" },
    { id: 2, name: "Smart Watch", price: "$199.99", image: "https://images.unsplash.com/photo-1637160151663-a410315e4e75?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c21hcnQlMjB3YXRjaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600" },
    { id: 3, name: "Laptop Backpack", price: "$49.99", image: "https://images.unsplash.com/photo-1667411424598-96b5e5f3139b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bGFwdG9wJTIwYmFja3BhY2t8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600" },
    { id: 4, name: "Phone Case", price: "$24.99", image: "https://images.unsplash.com/photo-1593055454503-531d165c2ed8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGhvbmUlMjBjYXNlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600" }
  ];

  const [showCartModal, setShowCartModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const router = useRouter();

  // Load cart from localStorage on component mount
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const handleAddToCart = (product) => {
    setSelectedProduct(product);
    setShowCartModal(true);
  };

  const handleAddToCartConfirm = (product) => {
    // Add to cart
    const existingItem = cart.find(item => item.id === product.id);

    if (existingItem) {
      setCart(prevCart =>
        prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart(prevCart => [...prevCart, { ...product, quantity: 1 }]);
    }

    // Close modal
    setShowCartModal(false);
    setSelectedProduct(null);
  };

  const goToCart = () => {
    router.push('/cart');
  };

  return (
    <div className="min-h-screen bg-gray-50 ">
      <div className='fixed top-0 w-full z-60'>
        <Navbar cartCount={cart.reduce((total, item) => total + item.quantity, 0)} />
      </div>

      {/* Hero Section */}
      <main>
        <div class="bg-[url('https://images.unsplash.com/photo-1561715276-a2d087060f1d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]
          bg-cover bg-bottom w-full lg:h-screen md:h-200 h-130 flex items-center justify-items-center bg-amber-500 relative overflow-hidden">
          {/* <div class="container mx-auto flex relative py-16">
            <div class="sm:w-3/6 lg:w-3/5 flex flex-col relative z-20">
              <h1 class="font-sans font-black font-semibold leading-snug text-gray-800 text-white
             text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
                Welcome to the <br />
                <span class="font-light italic">
                  innovation
                </span> oasis
              </h1>

              <p class="text-xs sm:text-sm md:text-base lg:text-lg mt-4 sm:mt-6 text-gray-700 text-white max-w-xs sm:max-w-sm md:max-w-sm lg:max-w-1/2">
                Step into our innovation oasis, where groundbreaking ideas bloom, and every click is a step into a world of
                endless possibilities.
              </p>


              <div class="flex flex-wrap mt-6 sm:mt-8 gap-4">
                <a href="#" class="py-2 px-4 sm:py-3 sm:px-6 rounded-xl shadow-lg bg-black border-2 border-transparent text-white text-xs sm:text-sm hover:bg-gray-700">
                  Get Started
                </a>
                <a href="#" class="py-2 px-4 sm:py-3 sm:px-6 rounded-xl shadow-lg bg-transparent border-2 border-black hover:border-gray-700 text-black text-white text-xs sm:text-sm hover:text-gray-700">
                  Watch Demo
                </a>
              </div>
            </div>

            <div class="hidden sm:block sm:w-3/6 lg:w-2/5 relative">
              <div
                class="grid grid-cols-2 justify-items-center relative mt-[-50px]">

                <div class="bg-white rounded-3xl overflow-hidden shadow-lg w-[250px] lg:w-[250px]">
                  <img
                    class="object-cover w-full h-48"
                    src="https://images.pexels.com/photos/3585088/pexels-photo-3585088.jpeg"
                    alt="Block Image"
                  />
                </div>

                <div class="bg-gray-300 rounded-[40px] w-[250px] lg:w-[250px] p-6 shadow-xl translate-y-1 flex flex-col justify-end items-start">
                  <p>
                    <span class="text-5xl">$14B</span><br />
                    <span class="text-sm opacity-80">Funds & Syndicates</span>
                  </p>
                </div>

                <div class="bg-gray-400 rounded-[40px] w-[250px] lg:w-[250px] p-6 shadow-xl translate-y-4 lg:translate-y-4 flex flex-col justify-end items-start">
                  <p>
                    <span class="text-5xl">27k+</span><br />
                    <span class="text-sm opacity-80">Raised by startups</span>
                  </p>
                </div>
                <div class="bg-white rounded-[40px] overflow-hidden shadow-lg w-[250px] lg:w-[250px] translate-y-6">
                  <img
                    class="object-cover w-full h-48"
                    src="https://images.pexels.com/photos/711009/pexels-photo-711009.jpeg"
                    alt="City Image"
                  />
                </div>
              </div>
            </div>
          </div> */}
        </div>

        <h1
          target="_blank"
          rel="noopener"
          class="absolute lg:bottom-4 md:bottom-60 bottom-128 right-4 flex items-center gap-2 text-white px-5 py-3 rounded-full shadow-lg hover:bg-indigo-500 transition-all duration-300 z-50 backdrop-blur-md">
          <span class="text-sm font-medium">Made by Geo</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 245 240" class="w-5 h-5 fill-white">
            <path d="M104.4 104.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1.1-6.1-4.5-11.1-10.2-11.1zm36.2 0c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1s-4.5-11.1-10.2-11.1z" />
            <path d="M189.5 20h-134C34.3 20 20 34.3 20 52.5v135c0 18.2 14.3 32.5 32.5 32.5h113.4l-5.3-18.3 12.8 11.8 12.1 11.1 21.6 19V52.5c-.1-18.2-14.4-32.5-32.6-32.5zM163 155s-4.6-5.5-8.4-10.3c16.7-4.7 23.1-15.1 23.1-15.1-5.2 3.4-10.1 5.8-14.5 7.4-6.3 2.7-12.4 4.4-18.3 5.4-12.1 2.3-23.2 1.7-32.8-.1-7.2-1.4-13.5-3.4-18.7-5.4-2.9-1.1-6-2.4-9.1-4.1-.4-.2-.8-.3-1.1-.5-.3-.1-.4-.2-.6-.3-2.7-1.5-4.1-2.5-4.1-2.5s6.1 10.2 22.2 15c-3.8 4.8-8.5 10.6-8.5 10.6-28.1-.9-38.8-19.4-38.8-19.4 0-41.1 18.4-74.5 18.4-74.5 18.4-13.8 35.9-13.4 35.9-13.4l1.3 1.6c-23 6.6-33.7 16.5-33.7 16.5s2.8-1.5 7.5-3.5c13.6-5.9 24.4-7.5 28.9-7.9.7-.1 1.3-.2 2-.2 7.1-.9 15.2-1.2 23.5-.2 11 1.3 22.8 4.5 34.9 11.1 0 0-10.1-9.6-31.9-16.2l1.8-2.1s17.5-.4 35.9 13.4c0 0 18.4 33.4 18.4 74.5 0 .1-10.8 18.6-38.9 19.5z" />
          </svg>
        </h1>
      </main>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <img src={product.image} alt={product.name} className="object-cover h-full w-full" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
                  <p className="text-teal-600 font-bold text-xl mb-4">{product.price}</p>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="w-full bg-amber-500 text-white py-2 rounded-lg hover:bg-amber-400 cursor-pointer transition duration-300"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
          <p className="mb-6 opacity-90">Subscribe to our newsletter for the latest products and deals</p>
        </div>
        <div className='lg:ml-10 mx-auto lg:text-start text-center'>
          Photo used from <a className="underline" href="https://unsplash.com">Unsplash.com</a>
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
  )
}