import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-4 md:px-40">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start">
          {/* Left section: Company Info */}
          <div className="mt-5">
            <Image
              src="/images/logo.png"
              alt="Pitchhme"
              width={112}
              height={60}
              className="mb-4"
            />
            <p className="text-sm">
              205 W 28th St
              <br />
              New York, 10001
            </p>
          </div>

          {/* Center sections: Links */}
          <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-12 py-5">
            <div>
              <h3 className="text-gray-500 font-semibold mb-2">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/paidSocial" className="hover:text-white">
                    Paid Social
                  </Link>
                </li>
                <li>
                  <Link href="/paidSearch" className="hover:text-white">
                    Paid Search
                  </Link>
                </li>
                <li>
                  <Link href="/socialMedia" className="hover:text-white">
                    Social Media
                  </Link>
                </li>
                <li>
                  <Link href="/webDevelopment" className="hover:text-white">
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="/influencerMarketing"
                    className="hover:text-white">
                    Influencer Marketing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/communityManagement"
                    className="hover:text-white">
                    Community Management
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-gray-500 font-semibold mb-2">Others</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/work" className="hover:text-white">
                    Work
                  </Link>
                </li>
                <li>
                  <Link href="/blogs" className="hover:text-white">
                    Blogs
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-gray-500 font-semibold mb-2">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="hover:text-white">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/partners" className="hover:text-white">
                    Partners
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-gray-500 font-semibold mb-2">Social</h3>
              <ul className="flex space-x-4">
                <li>
                  <a
                    href="https://www.linkedin.com/company/pitchhme"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white">
                    <Image
                      src="/svgs/linkedin.svg"
                      alt="LinkedIn"
                      width={24}
                      height={24}
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/pitchhme"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white">
                    <Image
                      src="/svgs/twitter.svg"
                      alt="Twitter"
                      width={24}
                      height={24}
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/pitchhme"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white">
                    <Image
                      src="/svgs/github.svg"
                      alt="GitHub"
                      width={24}
                      height={24}
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Right section: Removed as social icons are now in the "Social" section */}
        </div>
        <div className="my-8">
          <Image
            src="/svgs/line.svg"
            alt="Decorative Line"
            width={1200}
            height={1}
            className="w-full"
          />
        </div>
        {/* Bottom section: Legal */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="mb-4 md:mb-0">
            <Image
              src="/svgs/footer.svg"
              alt="Footer Logo"
              width={150}
              height={50}
            />
          </div>
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
            <p className="text-gray-500">
              © {new Date().getFullYear()} Pitchhme Inc.
            </p>
            <Link href="/privacy" className="text-gray-500 hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-500 hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
