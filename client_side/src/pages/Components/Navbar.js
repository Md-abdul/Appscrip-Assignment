import { CiSearch } from "react-icons/ci";
import { PiHeartLight, PiHandbagLight } from "react-icons/pi";
import { HiOutlineUser } from "react-icons/hi2";
import { IoIosArrowDown } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import subNavbarLogo from "../../assets/subNavlog.png"
import Logo from "../../assets/Logo.png";
import Image from "next/image";
export default function Navbar() {
  return (
    <>
      <div className="bg-FooterBackgroundColor flex items-center justify-center py-2 lg:items-center justify-evenly">
        <div className="flex items-center space-x-1">
          <Image src={subNavbarLogo} alt="SubNavbarLogo" />
          <h1 className="text-subNavbarTxtColor">Lorem ipsum dolor</h1>
        </div>
        <div className="hidden md:flex items-center space-x-1">
          <Image src={subNavbarLogo} alt="SubNavbarLogo" />
          <h1 className="text-subNavbarTxtColor">Lorem ipsum dolor</h1>
        </div>
        <div className="hidden md:flex items-center space-x-1">
          <Image src={subNavbarLogo} alt="SubNavbarLogo" />
          <h1 className="text-subNavbarTxtColor">Lorem ipsum dolor</h1>
        </div>
      </div>

      <nav className="text-black px-4 md:px-20 mt-8">
        <div className="container mx-auto flex items-center justify-between relative">
          <div className="flex items-center space-x-4">
            <GiHamburgerMenu className="h-6 w-6 md:hidden" cursor="pointer" />
            <Image
              src={Logo}
              alt="Logo"
            />
          </div>

          <div className="absolute left-1/2 transform -translate-x-1/2">
            <h1 className="text-2xl font-bold">Logo</h1>
          </div>

          <div className="flex items-center space-x-4 md:space-x-6">
            <CiSearch className="h-6 w-6 cursor-pointer" />
            <PiHeartLight className="h-6 w-6 cursor-pointer" />
            <PiHandbagLight className="h-6 w-6 cursor-pointer" />
            <HiOutlineUser className="h-6 w-6 cursor-pointer hidden md:block" />
            <div className="flex items-center space-x-1 hidden md:flex">
              <h1 className="cursor-pointer font-bold">ENG</h1>
              <IoIosArrowDown className="h-4 w-4 cursor-pointer" />
            </div>
          </div>
        </div>
      </nav>

      <div className="mt-10">
        <div className="hidden md:flex justify-center space-x-4 md:space-x-10">
          <h1 className="cursor-pointer font-textfont font-bold">HOME</h1>
          <h1 className="cursor-pointer font-textfont font-bold">SHOP</h1>
          <h1 className="cursor-pointer font-textfont font-bold">SKILLS</h1>
          <h1 className="cursor-pointer font-textfont font-bold">STORIES</h1>
          <h1 className="cursor-pointer font-textfont font-bold">ABOUT</h1>
          <h1 className="cursor-pointer font-textfont font-bold">CONTACT US</h1>
        </div>
      </div>
      <hr className="h-px my-4 bg-horizontalLineColor border-1"></hr>
      <div className="flex justify-start space-x-1 md:hidden p-2 ">
        <h1 className="cursor-pointer font-textfont font-bold text-gray-400">
          HOME |
        </h1>
        <h1 className="cursor-pointer font-textfont font-bold">SHOP</h1>
      </div>
    </>
  );
}
