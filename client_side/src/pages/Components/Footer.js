import React, { useState } from "react";
import Image from "next/image";
import amexImg from "../../assets/amex.png";
import GpayImg from "../../assets/g-pay.png";
import applePayImg from "../../assets/applepay.png";
import paypalImg from "../../assets/paypal.png";
import OpayImg from "../../assets/opay.png";
import VisaPayImg from "../../assets/visapay.png";
import usLogo from "../../assets/uslogo.png";
import { AiFillInstagram } from "react-icons/ai";
import { RxLinkedinLogo } from "react-icons/rx";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Footer = () => {
  const [isMuseDropdownOpen, setIsMuseDropdownOpen] = useState(false);
  const [isQuickLinksDropdownOpen, setIsQuickLinksDropdownOpen] =
    useState(false);

  const toggleMuseDropdown = () => {
    setIsMuseDropdownOpen(!isMuseDropdownOpen);
  };

  const toggleQuickLinksDropdown = () => {
    setIsQuickLinksDropdownOpen(!isQuickLinksDropdownOpen);
  };

  return (
    <footer className="bg-black text-white py-6 px-4 sm:px-8 lg:px-32">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between mb-8">
          <div className="md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-FooterHeadingText font-semibold mb-2">
              BE THE FIRST TO KNOW
            </h3>
            <p className="text-FootersubHeading mb-4">
              Sign up for updates from mettā muse.
            </p>
            <div className="flex flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Enter your e-mail..."
                className="p-2 lg:w-96 pl-4 sm:px-4 text-black w-full sm:w-auto text-left"
              />
              <button className="text-gray-400 mt-2 sm:mt-0 sm:ml-3 px-4 py-2 border-2 border-gray-400">
                SUBSCRIBE
              </button>
            </div>
          </div>

          <div className="md:w-2/5 mb-6 md:mb-0">
            <h3 className="text-FooterHeadingText font-semibold">CONTACT US</h3>
            <p className="text-FootersubHeading mt-3">+44 221 133 5360</p>
            <p className="text-FootersubHeading mt-3">
              customercare@mettamuse.com
            </p>
            <p className="text-FooterHeadingText font-semibold mt-6">
              CURRENCY
            </p>
            <p className="text-lg flex items-center mt-3">
              <span className="mr-2">
                <Image src={usLogo} alt="us Logo" />
              </span>
              <span className="text-FooterHeadingText font-semibold">USD</span>
            </p>
            <p className="text-xs text-gray-400 mt-5">
              Transactions will be completed in Euros and a currency reference
              is available on hover.
            </p>
          </div>
        </div>

        <hr className="border-white-700 my-8" />

        <div className="md:hidden">
          <button
            onClick={toggleMuseDropdown}
            className="flex justify-between items-center w-full text-FooterHeadingText font-semibold py-2"
          >
            <span>mettā muse</span>
            {isMuseDropdownOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </button>

          {isMuseDropdownOpen && (
            <div className="space-y-2 text-FootersubHeading">
              <ul>
                <li>About Us</li>
                <li>Stories</li>
                <li>Artisans</li>
                <li>Boutiques</li>
                <li>Contact Us</li>
                <li>EU Compliances Docs</li>
              </ul>
            </div>
          )}

          <button
            onClick={toggleQuickLinksDropdown}
            className="flex justify-between items-center w-full text-FooterHeadingText font-semibold py-2 mt-4"
          >
            <span>QUICK LINKS</span>
            {isQuickLinksDropdownOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </button>

          {isQuickLinksDropdownOpen && (
            <div className="space-y-2 text-FootersubHeading">
              <ul>
                <li>Orders & Shipping</li>
                <li>Join/Login as a Seller</li>
                <li>Payment & Pricing</li>
                <li>Return & Refunds</li>
                <li>FAQs</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
              </ul>
            </div>
          )}

          <div className="mt-8">
            <h3 className="text-FooterHeadingText font-semibold mb-2">
              mettā muse ACCEPTS
            </h3>
            <div className="flex flex-wrap space-x-2">
              <Image src={GpayImg} alt="GPay" className="w-10 h-6" />
              <Image src={VisaPayImg} alt="Mastercard" className="w-10 h-6" />
              <Image src={paypalImg} alt="Paypal" className="w-10 h-6" />
              <Image src={amexImg} alt="Mastercard" className="w-10 h-6" />
              <Image src={applePayImg} alt="Apple Pay" className="w-10 h-6" />
              <Image src={OpayImg} alt="Paypal" className="w-10 h-6" />
            </div>
            <p className="text-xs text-gray-400 mt-5 text-center">
              &copy; 2024 mettā muse. All rights reserved.
            </p>
          </div>
        </div>

        <div className="hidden md:grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-FooterHeadingText font-semibold mb-2">
              mettā muse
            </h3>
            <ul className="space-y-2 text-FootersubHeading">
              <li>About Us</li>
              <li>Stories</li>
              <li>Artisans</li>
              <li>Boutiques</li>
              <li>Contact Us</li>
              <li>EU Compliances Docs</li>
            </ul>
          </div>

          <div>
            <h3 className="text-FooterHeadingText font-semibold mb-2">
              QUICK LINKS
            </h3>
            <ul className="space-y-2 text-FootersubHeading">
              <li>Orders & Shipping</li>
              <li>Join/Login as a Seller</li>
              <li>Payment & Pricing</li>
              <li>Return & Refunds</li>
              <li>FAQs</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

          <div className="lg:ml-28">
            <div>
              <h3 className="text-FooterHeadingText font-semibold mb-2">
                FOLLOW US
              </h3>
              <ul className="space-y-2 text-FootersubHeading flex flex-col">
                <div className="flex space-x-2">
                  <div className="border border-gray-400 rounded-full p-1">
                    <AiFillInstagram />
                  </div>
                  <div className="border border-gray-400 rounded-full p-1">
                    <RxLinkedinLogo />
                  </div>
                </div>
              </ul>
            </div>

            <h3 className="text-FooterHeadingText font-semibold mb-2 mt-8 w-64">
              mettā muse ACCEPTS
            </h3>
            <div className="flex space-x-2">
              <Image src={GpayImg} alt="GPay" className="w-10 h-6" />
              <Image src={VisaPayImg} alt="Mastercard" className="w-10 h-6" />
              <Image src={paypalImg} alt="Paypal" className="w-10 h-6" />
              <Image src={amexImg} alt="Mastercard" className="w-10 h-6" />
              <Image src={applePayImg} alt="Apple Pay" className="w-10 h-6" />
              <Image src={OpayImg} alt="Paypal" className="w-10 h-6" />
            </div>
          </div>
        </div>
        <div className="hidden md:block">
          <p className="text-xs text-gray-400 mt-5 text-center">
            &copy; 2024 mettā muse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
