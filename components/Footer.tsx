import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkedAlt,
} from "react-icons/fa";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center">
          <h2 className="text-2xl font-bold text-white">Sydney Move and Clean</h2>
          <Image src="/logoNegative.png" width={50} height={50} alt="Logo with truck and text SMC written on it"/>
          </div>
          
          <p className="mt-3 text-gray-400">
            Your trusted partner for cleaning & moving services.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="mt-3 space-y-2">
            <li>
              <Link href="/" className="hover:text-orange-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-orange-400 transition">
                Services
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-orange-400 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="tel:+61403838360" className="hover:text-orange-400 transition">
                Call Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}

        <div>
          <h3 className="text-lg font-semibold text-white">Contact Info</h3>
          <ul className="mt-3 space-y-2">
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-orange-400" />
              <a href="tel:61403838360">+61 403 838 360</a>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-orange-400" />
              <a href="mailto:info@wipeout.com">info@wipeout.com</a>
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkedAlt className="text-orange-400" />
              Sydney, Australia
            </li>
          </ul>
        </div>

        {/* Social Media & Copyright */}

        <div className="mt-8 border-t border-gray-700 pt-6 text-center">
          <div className="flex justify-center mb-4 gap-6">
            <a href="#" className="text-gray-400 hover:text-orange-400 transition"><FaFacebookF/></a>
            <a href="#" className="text-gray-400 hover:text-orange-400 transition"><FaTwitter/></a>
            <a href="#" className="text-gray-400 hover:text-orange-400 transition"><FaInstagram/></a>
          </div>
          <p className="text-gray-500">&copy; {new Date().getFullYear()} WipeOut Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
