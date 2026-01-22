import Navbar from '@/components/Navbar';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function MyCart() {
    const [cartItems, setCartItems] = useState([]);

    // Load cart from localStorage on component mount
    useEffect(() => {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            setCartItems(JSON.parse(savedCart));
        }
    }, []);

    const updateQuantity = (id, newQuantity) => {
        if (newQuantity < 1) {
            removeFromCart(id);
            return;
        }

        const updatedCart = cartItems.map(item =>
            item.id === id ? { ...item, quantity: newQuantity } : item
        );
        setCartItems(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const removeFromCart = (id) => {
        const updatedCart = cartItems.filter(item => item.id !== id);
        setCartItems(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => {
            const price = parseFloat(item.price.replace('$', ''));
            return total + (price * item.quantity);
        }, 0);
    };

    return (
        <section className='min-h-screen bg-gray-50 pt-24'>
            <div className='fixed top-0 w-full'>
                <Navbar cartCount={cartItems.reduce((total, item) => total + item.quantity, 0)} />
            </div>

            <div className='container mx-auto px-6 py-8 max-w-200'>
                {cartItems.length === 0 ? (
                    <div className='text-center py-12'>
                        <p className='text-gray-600 text-lg mb-4'>Your cart is empty</p>
                        <Link href="/" className='text-amber-600 hover:text-amber-700 font-semibold'>
                            Continue Shopping →
                        </Link>
                    </div>
                ) : (
                    <>
                        <div className='bg-white rounded-lg shadow-md overflow-hidden'>
                            {cartItems.map((item) => (
                                <div key={item.id} className='flex items-center p-4 border-b'>
                                    <div className='w-24 h-24 flex-shrink-0'>
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className='w-full h-full object-cover rounded'
                                        />
                                    </div>
                                    <div className='ml-6 flex-grow'>
                                        <h3 className='text-lg font-semibold text-gray-800'>{item.name}</h3>
                                        <p className='text-teal-600 font-bold'>{item.price}</p>
                                    </div>
                                    <div className='flex items-center space-x-4'>
                                        <div className='flex items-center space-x-2'>
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                className='w-8 h-8 flex items-center justify-center bg-gray-100 cursor-pointer rounded-full hover:bg-gray-200'
                                            >
                                                <span className='text-gray-700 text-black font-semibold text-4xl'>-</span>
                                            </button>
                                            <span className='w-8 text-center font-medium text-black font-semibold'>{item.quantity}</span>
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                className='w-8 h-8 flex items-center justify-center bg-gray-100 cursor-pointer rounded-full hover:bg-gray-200'
                                            >
                                                <span className='text-gray-700 text-black font-semibold text-xl'>+</span>
                                            </button>
                                        </div>
                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            className='px-3 py-2 bg-red-50 text-red-600 cursor-pointer rounded-lg hover:bg-red-100 hover:text-red-700'
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className='mt-8 bg-white rounded-lg shadow-md p-6'>
                            <div className='flex justify-between items-center mb-6'>
                                <span className='text-lg font-semibold text-black font-semibold'>Total:</span>
                                <span className='text-2xl font-bold text-teal-600'>
                                    ${calculateTotal().toFixed(2)}
                                </span>
                            </div>
                            <button className='w-full cursor-pointer bg-amber-500 text-white py-3 rounded-lg font-semibold hover:bg-amber-400 transition duration-300'>
                                Checkout
                            </button>
                            <Link href="/" className='block text-center mt-4 text-amber-600 hover:text-amber-700'>
                                Continue Shopping
                            </Link>
                        </div>
                    </>
                )}
            </div>
        </section>
    )
}