import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => setShowMobileMenu(!showMobileMenu);

  return (
    <>
      {/* Navigation Section */}
      <header className="flex justify-between items-center p-6">
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 px-10">
          <Link href="/" className="hover:text-gray-400">
            Home
          </Link>
          <Link href="/work" className="hover:text-gray-400">
            Work
          </Link>
          <div className="relative group">
            <button className="hover:text-gray-400 focus:outline-none flex items-center">
              Services
              <svg
                className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out">
              <div
                className="py-1"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu">
                <Link
                  href="/socialMedia"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem">
                  Social Media
                </Link>
                <Link
                  href="/influencerMarketing"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem">
                  Influencer Marketing
                </Link>
                <Link
                  href="/paidSocial"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem">
                  Paid Social
                </Link>
                <Link
                  href="/paidSearch"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem">
                  Paid Search
                </Link>
                <Link
                  href="/communityManagement"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem">
                  Community Management
                </Link>
                <Link
                  href="/brandingCreative"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem">
                  Branding & Creative
                </Link>
              </div>
            </div>
          </div>
          <Link href="/blogs" className="hover:text-gray-400">
            Blogs
          </Link>
        </nav>

        {/* Logo */}
        <div className="w-28 h-10">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={112}
            height={60}
            className="object-contain"
            quality={100}
          />
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center space-x-4 px-10">
          <Link href="/aboutus" className="hover:text-gray-400">
            About Us
          </Link>
          <button className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700">
            Book intro call — it&apos;s free
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={toggleMobileMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </header>

      {/* Mobile Menu */}
      {showMobileMenu && (
        <div className="md:hidden bg-black text-white p-4">
          <Link href="/work" className="block py-2">
            Work
          </Link>
          <div className="relative">
            <button className="w-full text-left py-2 flex justify-between items-center">
              Services
              <svg
                className="h-4 w-4 transition-transform duration-200"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <div className="pl-4">
              <Link href="/socialMedia" className="block py-2">
                Social Media
              </Link>
              <Link href="/influencerMarketing" className="block py-2">
                Influencer Marketing
              </Link>
              <Link href="/paidSocial" className="block py-2">
                Paid Social
              </Link>
              <Link href="/paidSearch" className="block py-2">
                Paid Search
              </Link>
              <Link href="/communityManagement" className="block py-2">
                Community Management
              </Link>
              <Link href="/brandingCreative" className="block py-2">
                Branding & Creative
              </Link>
            </div>
          </div>
          <Link href="/blogs" className="block py-2">
            Blogs
          </Link>
          <Link href="/aboutus" className="block py-2">
            About Us
          </Link>
          <button className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 mt-2 w-full">
            Book intro call — it&apos;s free
          </button>
        </div>
      )}
    </>
  );
};

export default Navbar;
