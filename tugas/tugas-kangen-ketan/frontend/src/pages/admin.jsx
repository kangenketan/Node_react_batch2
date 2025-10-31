import { useState } from "react";
import Header from "../components/Header";

function Admin() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Header />
      {/* Add top padding so content is not hidden behind the fixed header */}
      <div className="pt-28 px-6">
        <h1 className="text-2xl font-bold">
          Admin Kangen Ketan Cabang Wijaya Kusuma - Juanda 2
        </h1>

        <p className="read-the-docs mt-4">
          Halaman admin — sesuaikan konten dan menu di sini. Menu di atas
          mengikuti tampilan landing page.
        </p>

        {/* Placeholder admin controls — replace with real admin UI as needed */}
        <section className="mt-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 border rounded-lg">Manage Menu Items</div>
            <div className="p-4 border rounded-lg">Manage Events / Lokasi</div>
            <div className="p-4 border rounded-lg">Orders / Messages</div>
            <div className="p-4 border rounded-lg">Settings</div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Admin;
