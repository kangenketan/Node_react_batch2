import Hero from "../assets/hero.png";
import Ketan1 from "../assets/ketan bubuk kelapa.jpeg";
import Ketan2 from "../assets/ketan mangga.jpeg";
import Ketan3 from "../assets/ketan keju cokelat susu.jpeg";
import Ketan4 from "../assets/ketan oreo susu.jpeg";
import Ketan5 from "../assets/ketan serundeng.jpeg";
import Ketan6 from "../assets/ketan juruh.jpeg";
import Ketan7 from "../assets/ketan ikan teri.png";
import Ketan8 from "../assets/ketan abon tuna.jpeg";
import Ketan9 from "../assets/ketan durian.jpeg";
import Ketan10 from "../assets/ketan inti.jpeg";
import Angsle from "../assets/angsle.jpeg";
import KentangMustofa from "../assets/kentang mustofa.jpeg";
import { useEffect, useState } from "react";
import axios from "axios";
function Home() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  const getCategories = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/category");
      console.log(response.data.info);
      setCategories(response.data.info);
    } catch (error) {}
  };

  const getProducts = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/ketan-products"
      );
      console.log(response.data);
      setProducts(response.data);
    } catch (error) {}
  };

  useEffect(() => {
    getCategories();
    getProducts();
  }, []);
  return (
    <div>
      {/* ===== HERO SECTION ===== */}
      <section
        className="flex items-center justify-center text-center min-h-[60vh] sm:min-h-[70vh] lg:min-h-screen 
               px-4 sm:px-8 md:px-12 lg:px-16 bg-cover bg-center"
        style={{
          backgroundImage: `url(${Hero})`,
        }}
      >
        <div className="mx-auto text-center px-2 sm:px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Kangen Ketan
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-8">
            Nikmati lezatnya ketan tradisional dengan cita rasa kekinian yang
            menggoda selera.
          </p>
          <button className="bg-green-500 px-5 sm:px-6 py-4 rounded-full text-white text-base sm:text-lg md:text-xl font-semibold hover:bg-green-600 transition duration-300">
            Kangen, Order sekarang ya Kak
          </button>
        </div>
      </section>

      {/* ===== MENU SECTION ===== */}
      <section
        id="Menu"
        className="px-4 sm:px-8 md:px-12 lg:px-20 py-10 sm:py-16 lg:py-20 scroll-mt-20 bg-gray-100"
      >
        <div className="flex flex-col justify-center mx-auto mb-10 sm:mb-15">
          <h1 className="lg:text-5xl md:text-3xl text-xl font-bold text-center">
            MENU KANGEN KETAN
          </h1>

          <div className="text-center pt-10">
            <ul className="flex flex-col sm:flex-row justify-center items-center gap-3  text-lg sm:text-xl font-semibold">
              {categories.map((category) => (
                <li>
                  <a
                    href="#"
                    className="bg-orange-400 hover:bg-orange-500 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full transition duration-300"
                  >
                    {category.name}
                  </a>
                </li>
              ))}
              {/* <li>
                <a
                  href="#"
                  className="bg-orange-400 hover:bg-orange-500 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-xl transition duration-300"
                >
                  Kekinian
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="bg-orange-400 hover:bg-orange-500 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-xl transition duration-300"
                >
                  Buah
                </a>
              </li> */}
            </ul>
          </div>
        </div>

        {/* ===== GRID MENU ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* === 1 === */}
          {products.map((product) => (
            <div className="bg-white mx-auto rounded-2xl shadow-2xl w-full">
              <img
                className="rounded-t-xl h-60 sm:h-64 md:h-70 w-full object-cover"
                src={Ketan1}
                alt=""
              />
              <div className="p-5 space-y-3">
                <h1 className="text-2xl md:text-3xl font-bold">
                  {product.name}
                </h1>
                <p className="text-base sm:text-lg text-gray-600">
                  {product.description}
                </p>
                <p className="text-lg sm:text-xl font-semibold text-red-500">
                  Rp. {product.price},-
                </p>
                <div className="my-5">
                  <a
                    className="bg-orange-400 py-3 px-6 rounded-full font-bold text-white"
                    href=""
                  >
                    Pesan
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =====  ===== */}
      <section id="Order" className="bg-white px-64 py-20 scroll-mt-15">
        <div>
          <div className="text-center space-y-10 mb-10">
            <h1 className="text-5xl font-bold">Temukan & Pesan Kangen Ketan</h1>
            <p className="text-xl font-semibold">
              Pesan langsung via WhatsApp atau pilih cabang terdekatmu di <br />
              aplikasi favoritmu!
            </p>
            <div className="bg-green-500 hover:bg-green-600 px-5 py-3 rounded-full text-white text-lg font-semibold w-max mx-auto transition">
              <a
                href="https://wa.me/+6285787570131"
                target="_blank"
                rel="noreferrer"
              >
                Pesan Cepat via WhatsApp
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5">
            <div className="shadow-2xl p-10 rounded-xl">
              <div className="flex justify-between mb-5">
                <div className="flex items-center">
                  <svg
                    className="size-12"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 640"
                  >
                    <path
                      fill="#e00b0b"
                      d="M128 252.6C128 148.4 214 64 320 64C426 64 512 148.4 512 252.6C512 371.9 391.8 514.9 341.6 569.4C329.8 582.2 310.1 582.2 298.3 569.4C248.1 514.9 127.9 371.9 127.9 252.6zM320 320C355.3 320 384 291.3 384 256C384 220.7 355.3 192 320 192C284.7 192 256 220.7 256 256C256 291.3 284.7 320 320 320z"
                    />
                  </svg>
                  <h1 className="text-2xl font-bold text-amber-400">
                    Cabang Wijaya Kusuma-Juanda 2
                  </h1>
                </div>
                <p className="bg-green-500 px-5 py-3 rounded-full text-white font-bold">
                  Buka
                </p>
              </div>
              <div className="text-center pb-5">
                <p className="text-lg">
                  Jl. Wijaya Kusuma-Juanda 2, Ruko 3 Pintu
                  <br />
                  samping Babershop Zye/ Soulthan Laundry/ Bubur Eka Banten
                </p>
                <p className="text-lg">
                  <span className="font-bold">Jam Buka:</span> 09:00 - 21:00
                  WITA
                </p>
                <div className="my-8">
                  <a
                    href="https://www.google.com/maps/search/kangen+ketan+samarinda/@-0.4856715,117.1325973,14z?entry=ttu&g_ep=EgoyMDI1MTAyOS4yIKXMDSoASAFQAw%3D%3D"
                    className="bg-gray-200 px-55 py-5 rounded-full w hover:bg-gray-300 transition"
                    target="_blank"
                  >
                    Buka di Google Maps
                  </a>
                </div>
              </div>
              <div className="flex justify-between gap-3">
                <a
                  className="bg-green-500 px-5 py-4 rounded-full text-white font-bold w-1/3 text-center hover:bg-green-600 transition"
                  href="https://gofood.co.id/samarinda/restaurant/kangen-ketan-juanda-2-6baef9f7-9846-4181-8c3a-89d94553b32b"
                  target="_blank"
                >
                  GoFood
                </a>
                <a
                  className="bg-orange-500 px-5 py-4 rounded-full text-white font-bold w-1/3 text-center hover:bg-orange-600 transition"
                  href="https://shopee.co.id/universal-link/now-food/shop/21732899?deep_and_deferred=1&shareChannel=copy_info"
                  target="_blank"
                >
                  Shopee
                </a>
                <a
                  className="bg-green-500 px-5 py-4 rounded-full text-white font-bold w-1/3 text-center  hover:bg-green-600 transition"
                  href="https://food.grab.com/id/id/restaurant/kangen-ketan-air-hitam-delivery/6-C6WXG62BGX2EEJ"
                  target="_blank"
                >
                  GrabFood
                </a>
              </div>
            </div>

            <div className="shadow-2xl p-10 rounded-xl">
              <div className="flex justify-between mb-5">
                <div className="flex items-center">
                  <svg
                    className="size-12"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 640"
                  >
                    <path
                      fill="#e00b0b"
                      d="M128 252.6C128 148.4 214 64 320 64C426 64 512 148.4 512 252.6C512 371.9 391.8 514.9 341.6 569.4C329.8 582.2 310.1 582.2 298.3 569.4C248.1 514.9 127.9 371.9 127.9 252.6zM320 320C355.3 320 384 291.3 384 256C384 220.7 355.3 192 320 192C284.7 192 256 220.7 256 256C256 291.3 284.7 320 320 320z"
                    />
                  </svg>
                  <h1 className="text-2xl font-bold text-amber-400">
                    Cabang Pirus
                  </h1>
                </div>
                <p className="bg-red-500 px-5 py-3 rounded-full text-white font-bold">
                  Tutup
                </p>
              </div>
              <div className="text-center pb-5">
                <p className="text-lg">
                  Jl. Nilam-Pirus, Awang Long
                  <br />
                  sederetan Gorengan Odah Etam
                </p>
                <p className="text-lg">
                  <span className="font-bold">Jam Buka:</span> 10:00 - 19:00
                  WITA
                </p>
                <div className="my-8">
                  <a
                    href="https://www.google.com/maps/place/KANGEN+KETAN+SAMARINDA/@-0.4856715,117.1325973,14z/data=!4m10!1m2!2m1!1skangen+ketan+samarinda!3m6!1s0x2df67fbb3886b155:0x5621fa15c196bfec!8m2!3d-0.4991174!4d117.1443627!15sChZrYW5nZW4ga2V0YW4gc2FtYXJpbmRhkgENZm9vZF9wcm9kdWNlcqoBbwoNL2cvMTFnMGh5NXBwdAoNL2cvMTF2bHo2eGJschABKhAiDGthbmdlbiBrZXRhbigmMh8QASIbalUGRfH0uCWqwEQ9552Uq5Nqx42bDBvH4IzdMhoQAiIWa2FuZ2VuIGtldGFuIHNhbWFyaW5kYeABAA!16s%2Fg%2F11g0hy5ppt?entry=ttu&g_ep=EgoyMDI1MTAyOS4yIKXMDSoASAFQAw%3D%3D"
                    className="bg-gray-200 px-55 py-5 rounded-full w hover:bg-gray-300 transition"
                    target="_blank"
                  >
                    Buka di Google Maps
                  </a>
                </div>
              </div>
              <div className="flex justify-between gap-3">
                <a
                  className="bg-green-500 px-5 py-4 rounded-full text-white font-bold w-1/3 text-center  hover:bg-green-600 transition"
                  href="https://gofood.co.id/samarinda/restaurant/kangen-ketan-pirus-f85e2994-d8c2-4a84-8a1c-91ec59e3b762"
                  target="_blank"
                >
                  GoFood
                </a>
                <a
                  className="bg-orange-500 px-5 py-4 rounded-full text-white font-bold w-1/3 text-center  hover:bg-orange-600 transition"
                  href="https://shopee.co.id/universal-link/now-food/shop/20181553?deep_and_deferred=1&shareChannel=copy_link"
                  target="_blank"
                >
                  Shopee
                </a>
                <a
                  className="bg-green-500 px-5 py-4 rounded-full text-white font-bold w-1/3 text-center  hover:bg-green-600 transition"
                  href="https://food.grab.com/id/id/restaurant/kangen-ketan-air-hitam-delivery/6-C6WXG62BGX2EEJ"
                  target="_blank"
                >
                  GrabFood
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== LOKASI SECTION ===== */}
      <section
        id="Lokasi"
        className="px-4 sm:px-8 md:px-12 lg:px-20 py-10 sm:py-16 lg:py-20"
      >
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-15">
          <div className="w-full lg:w-1/2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31917.399860970912!2d117.1325973!3d-0.4856715!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df67fb6867e1691%3A0x47a6f95566e3b254!2sKangen%20Ketan%20Cabang%20Wijaya%20Kusuma%20Juanda%202%20Samarinda!5e0!3m2!1sid!2sid!4v1761891895198!5m2!1sid!2sid"
              className="w-full h-[300px] sm:h-[400px] lg:h-[450px] rounded-xl shadow-md"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
            <video
              controls
              className="w-full h-[300px] sm:h-[400px] lg:h-[450px] object-cover rounded-xl shadow-md"
            >
              <source
                src="./src/assets/video/WhatsApp Video 2025-10-31 at 2.28.28 PM.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </section>

      <footer className="bg-amber-200 p-5">
        <div className="text-center">
          <h1>&copy; 2025 Kangen Ketan Samarinda</h1>
        </div>
      </footer>
    </div>
  );
}
export default Home;
