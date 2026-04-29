import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const { cartCount } = useCart();
  const router = useRouter();
  const showSearch = router.pathname !== '/About' && router.pathname !== '/Contact' && router.pathname !== '/cart';
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/products', label: 'Products' },
    { href: '/About', label: 'About' },
    { href: '/Contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-white/20 px-6 py-5 shadow-md backdrop-blur-md">
      <div className="flex items-center justify-between gap-4">
        <div className="text-2xl font-bold text-black">
          <Link href="/" className="block">
            StyleShop
          </Link>
        </div>

        <div className="hidden flex-1 md:block md:max-w-md">
          {showSearch && (
            <form className="flex items-center rounded-full border border-slate-200 bg-white/65 px-2 py-2 shadow-sm">
              <input
                type="search"
                placeholder="Search products..."
                className="w-full bg-transparent px-3 text-sm text-slate-700 outline-none placeholder:text-slate-400"
              />
              <button
                type="submit"
                className="cursor-pointer rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white transition duration-300 hover:bg-amber-500 hover:text-slate-900"
              >
                Search
              </button>
            </form>
          )}
        </div>

        <div className="hidden items-center gap-4 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-1 font-medium text-black transition duration-300 hover:bg-slate-800 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/cart" className="relative">
            <span className="relative inline-block">
              <img
                src="/images/shopping-cart.png"
                width={40}
                height={40}
                alt="shopping-cart"
                className="rounded-xl p-2 duration-300 hover:bg-amber-200"
              />
              {cartCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                  {cartCount}
                </span>
              )}
            </span>
          </Link>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <Link href="/cart" className="relative">
            <span className="relative inline-block">
              <img
                src="/images/shopping-cart.png"
                width={40}
                height={40}
                alt="shopping-cart"
                className="rounded-xl p-2 duration-300 hover:bg-amber-200"
              />
              {cartCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                  {cartCount}
                </span>
              )}
            </span>
          </Link>

          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="rounded-2xl border border-slate-200 bg-white/75 p-3 text-slate-800 shadow-sm"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            <span className="block h-0.5 w-5 bg-current" />
            <span className="mt-1.5 block h-0.5 w-5 bg-current" />
            <span className="mt-1.5 block h-0.5 w-5 bg-current" />
          </button>
        </div>
      </div>

      {showSearch && (
        <div className="mt-4 md:hidden">
          <form className="flex items-center rounded-full border border-slate-200 bg-white/65 px-2 py-2 shadow-sm">
            <input
              type="search"
              placeholder="Search products..."
              className="w-full bg-transparent px-3 text-sm text-slate-700 outline-none placeholder:text-slate-400"
            />
            <button
              type="submit"
              className="cursor-pointer rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white transition duration-300 hover:bg-amber-500 hover:text-slate-900"
            >
              Search
            </button>
          </form>
        </div>
      )}

      {isMenuOpen && (
        <div className="mt-4 rounded-[1.5rem] border border-slate-200 bg-white/80 p-4 shadow-sm md:hidden">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-2xl px-4 py-3 font-medium text-slate-800 transition duration-300 hover:bg-slate-900 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
