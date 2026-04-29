


export default function ProductGrid({ products, onProductClick }) {
 
  return (
    <div className="grid grid-cols-2 lg:gap-5 gap-3 md:gap-5 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => (
        <div
          key={product.id}
          onClick={() => onProductClick(product)}
          className="max-h-80 max-w-60 cursor-pointer overflow-hidden rounded-lg bg-gray-100 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          <p className="absolute bg-red-500 px-2 font-semibold text-white">Sale</p>
          <div className="flex h-38 items-center justify-center bg-gray-200">
            <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
          </div>
          <div className="p-6">
            <h3 className="mb-2 text-lg text-gray-500">{product.name}</h3>
            <p className="mb-4 text-xl font-bold text-slate-700">{product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
