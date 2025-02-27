import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import * as Sentry from "@sentry/react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Usluge from "./pages/Usluge";
import Onama from "./pages/Onama";
import Kontakt from "./pages/Kontakt";
import Reference from "./pages/Reference";

function App() {
  const [showTopButton, setShowTopButton] = useState(false);

  const goToTop = () => {
    const scrollToTop = () => {
      const c = document.documentElement.scrollTop || document.body.scrollTop;
      if (c > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, c - c / 8);
      }
    };
    scrollToTop();
  };

  const onScrollHandler = () => {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      setShowTopButton(true);
    } else {
      setShowTopButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onScrollHandler);

    return () => {
      window.removeEventListener("scroll", onScrollHandler); // Fix the removeEventListener typo
    };
  }, []); // Add empty dependency array to ensure the effect runs only once

  return (
    <main className="bg-black">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/onama" element={<Onama />} />
        <Route path="/usluge" element={<Usluge />} />
        <Route path="/reference" element={<Reference />} />
        <Route path="/kontakt" element={<Kontakt />} />
      </Routes>

      <Footer />
      {/* Return to Top  */}
      {showTopButton && (
        <button
          type="button"
          className="fixed bottom-5 z-10 animate-bounce right-5 "
          onClick={goToTop}
          style={{ transition: "opacity 0.5s", opacity: 1 }}
        >
          <div
            className="group flex h-14 w-14 items-center justify-center rounded-full border border-black/20 bg-primary
           text-white transition duration-500 hover:bg-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6 transition group-hover:text-black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 15.75l7.5-7.5 7.5 7.5"
              />
            </svg>
          </div>
        </button>
      )}
    </main>
  );
}

export default Sentry.withProfiler(App);
