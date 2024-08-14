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
import styles from "../CustomeStyle/Footer.module.css";

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
    <footer className={styles.footerContainer}>
      <div className="container mx-auto">
        <div className={`${styles.footerGrid}`}>
          <div className={`${styles.footerColumn} md:w-1/3`}>
            <h3 className={styles.footerHeading}>BE THE FIRST TO KNOW</h3>
            <p className={styles.footerSubHeading}>
              Sign up for updates from mettā muse.
            </p>
            <div className={styles.footerInputContainer}>
              <input
                type="email"
                placeholder="Enter your e-mail..."
                className={styles.footerInput}
              />
              <button className={styles.subscribeButton}>SUBSCRIBE</button>
            </div>
          </div>

          <div className={`${styles.footerColumn} md:w-2/5`}>
            <h3 className={styles.footerHeading}>CONTACT US</h3>
            <p className={styles.footerSubHeading}>+44 221 133 5360</p>
            <p className={styles.footerSubHeading}>
              customercare@mettamuse.com
            </p>
            <p className={styles.footerHeading}>CURRENCY</p>
            <p className="text-lg flex items-center mt-3">
              <span className="mr-2">
                <Image src={usLogo} alt="us Logo" />
              </span>
              <span className={styles.footerHeading}>USD</span>
            </p>
            <p className="text-xs text-gray-400 mt-5">
              Transactions will be completed in Euros and a currency reference
              is available on hover.
            </p>
          </div>
        </div>

        <hr className={styles.hr} />

        <div className="md:hidden">
          <button
            onClick={toggleMuseDropdown}
            className={styles.dropdownButton}
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
            className={`${styles.dropdownButton} mt-4`}
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
            <h3 className={styles.footerHeading}>mettā muse ACCEPTS</h3>
            <div className={styles.paymentIcons}>
              <Image src={GpayImg} alt="GPay" className={styles.paymentIcon} />
              <Image
                src={VisaPayImg}
                alt="Mastercard"
                className={styles.paymentIcon}
              />
              <Image
                src={paypalImg}
                alt="Paypal"
                className={styles.paymentIcon}
              />
              <Image
                src={amexImg}
                alt="Mastercard"
                className={styles.paymentIcon}
              />
              <Image
                src={applePayImg}
                alt="Apple Pay"
                className={styles.paymentIcon}
              />
              <Image
                src={OpayImg}
                alt="Paypal"
                className={styles.paymentIcon}
              />
            </div>
            <p className={styles.copyrightText}>
              &copy; 2024 mettā muse. All rights reserved.
            </p>
          </div>
        </div>

        <div className="hidden md:grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className={styles.footerHeading}>mettā muse</h3>
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
            <h3 className={styles.footerHeading}>QUICK LINKS</h3>
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

          <div>
            <div style={{ marginBottom: "10px" }}>
              <h3 className={styles.footerHeading}>FOLLOW US</h3>
              <div className={styles.socialIcons}>
                <div className={styles.socialIcon}>
                  <AiFillInstagram />
                </div>
                <div className={styles.socialIcon}>
                  <RxLinkedinLogo />
                </div>
              </div>
            </div>

            <div className={styles.footerPaymentIcons}>
              <h3 className={styles.footerHeading}>mettā muse ACCEPTS</h3>
              <div className={styles.paymentIcons}>
                <Image
                  src={GpayImg}
                  alt="GPay"
                  className={styles.paymentIcon}
                />
                <Image
                  src={VisaPayImg}
                  alt="Mastercard"
                  className={styles.paymentIcon}
                />
                <Image
                  src={paypalImg}
                  alt="Paypal"
                  className={styles.paymentIcon}
                />
                <Image
                  src={amexImg}
                  alt="Mastercard"
                  className={styles.paymentIcon}
                />
                <Image
                  src={applePayImg}
                  alt="Apple Pay"
                  className={styles.paymentIcon}
                />
                <Image
                  src={OpayImg}
                  alt="Paypal"
                  className={styles.paymentIcon}
                />
              </div>
              <p className={styles.copyrightText}>
                &copy; 2024 mettā muse. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
