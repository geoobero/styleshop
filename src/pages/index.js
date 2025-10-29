import Navbar from '@/components/Navbar';

export default function Home() {
  const featuredProducts = [
    { id: 1, name: "Wireless Headphones", price: "$99.99", image: "https://images.unsplash.com/photo-1619296794093-3df1ae6819a8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1025" },
    { id: 2, name: "Smart Watch", price: "$199.99", image: "https://images.unsplash.com/photo-1637160151663-a410315e4e75?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c21hcnQlMjB3YXRjaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600" },
    { id: 3, name: "Laptop Backpack", price: "$49.99", image: "https://images.unsplash.com/photo-1667411424598-96b5e5f3139b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bGFwdG9wJTIwYmFja3BhY2t8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600" },
    { id: 4, name: "Phone Case", price: "$24.99", image: "https://images.unsplash.com/photo-1593055454503-531d165c2ed8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGhvbmUlMjBjYXNlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-500 to-gray-700 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">Welcome to StyleShop</h1>
          <p className="text-xl mb-8 opacity-90">Discover amazing products at unbeatable prices</p>
          <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 hover:text-white hover:shadow-lg cursor-pointer transition duration-300">
            Shop Now
          </button>
        </div>
      </section>

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
                  <button className="w-full bg-amber-500 text-white py-2 rounded-lg hover:bg-white hover:text-amber-500 hover:border border cursor-pointer transition duration-300">
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
        <div className='ml-10'>
          Photo used from <a className="underline" href="https://unsplash.com">Unsplash.com</a>
        </div>
      </section>
    </div>
  )
}