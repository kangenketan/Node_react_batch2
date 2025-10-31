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
      <section
        className="flex items-center h-screen"
        style={{
          backgroundImage: `url(${Hero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto text-center">
          <h1 className="text-6xl font-bold text-white mb-4">Kangen Ketan</h1>
          <p className="text-2xl text-white mb-8">
            Nikmati lezatnya ketan tradisional dengan cita rasa kekinian yang
            menggoda selera.
          </p>
          <button className="bg-green-500 px-6 py-3 rounded-md text-white text-xl font-semibold hover:bg-green-600 transition duration-300">
            Kangen, Order sekarang ya Kak
          </button>
        </div>
      </section>

      <section className="px-15 py-20">
        <div className="flex flex-col justify-center mx-auto mb-15">
          <h1 className="text-5xl font-bold text-center">MENU KANGEN KETAN</h1>
          <div className="text-center pt-5">
            <ul className="flex justify-center gap-10 text-xl font-semibold">
              <li>
                <a className="bg-orange-400 px-3 py-1 rounded-xl href=">
                  Klasik
                </a>
              </li>
              <li>
                <a className="bg-orange-400 px-3 py-1 rounded-xl href=">
                  Kekinian
                </a>
              </li>
              <li>
                <a className="bg-orange-400 px-3 py-1 rounded-xl href=">Buah</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-5">
          <div className="bg-white mx-auto rounded-2xl shadow-2xl">
            <img className="rounded-t-xl h-70 w-full" src={Ketan1} alt="" />

            <div className="p-5 space-y-3">
              <h1 className="text-3xl font-bold">Ketan Bubuk Kelapa</h1>
              <p className="text-xl text-gray-60">
                Ketan pulen ditaburin dengan bubuk kedelai yang renyah dan
                didampingin parutan kelapa muda seger
              </p>
              <p className="text-xl font-semibold text-red-500">Rp. 15.000,-</p>
              <div className="my-5">
                <a className="bg-amber-300 py-3 px-6 rounded-lg" href="">
                  Pesan
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white mx-auto rounded-2xl shadow-2xl">
            <div>
              <img className="rounded-t-xl h-70 w-full" src={Ketan2} alt="" />
            </div>

            <div className="p-5 space-y-3">
              <h1 className="text-3xl font-bold">Manggo Sticky Rice</h1>
              <p className="text-xl text-gray-60">
                Ketan Mangga dilumerin dengan fla pilihan dengan cita rasa susu
                yang kental manis
              </p>
              <p className="text-xl font-semibold text-red-500">Rp. 35.000,-</p>
              <div className="my-5">
                <a className="bg-amber-300 py-3 px-6 rounded-lg" href="">
                  Pesan
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white mx-auto rounded-2xl shadow-2xl">
            <img className="rounded-t-xl h-70 w-full" src={Ketan3} alt="" />

            <div className="p-5 space-y-3">
              <h1 className="text-3xl font-bold">Ketan Keju Meses Susu</h1>
              <p className="text-xl text-gray-60">
                Ketan maniak dengan taburan keju meses susu yang lumer di mulut
              </p>
              <p className="text-xl font-semibold text-red-500">Rp. 20.000,-</p>
              <div className="my-5">
                <a className="bg-amber-300 py-3 px-6 rounded-lg" href="">
                  Pesan
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white mx-auto rounded-2xl shadow-2xl">
            <img className="rounded-t-xl h-70 w-full" src={Ketan4} alt="" />

            <div className="p-5 space-y-3">
              <h1 className="text-3xl font-bold">Ketan Oreo Susu</h1>
              <p className="text-xl text-gray-60">
                Ketan taburan oreo dengan dibalurin susu manis yang creamy
              </p>
              <p className="text-xl font-semibold text-red-500">Rp. 15.000,-</p>
              <div className="my-5">
                <a className="bg-amber-300 py-3 px-6 rounded-lg" href="">
                  Pesan
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white mx-auto rounded-2xl shadow-2xl">
            <img className="rounded-t-xl h-70 w-full" src={Ketan5} alt="" />

            <div className="p-5 space-y-3">
              <h1 className="text-3xl font-bold">Ketan Serundeng</h1>
              <p className="text-xl text-gray-60">
                Ketan yang lembut dan serundeng kelapa kaya rasa.
              </p>
              <p className="text-xl font-semibold text-red-500">Rp. 15.000,-</p>
              <div className="my-5">
                <a className="bg-amber-300 py-3 px-6 rounded-lg" href="">
                  Pesan
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white mx-auto rounded-2xl shadow-2xl">
            <img className="rounded-t-xl h-70 w-full" src={Ketan6} alt="" />

            <div className="p-5 space-y-3">
              <h1 className="text-3xl font-bold">Ketan Juruh</h1>
              <p className="text-xl text-gray-60">
                Ketan pulen, gurih kelapa parut, disiram Juruh Gula Aren asli.
              </p>
              <p className="text-xl font-semibold text-red-500">Rp. 15.000,-</p>
              <div className="my-5">
                <a className="bg-amber-300 py-3 px-6 rounded-lg" href="">
                  Pesan
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white mx-auto rounded-2xl shadow-2xl">
            <img className="rounded-t-xl h-70 w-full" src={Ketan7} alt="" />

            <div className="p-5 space-y-3">
              <h1 className="text-3xl font-bold">Ketan Ikan Teri</h1>
              <p className="text-xl text-gray-60">
                Ketan pulen hangat, gurihnya teri renyah, dibalut sambal pedas.
              </p>
              <p className="text-xl font-semibold text-red-500">Rp. 15.000,-</p>
              <div className="my-5">
                <a className="bg-amber-300 py-3 px-6 rounded-lg" href="">
                  Pesan
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white mx-auto rounded-2xl shadow-2xl">
            <img className="rounded-t-xl h-70 w-full" src={Ketan8} alt="" />

            <div className="p-5 space-y-3">
              <h1 className="text-3xl font-bold">Ketan Abon Tuna</h1>
              <p className="text-xl text-gray-60">
                Ketan pulen hangat dan abon tuna yang renyah.
              </p>
              <p className="text-xl font-semibold text-red-500">Rp. 15.000,-</p>
              <div className="my-5">
                <a className="bg-amber-300 py-3 px-6 rounded-lg" href="">
                  Pesan
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white mx-auto rounded-2xl shadow-2xl">
            <img className="rounded-t-xl h-70 w-full" src={Ketan9} alt="" />

            <div className="p-5 space-y-3">
              <h1 className="text-3xl font-bold">Ketan Durian</h1>
              <p className="text-xl text-gray-60">
                Ketan pulen dengan durian pilihan dilumerin fla susu.
              </p>
              <p className="text-xl font-semibold text-red-500">Rp. 35.000,-</p>
              <div className="my-5">
                <a className="bg-amber-300 py-3 px-6 rounded-lg" href="">
                  Pesan
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white mx-auto rounded-2xl shadow-2xl">
            <img className="rounded-t-xl h-70 w-full" src={Ketan10} alt="" />

            <div className="p-5 space-y-3">
              <h1 className="text-3xl font-bold">Ketan Inti</h1>
              <p className="text-xl text-gray-60">Ketan inti kelapa hangat.</p>
              <p className="text-xl font-semibold text-red-500">Rp. 15.000,-</p>
              <div className="my-5">
                <a className="bg-amber-300 py-3 px-6 rounded-lg" href="">
                  Pesan
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white mx-auto rounded-2xl shadow-2xl">
            <img className="rounded-t-xl h-70 w-full" src={Angsle} alt="" />

            <div className="p-5 space-y-3">
              <h1 className="text-3xl font-bold">Angsle</h1>
              <p className="text-xl text-gray-60">
                Ketan dengan santan jahe dan bubur kacang hijau.
              </p>
              <p className="text-xl font-semibold text-red-500">Rp. 20.000,-</p>
              <div className="my-5">
                <a className="bg-amber-300 py-3 px-6 rounded-lg" href="">
                  Pesan
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white mx-auto rounded-2xl shadow-2xl">
            <img
              className="rounded-t-xl h-70 w-full"
              src={KentangMustofa}
              alt=""
            />

            <div className="p-5 space-y-3">
              <h1 className="text-3xl font-bold">
                Terpikat Selera KentangMustofa
              </h1>
              <p className="text-xl text-gray-60">
                Selera kentang mustofa yang gurih dan renyah, cocok untuk
                camilan.
              </p>
              <p className="text-xl font-semibold text-red-500">Rp. 30.000,-</p>
              <div className="my-5">
                <a className="bg-amber-300 py-3 px-6 rounded-lg" href="">
                  Pesan
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className=" flex justify-center mx-auto gap-15">
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31917.399860970912!2d117.1325973!3d-0.4856715!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df67fb6867e1691%3A0x47a6f95566e3b254!2sKangen%20Ketan%20Cabang%20Wijaya%20Kusuma%20Juanda%202%20Samarinda!5e0!3m2!1sid!2sid!4v1761891895198!5m2!1sid!2sid"
              width="600"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div>
            <video controls className="max-h-[450px]">
              <source
                src="./src/assets/video\WhatsApp Video 2025-10-31 at 2.28.28 PM.mp4"
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
