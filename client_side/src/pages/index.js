import React, { useState } from "react";
import TitleSection from "@/Components/TitleSection";
import Sidebar from "@/pages/Products/Sidebar";
import FilterNavbar from "@/Components/FilterNavbar";
import ProductList from "./Products/ProductList";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <>
      <Navbar />
      <TitleSection />
      <div className="relative">
        <FilterNavbar
          onToggleSidebar={toggleSidebar}
          isSidebarOpen={isSidebarOpen}
        />

        <div className="flex">
          <Sidebar isOpen={isSidebarOpen} />

          <main
            className={`pt-16 ${
              isSidebarOpen ? "ml-64" : "ml-0"
            } p-4 transition-all duration-500`}
          >
            <ProductList isSidebarOpen={isSidebarOpen} />
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}
