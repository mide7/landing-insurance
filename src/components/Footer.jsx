import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelopeOpen,
  faMapMarkerAlt,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Footer() {
  return (
    <footer className=" bg-blue-primary text-white">
      <div className="container mx-auto flex flex-col md:flex-row gap-8 md:gap-4 justify-between mt-12 py-16 px-2">
        <div className="flex flex-col gap-4">
          <h1 className="font-semibold text-xl ">Contact Us</h1>
          <div>
            <FontAwesomeIcon icon={faPhoneAlt} className="text-xl" />
            <span> +2345678909</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faEnvelopeOpen} className="text-xl" />
            <span> Info@landing page.com</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-xl" />
            <span> Lorem ipsum dolor sit amet, </span>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="font-semibold text-xl">Sitemap</h1>
          <a href="#.">
            <span className="capitalize">home</span>
          </a>
          <a href="#.">
            <span className="capitalize">about us</span>
          </a>
          <a href="#.">
            <span className="capitalize">business insurance</span>
          </a>
          <a href="#.">
            <span className="capitalize">private insurance</span>
          </a>
          <a href="#.">
            <span className="capitalize">private client service</span>
          </a>
          <a href="#.">
            <span className="capitalize">contact us</span>
          </a>
          <a href="#.">
            <span className="capitalize">covid 19</span>
          </a>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="font-semibold text-xl">Stay Connected</h1>
          <div className="flex justify-between font-semibold max-w-2.25/5 md:max-w-full">
            <a href="#." className="hover:text-gray-300">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="#." className="hover:text-gray-300">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#." className="hover:text-gray-300">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
