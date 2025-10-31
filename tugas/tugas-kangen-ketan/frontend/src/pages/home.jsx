import Hero from "../assets/hero.png";
import Ketan1 from "../assets/ketan bubuk kelapa.jpeg";
import Ketan2 from "../assets/ketan mangga.jpeg";
import Ketan3 from "../assets/ketan keju cokelat susu.jpeg";
import Ketan4 from "../assets/ketan oreo susu.jpeg";
import Ketan5 from "../assets/ketan serundeng.jpeg";
import Ketan6 from "../assets/ketan juruh.jpeg";
import Ketan7 from "../assets/ketan ikan teri.jpeg";
import Ketan8 from "../assets/ketan abon tuna.jpeg";
import Ketan9 from "../assets/ketan durian.jpeg";
import Ketan10 from "../assets/ketan inti.jpeg";
import Angsle from "../assets/angsle.jpeg";
import KentangMustofa from "../assets/kentang mustofa.jpeg";
function Home() {
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
          <button className="bg-green-500 px-5 sm:px-6 py-3 rounded-md text-white text-base sm:text-lg md:text-xl font-semibold hover:bg-green-600 transition duration-300">
            Kangen, Order sekarang ya Kak
          </button>
        </div>
      </section>

      {/* ===== MENU SECTION ===== */}
      <section
        id="Menu"
        className="px-4 sm:px-8 md:px-12 lg:px-20 py-10 sm:py-16 lg:py-20 scroll-mt-20"
      >
        <div className="flex flex-col justify-center mx-auto mb-10 sm:mb-15">
          <h1 className="lg:text-5xl md:text-3xl text-xl font-bold text-center">
            MENU KANGEN KETAN
          </h1>

          <div className="text-center pt-5">
            <ul className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-6 md:gap-10 text-lg sm:text-xl font-semibold">
              <li>
                <a
                  href="#"
                  className="bg-orange-400 hover:bg-orange-500 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-xl transition duration-300"
                >
                  Klasik
                </a>
              </li>
              <li>
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
              </li>
            </ul>
          </div>
        </div>

        {/* ===== GRID MENU ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* === 1 === */}
          <div className="bg-white mx-auto rounded-2xl shadow-2xl w-full">
            <img
              className="rounded-t-xl h-60 sm:h-64 md:h-70 w-full object-cover"
              src={Ketan1}
              alt=""
            />
            <div className="p-5 space-y-3">
              <h1 className="text-2xl md:text-3xl font-bold">
                Ketan Bubuk Kelapa
              </h1>
              <p className="text-base sm:text-lg text-gray-600">
                Ketan pulen ditaburin dengan bubuk kedelai yang renyah dan
                didampingin parutan kelapa muda seger
              </p>
              <p className="text-lg sm:text-xl font-semibold text-red-500">
                Rp. 15.000,-
              </p>
              <div className="my-5">
                <a className="bg-amber-300 py-3 px-6 rounded-lg" href="">
                  Pesan
                </a>
              </div>
            </div>
          </div>

          {/* === 2 === */}
          <div className="bg-white mx-auto rounded-2xl shadow-2xl w-full">
            <img
              className="rounded-t-xl h-60 sm:h-64 md:h-70 w-full object-cover"
              src={Ketan2}
              alt=""
            />
            <div className="p-5 space-y-3">
              <h1 className="text-2xl md:text-3xl font-bold">
                Manggo Sticky Rice
              </h1>
              <p className="text-base sm:text-lg text-gray-600">
                Ketan Mangga dilumerin dengan fla pilihan dengan cita rasa susu
                yang kental manis
              </p>
              <p className="text-lg sm:text-xl font-semibold text-red-500">
                Rp. 35.000,-
              </p>
              <div className="my-5">
                <a className="bg-amber-300 py-3 px-6 rounded-lg" href="">
                  Pesan
                </a>
              </div>
            </div>
          </div>

          {/* === 3 === */}
          <div className="bg-white mx-auto rounded-2xl shadow-2xl w-full">
            <img
              className="rounded-t-xl h-60 sm:h-64 md:h-70 w-full object-cover"
              src={Ketan3}
              alt=""
            />
            <div className="p-5 space-y-3">
              <h1 className="text-2xl md:text-3xl font-bold">
                Ketan Keju Meses Susu
              </h1>
              <p className="text-base sm:text-lg text-gray-600">
                Ketan maniak dengan taburan keju meses susu yang lumer di mulut
              </p>
              <p className="text-lg sm:text-xl font-semibold text-red-500">
                Rp. 20.000,-
              </p>
              <div className="my-5">
                <a className="bg-amber-300 py-3 px-6 rounded-lg" href="">
                  Pesan
                </a>
              </div>
            </div>
          </div>

          {/* === 4 === */}
          <div className="bg-white mx-auto rounded-2xl shadow-2xl w-full">
            <img
              className="rounded-t-xl h-60 sm:h-64 md:h-70 w-full object-cover"
              src={Ketan4}
              alt=""
            />
            <div className="p-5 space-y-3">
              <h1 className="text-2xl md:text-3xl font-bold">
                Ketan Oreo Susu
              </h1>
              <p className="text-base sm:text-lg text-gray-600">
                Ketan taburan oreo dengan dibalurin susu manis yang creamy
              </p>
              <p className="text-lg sm:text-xl font-semibold text-red-500">
                Rp. 15.000,-
              </p>
              <div className="my-5">
                <a className="bg-amber-300 py-3 px-6 rounded-lg" href="">
                  Pesan
                </a>
              </div>
            </div>
          </div>

          {/* === 5 === */}
          <div className="bg-white mx-auto rounded-2xl shadow-2xl w-full">
            <img
              className="rounded-t-xl h-60 sm:h-64 md:h-70 w-full object-cover"
              src={Ketan5}
              alt=""
            />
            <div className="p-5 space-y-3">
              <h1 className="text-2xl md:text-3xl font-bold">
                Ketan Serundeng
              </h1>
              <p className="text-base sm:text-lg text-gray-600">
                Ketan yang lembut dan serundeng kelapa kaya rasa.
              </p>
              <p className="text-lg sm:text-xl font-semibold text-red-500">
                Rp. 15.000,-
              </p>
              <div className="my-5">
                <a className="bg-amber-300 py-3 px-6 rounded-lg" href="">
                  Pesan
                </a>
              </div>
            </div>
          </div>

          {/* === 6 === */}
          <div className="bg-white mx-auto rounded-2xl shadow-2xl w-full">
            <img
              className="rounded-t-xl h-60 sm:h-64 md:h-70 w-full object-cover"
              src={Ketan6}
              alt=""
            />
            <div className="p-5 space-y-3">
              <h1 className="text-2xl md:text-3xl font-bold">Ketan Juruh</h1>
              <p className="text-base sm:text-lg text-gray-600">
                Ketan pulen, gurih kelapa parut, disiram Juruh Gula Aren asli.
              </p>
              <p className="text-lg sm:text-xl font-semibold text-red-500">
                Rp. 15.000,-
              </p>
              <div className="my-5">
                <a className="bg-amber-300 py-3 px-6 rounded-lg" href="">
                  Pesan
                </a>
              </div>
            </div>
          </div>

          {/* === 7 === */}
          <div className="bg-white mx-auto rounded-2xl shadow-2xl w-full">
            <img
              className="rounded-t-xl h-60 sm:h-64 md:h-70 w-full object-cover"
              src={Ketan7}
              alt=""
            />
            <div className="p-5 space-y-3">
              <h1 className="text-2xl md:text-3xl font-bold">
                Ketan Ikan Teri
              </h1>
              <p className="text-base sm:text-lg text-gray-600">
                Ketan pulen hangat, gurihnya teri renyah, dibalut sambal pedas.
              </p>
              <p className="text-lg sm:text-xl font-semibold text-red-500">
                Rp. 15.000,-
              </p>
              <div className="my-5">
                <a className="bg-amber-300 py-3 px-6 rounded-lg" href="">
                  Pesan
                </a>
              </div>
            </div>
          </div>

          {/* === 8 === */}
          <div className="bg-white mx-auto rounded-2xl shadow-2xl w-full">
            <img
              className="rounded-t-xl h-60 sm:h-64 md:h-70 w-full object-cover"
              src={Ketan8}
              alt=""
            />
            <div className="p-5 space-y-3">
              <h1 className="text-2xl md:text-3xl font-bold">
                Ketan Abon Tuna
              </h1>
              <p className="text-base sm:text-lg text-gray-600">
                Ketan pulen hangat dan abon tuna yang renyah.
              </p>
              <p className="text-lg sm:text-xl font-semibold text-red-500">
                Rp. 15.000,-
              </p>
              <div className="my-5">
                <a className="bg-amber-300 py-3 px-6 rounded-lg" href="">
                  Pesan
                </a>
              </div>
            </div>
          </div>

          {/* === 9 === */}
          <div className="bg-white mx-auto rounded-2xl shadow-2xl w-full">
            <img
              className="rounded-t-xl h-60 sm:h-64 md:h-70 w-full object-cover"
              src={Ketan9}
              alt=""
            />
            <div className="p-5 space-y-3">
              <h1 className="text-2xl md:text-3xl font-bold">Ketan Durian</h1>
              <p className="text-base sm:text-lg text-gray-600">
                Ketan pulen dengan durian pilihan dilumerin fla susu.
              </p>
              <p className="text-lg sm:text-xl font-semibold text-red-500">
                Rp. 35.000,-
              </p>
              <div className="my-5">
                <a className="bg-amber-300 py-3 px-6 rounded-lg" href="">
                  Pesan
                </a>
              </div>
            </div>
          </div>

          {/* === 10 === */}
          <div className="bg-white mx-auto rounded-2xl shadow-2xl w-full">
            <img
              className="rounded-t-xl h-60 sm:h-64 md:h-70 w-full object-cover"
              src={Ketan10}
              alt=""
            />
            <div className="p-5 space-y-3">
              <h1 className="text-2xl md:text-3xl font-bold">Ketan Inti</h1>
              <p className="text-base sm:text-lg text-gray-600">
                Ketan inti kelapa hangat.
              </p>
              <p className="text-lg sm:text-xl font-semibold text-red-500">
                Rp. 15.000,-
              </p>
              <div className="my-5">
                <a className="bg-amber-300 py-3 px-6 rounded-lg" href="">
                  Pesan
                </a>
              </div>
            </div>
          </div>

          {/* === 11 === */}
          <div className="bg-white mx-auto rounded-2xl shadow-2xl w-full">
            <img
              className="rounded-t-xl h-60 sm:h-64 md:h-70 w-full object-cover"
              src={Angsle}
              alt=""
            />
            <div className="p-5 space-y-3">
              <h1 className="text-2xl md:text-3xl font-bold">Angsle</h1>
              <p className="text-base sm:text-lg text-gray-600">
                Ketan dengan santan jahe dan bubur kacang hijau.
              </p>
              <p className="text-lg sm:text-xl font-semibold text-red-500">
                Rp. 20.000,-
              </p>
              <div className="my-5">
                <a className="bg-amber-300 py-3 px-6 rounded-lg" href="">
                  Pesan
                </a>
              </div>
            </div>
          </div>

          {/* === 12 === */}
          <div className="bg-white mx-auto rounded-2xl shadow-2xl w-full">
            <img
              className="rounded-t-xl h-60 sm:h-64 md:h-70 w-full object-cover"
              src={KentangMustofa}
              alt=""
            />
            <div className="p-5 space-y-3">
              <h1 className="text-2xl md:text-3xl font-bold">
                Terpikat Selera KentangMustofa
              </h1>
              <p className="text-base sm:text-lg text-gray-600">
                Selera kentang mustofa yang gurih dan renyah, cocok untuk
                camilan.
              </p>
              <p className="text-lg sm:text-xl font-semibold text-red-500">
                Rp. 30.000,-
              </p>
              <div className="my-5">
                <a className="bg-amber-300 py-3 px-6 rounded-lg" href="">
                  Pesan
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
    </div>
  );
}
export default Home;
