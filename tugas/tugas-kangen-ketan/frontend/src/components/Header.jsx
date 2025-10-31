import React from "react";
import logo from "../assets/logo.png";

function Header() {
  return (
    <header className="fixed top-0 w-full z-10">
      <nav className="flex justify-between items-center py-5 px-15 bg-yellow-200">
        <div>
          <img className="w-20 " src={logo} alt="Kangen Ketan Logo" />
        </div>
        <div className="flex gap-10 text-xl font-semibold">
          <a>Menu</a>
          <a>Event</a>
          <a>Lokasi</a>
        </div>
        <div className="bg-green-500 px-4 py-2 rounded-md text-white">
          <a
            href="https://wa.me/+6285787570131"
            target="_blank"
            rel="noreferrer"
          >
            Whatsapp Admin Kangen Ketan
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
