import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import TitleSection from "./Components/TitleSection";
import FilterNavbar from "./Components/FilterNavbar";
import Sidebar from "./Products/Sidebar";
import ProductList from "./Products/ProductList";
import Footer from "./Components/Footer";
import styles from "./CustomeStyle/Home.module.css";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <>
      <Navbar />
      <TitleSection />
      <div className={styles.container}>
        <FilterNavbar
          onToggleSidebar={toggleSidebar}
          isSidebarOpen={isSidebarOpen}
        />

        <div className={styles.flexContainer}>
          <Sidebar isOpen={isSidebarOpen} />

          <main
            className={`${styles.main} ${
              isSidebarOpen ? styles.sidebarOpen : styles.sidebarClosed
            }`}
          >
            <ProductList isSidebarOpen={isSidebarOpen} />
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}
