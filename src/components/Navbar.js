import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className='flex justify-around items-center p-6 bg-white shadow-md border-b border-gray-100'>
      <div className='text-2xl font-bold text-orange-600'>
        <Link href="/" className='lg:block md:block sm:block hidden'>
          StyleShop
        </Link>
      </div>
      <div className='flex gap-8 items-center'>
        <Link href="/" className='text-gray-700 hover:text-teal-600 font-medium transition duration-300'>
          Home
        </Link>
        <Link href="/About" className='text-gray-700 hover:text-teal-600 font-medium transition duration-300'>
          About
        </Link>
        <Link href="/Contact" className='text-gray-700 hover:text-teal-600 font-medium transition duration-300'>
          Contact
        </Link>
        <Link href="/cart"><img src="/images/shopping-cart.png" width={40} height={40} alt='shopping-cart'
              className='hover:bg-amber-200 p-2 rounded-xl duration-300'
        /></Link>
      </div>
    </nav>
  );
};