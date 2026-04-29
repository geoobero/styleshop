import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const { cartCount } = useCart();
  const router = useRouter();
  const showSearch = router.pathname !== '/About' && router.pathname !== '/Contact';

  return (
      <nav className='flex flex-wrap items-center justify-around gap-4 px-6 py-5 bg-white/20 backdrop-blur-md shadow-md'>
      <div className='text-2xl font-bold text-black'>
        <Link href="/" className='lg:block md:block sm:block hidden'>
          StyleShop
        </Link>
      </div>
      <div className={`order-3 w-full md:order-2 md:w-auto md:flex-1 md:max-w-md ${showSearch ? 'block' : 'hidden'}`}>
        <form className='flex items-center rounded-full border border-slate-200 bg-white/65 px-2 py-2 shadow-sm'>
          <input
            type="search"
            placeholder="Search products..."
            className='w-full bg-transparent px-3 text-sm text-slate-700 outline-none placeholder:text-slate-400'
          />
          <button
            type="submit"
            className='cursor-pointer rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white transition duration-300 hover:bg-amber-500 hover:text-slate-900'
          >
            Search
          </button>
        </form>
      </div>
      <div className='order-2 flex flex-wrap gap-4 items-center md:order-3'>
        <Link href="/" className='text-black hover:bg-slate-800 hover:text-white px-4 py-1 rounded-full font-medium transition duration-300'>
          Home
        </Link>
        <Link href="/products" className='text-black hover:bg-slate-800 hover:text-white px-4 py-1 rounded-full font-medium transition duration-300'>
          Products
        </Link>
        <Link href="/About" className='text-black hover:bg-slate-800 hover:text-white px-4 py-1 rounded-full font-medium transition duration-300'>
          About
        </Link>
        <Link href="/Contact" className='text-black hover:bg-slate-800 hover:text-white px-4 py-1 rounded-full font-medium transition duration-300'>
          Contact
        </Link>
        <Link href="/cart" className="relative">
          <span className="relative inline-block">
            <img
              src="/images/shopping-cart.png"
              width={40}
              height={40}
              alt='shopping-cart'
              className='hover:bg-amber-200 p-2 rounded-xl duration-300'
            />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </span>
        </Link>
      </div>
      </nav>
  );
};
