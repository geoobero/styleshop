import Link from 'next/link';

export default function Navbar({ cartCount = 0 }) {
  return (
    <nav className='flex justify-around items-center p-6 bg-white/20 backdrop-blur-md shadow-md'>
      <div className='text-2xl font-bold text-orange-600'>
        <Link href="/" className='lg:block md:block sm:block hidden'>
          StyleShop
        </Link>
      </div>
      <div className='flex gap-8 items-center'>
        <Link href="/" className='text-black hover:text-teal-600 font-medium transition duration-300'>
          Home
        </Link>
        <Link href="/About" className='text-black hover:text-teal-600 font-medium transition duration-300'>
          About
        </Link>
        <Link href="/Contact" className='text-black hover:text-teal-600 font-medium transition duration-300'>
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