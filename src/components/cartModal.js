export default function CartModal({ isOpen, onClose, product, onAddToCart }) {
    if (!isOpen || !product) return null;

    const handleAdd = () => {
        onAddToCart(product);
    };

    return (
        <>
            <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
                <div className="bg-white p-6 rounded-lg w-96">
                    <h2 className="text-xl mb-4 text-gray-800 font-bold">Add to Cart</h2>

                    <div className="flex items-center space-x-4 mb-6 p-4 bg-gray-50 rounded-lg">
                        <div className="w-20 h-20 flex-shrink-0">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover rounded"
                            />
                        </div>
                        <div>
                            <p className="text-teal-600 font-bold text-lg">{product.price}</p>
                        </div>
                    </div>
                    <h3 className="font-semibold text-gray-800">{product.name}</h3>
                    <div className="flex justify-end gap-2 mt-6">
                        <button
                            onClick={handleAdd}
                            className="px-4 w-20 py-2 text-white bg-amber-500 
                            hover:bg-amber-400 duration-300 cursor-pointer rounded"
                        >
                            Add
                        </button>
                        <button
                            onClick={onClose}
                            className="px-4 w-20 py-2 text-red-500 hover:bg-red-50 duration-300 cursor-pointer bg-gray-100 rounded"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}