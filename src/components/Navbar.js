import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className='flex justify-between items-center p-6 bg-white shadow-md border-b border-gray-100'>
      <div className='text-2xl font-bold text-orange-600'>
        <Link href="/">
          StyleShop
        </Link>
      </div>
      <div className='flex gap-8'>
        <Link href="/" className='text-gray-700 hover:text-teal-600 font-medium transition duration-300'>
          Home
        </Link>
        <Link href="/About" className='text-gray-700 hover:text-teal-600 font-medium transition duration-300'>
          About
        </Link>
        <Link href="/Contact" className='text-gray-700 hover:text-teal-600 font-medium transition duration-300'>
          Contact
        </Link>
      </div>
    </nav>
  );
};