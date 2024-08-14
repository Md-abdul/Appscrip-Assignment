import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { PiHeartLight, PiHandbagLight } from "react-icons/pi";
import { HiOutlineUser } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import subNavbarLogo from "../../assets/subNavlog.png";
import Logo from "../../assets/Logo.png";
import Image from "next/image";
import styles from "../CustomeStyle/Navbar.module.css"; 

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.navbarContainer}>
      <div className={styles.subNavbar}>
        <div className={styles.subNavItem}>
          <Image src={subNavbarLogo} alt="SubNavbarLogo" />
          <h1 className={styles.subNavText}>Lorem ipsum dolor</h1>
        </div>
        <div className={`${styles.subNavItem} ${styles.hideOnDesktop}`}>
          <Image src={subNavbarLogo} alt="SubNavbarLogo" />
          <h1 className={styles.subNavText}>Lorem ipsum dolor</h1>
        </div>
        <div className={`${styles.subNavItem} ${styles.hideOnDesktop}`}>
          <Image src={subNavbarLogo} alt="SubNavbarLogo" />
          <h1 className={styles.subNavText}>Lorem ipsum dolor</h1>
        </div>
      </div>

      <nav className={styles.navbar}>
        <div className={styles.navbarContent}>
          <div className={styles.logoMenu}>
            <GiHamburgerMenu
              className={`${styles.hamburgerIcon} ${styles.showOnMobile}`}
              onClick={toggleMenu}
            />
            <Image src={Logo} alt="Logo" />
          </div>

          <div className={styles.centerLogo}>
            <h1 className={styles.logoText}>Logo</h1>
          </div>

          <div className={styles.navIcons}>
            <CiSearch className={styles.navIcon} />
            <PiHeartLight className={styles.navIcon} />
            <PiHandbagLight className={styles.navIcon} />
            <HiOutlineUser
              className={`${styles.navIcon} ${styles.hideOnMobile}`}
            />
            <div className={`${styles.languageToggle} ${styles.hideOnMobile}`}>
              <h1 className={`${styles.languageText} ${styles.hideOnMobile}`}>
                ENG
              </h1>
              <IoIosArrowDown
                className={`${styles.arrowIcon} ${styles.hideOnMobile}`}
              />
            </div>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          <div className={styles.mobileMenuHeader}>
            <IoMdClose className={styles.closeIcon} onClick={toggleMenu} />
          </div>
          <div className={styles.mobileMenuContent}>
            <h1 className={styles.menuItem}>HOME</h1>
            <h1 className={styles.menuItem}>SHOP</h1>
            <h1 className={styles.menuItem}>SKILLS</h1>
            <h1 className={styles.menuItem}>STORIES</h1>
            <h1 className={styles.menuItem}>ABOUT</h1>
            <h1 className={styles.menuItem}>CONTACT US</h1>
          </div>
        </div>
      )}

      <div className={`${styles.desktopMenu} ${styles.hideOnMobile}`}>
        <h1 className={styles.menuItem}>HOME</h1>
        <h1 className={styles.menuItem}>SHOP</h1>
        <h1 className={styles.menuItem}>SKILLS</h1>
        <h1 className={styles.menuItem}>STORIES</h1>
        <h1 className={styles.menuItem}>ABOUT</h1>
        <h1 className={styles.menuItem}>CONTACT US</h1>
      </div>

      <hr className={styles.horizontalLine} />

      <div className={` ${styles.showOnMobile}`}>
        <h1 className={styles.subMenuItem}>HOME |</h1>
        <h1 className={styles.subMenuItem}>SHOP</h1>
      </div>
    </div>
  );
}
