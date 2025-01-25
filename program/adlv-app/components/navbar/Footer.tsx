"use client";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Logo dan Info */}
          <div>
            <h1 className="text-xl font-bold">ADLV</h1>
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} ADLV. Semua Hak Dilindungi.
            </p>
          </div>

          {/* Navigasi */}
          <div className="flex space-x-6">
            <a
              href="/about"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Tentang Kami
            </a>
            <a
              href="/kontak"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Kontak
            </a>
            <a
              href="/kebijakan"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Kebijakan Privasi
            </a>
          </div>

          {/* Media Sosial */}
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
