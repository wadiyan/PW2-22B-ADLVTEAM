import React from "react";
import TypingEffect from "./TypingEffect";
import CardCoutdown from "./CardCoutdown";
import Link from "next/link";

const BannerIntro = () => {
  return (
    <>
      <div className="hero bg-white min-h-screen">
        <div className="hero-content flex flex-col lg:flex-row-reverse gap-10 lg:gap-20 flex-wrap items-center lg:items-start">
          <img
            src="/assets/images/model-2.png"
            alt="Model ADLV"
            className=" w-screen lg:max-w-md rounded-lg shadow-lg"
          />
          <div className="flex flex-col flex-wrap gap-y-10 w-full lg:w-1/2">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold text-black">
                <TypingEffect />
              </h1>
              <p className="py-6 text-black leading-relaxed">
                <strong>
                  ADLV adalah platform web e-katalog yang didedikasikan untuk
                  menyediakan informasi pilihan pakaian berkualitas produk ADLV
                  bagi masyarakat di Bandar Lampung dan sekitarnya.
                </strong>
                Dengan fokus pada gaya modern dan tren terkini, ADLV
                menghadirkan produk-produk fashion yang dirancang khusus untuk
                memenuhi kebutuhan lokal, mulai dari pakaian kasual hingga
                semi-formal.
              </p>
              <button className="bg-gray-900 text-white hover:bg-gray-700 px-8 py-4 rounded-full transition duration-300">
                <Link href={"/katalog"}>Lihat Katalog</Link>
              </button>
            </div>
            <div>
              <CardCoutdown />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerIntro;
