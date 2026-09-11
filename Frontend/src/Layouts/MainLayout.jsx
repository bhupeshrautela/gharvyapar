import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";

function MainLayout() {
  return (
    <div
      className="
        min-h-screen
        grid
        grid-rows-[auto_1fr_auto]

        [grid-template-areas:'header''main''footer']
      "
    >

      <header className="[grid-area:header]">
        <Navbar />
      </header>

      <main className="[grid-area:main] overflow-hidden">
        <Outlet />
      </main>

      <footer className="[grid-area:footer]">
       <Footer/>
      </footer>

    </div>
  );
}

export default MainLayout;