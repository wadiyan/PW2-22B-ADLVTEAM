import BannerIntro from "../../components/overview_ui/BannerIntro";
import { InfiniteMovingCard } from "../../components/overview_ui/InfiniteMovingCard";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="bg-white">
      <section>
        <BannerIntro />
      </section>

      {/* <CardCoutdown /> */}
      {/* <Carrousale/> */}
      {/* Hero Section */}
      {/* <section className="bg-gray-900 text-white py-20 bg-fill bg-center bg-[url('/assets/images/banner.JPG')]">

          <div className="container mx-auto py-10 text-center bg-black opacity-70 rounded-lg">
            <h1 className="text-4xl font-bold mb-4">Selamat Datang di ADLV</h1>
            <p className="text-lg mb-6">
              Belanja Jaket, Kaos, dan Hoodie dengan Mudah
            </p>
            <Link
              href={""}lassName="bg-white text-gray-900 px-6 py-3 rounded-md font-bold hover:bg-gray-100"
            >
              Lihat Katalog
            </Link>
          </div>
        </section> */}

      {/* Featured Products Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-black text-3xl font-bold ">Produk Terbaru</h2>
            <p className="text-sm font-sans">
              Jangan sampai ketinggalan update produk baru yang keren abis
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Product 1 */}
            <div className="bg-white shadow-md rounded-md overflow-hidden">
              <img
                src="/assets/images/tsirt-1.png"
                alt="Produk 1"
                className="w-full h-90 object-fill"
              />
              <div className="p-4">
                <h3 className="text-black font-bold text-lg">Jaket Keren</h3>
                <p className="text-gray-600">Rp 250.000</p>
                <Link
                  href={`/katalog/detail_produk?id=${1}`}
                  className="mt-4 inline-block bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-600"
                >
                  Detail
                </Link>
              </div>
            </div>

            {/* Product 2 */}
            <div className="bg-white shadow-md rounded-md overflow-hidden">
              <img
                src="/assets/images/ADLV-tsirt.png"
                alt="Produk 2"
                className="w-full h-90 object-fill"
              />
              <div className="p-4">
                <h3 className="text-black font-bold text-lg">Kaos Nyaman</h3>
                <p className="text-gray-600">Rp 150.000</p>
                <Link
                  href={`/katalog/detail_produk?id=${2}`}
                  className="mt-4 inline-block bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-600"
                >
                  Detail
                </Link>
              </div>
            </div>

            {/* Product 3 */}
            <div className="bg-white shadow-md rounded-md overflow-hidden">
              <img
                src="/assets/images/longTsirt-1.png"
                alt="Produk 3"
                className="w-full h-90 object-fill"
              />
              <div className="p-4">
                <h3 className="text-black font-bold text-lg">Hoodie Stylish</h3>
                <p className="text-gray-600">Rp 300.000</p>
                <Link
                  href={`/katalog/detail_produk?id=${3}`}
                  className="mt-4 inline-block bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-600"
                >
                  Detail
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="flex justify-center items-center flex-col mb-12">
        <h2 className="text-black text-3xl font-bold text-center ">
          Testimoni User
        </h2>
        <p className="mb-12">
          Ayo bagikan pengalaman berbelanja secara online menggunakan E-Katalog
          ADLV
        </p>
        <InfiniteMovingCard />
        <InfiniteMovingCard />
      </div>

      {/* Call to Action Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Bergabunglah Bersama Kami!
          </h2>
          <p className="text-lg mb-6">
            Nikmati pengalaman belanja yang nyaman dan mudah bersama ADLV.
          </p>
          <Link
            href={""}
            className="bg-gray-200 text-black px-6 py-3 rounded-md font-bold hover:bg-gray-600"
          >
            Daftar Sekarang
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
