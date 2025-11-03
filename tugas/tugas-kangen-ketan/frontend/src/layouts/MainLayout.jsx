import { Outlet } from "react-router";
import logo from "../assets/logo.png";

function MainLayout() {
  return (
    <div>
      <header className="fixed top-0 left-0 w-full z-10">
        <nav
          className="flex flex-wrap justify-between items-center py-4 px-4 sm:px-8 md:px-12 lg:px-20 
                 bg-yellow-200 shadow-md"
        >
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              className="w-15 rounded-full"
              src={logo}
              alt="Kangen Ketan Logo"
            />
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex gap-5 lg:gap-10 text-base sm:text-lg lg:text-xl font-semibold">
            <a href="#Menu" className="hover:text-green-600 transition">
              Menu
            </a>
            <a href="#" className="hover:text-green-600 transition">
              Event
            </a>
            <a href="#Lokasi" className="hover:text-green-600 transition">
              Lokasi
            </a>
          </div>

          {/* WhatsApp Button */}
          <div className="hidden md:block bg-green-500 hover:bg-green-600 px-3 sm:px-4 py-2 rounded-md text-white text-sm sm:text-base transition">
            <a href="#Order" rel="noreferrer">
              Order Online
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              id="menu-btn"
              className="text-3xl text-green-600 focus:outline-none"
              onClick={() => {
                const menu = document.getElementById("mobile-menu");
                menu.classList.toggle("hidden");
              }}
            >
              ☰
            </button>
          </div>
        </nav>

        {/* ===== MOBILE DROPDOWN MENU ===== */}
        <div
          id="mobile-menu"
          className="hidden flex flex-col items-center bg-yellow-100 py-4 space-y-3 text-lg font-semibold md:hidden shadow-md"
        >
          <a
            href="#Menu"
            className="hover:text-green-600 transition"
            onClick={() =>
              document.getElementById("mobile-menu").classList.add("hidden")
            }
          >
            Menu
          </a>
          <a
            href="#"
            className="hover:text-green-600 transition"
            onClick={() =>
              document.getElementById("mobile-menu").classList.add("hidden")
            }
          >
            Event
          </a>
          <a
            href="#Lokasi"
            className="hover:text-green-600 transition"
            onClick={() =>
              document.getElementById("mobile-menu").classList.add("hidden")
            }
          >
            Lokasi
          </a>
          <a
            href="https://wa.me/+6285787570131"
            target="_blank"
            rel="noreferrer"
            className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-md text-white transition"
            onClick={() =>
              document.getElementById("mobile-menu").classList.add("hidden")
            }
          >
            Whatsapp Admin
          </a>
        </div>
      </header>

      <Outlet />
    </div>
  );
}

export default MainLayout;
