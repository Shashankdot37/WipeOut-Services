import Image from "next/image";
import { footerLinks } from "@/constants";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="flex flex-col text-black-100 border-gray-100 border-t mt-6 pt-6">
        <div className="flex flex-col justify-start item-start gap-6 ml-4">
          <Image
            src="/logo.svg"
            alt="WipeOut logo"
            width={118}
            height={18}
            className="object-contain"
          />
          <p className="text-base text-gray-700">
            WipeOut Services <br />
            All rights reserved &copy;
          </p>
          <div className="footer__links">
            {footerLinks.map((link) => (
              <div key={link.title} className="footer__link">
                <h3 className="font-bold">{link.title}</h3>
                {link.links.map((item) => (
                  <Link href={item.url} key={item.title}>
                    <p className="text-gray-500">{item.title}</p>
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
