import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-around">
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold border-b-2 pb-2 mb-4">
              About Us
            </h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-400">
                  Our Story
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-400">
                  Team
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-400">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold border-b-2 pb-2 mb-4">
              Contact
            </h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-400">
                  Email
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-400">
                  Phone
                </a>
              </li>
            </ul>
          </div>
          <div className="flex justify-center md:mt-0 mt-6">
            <a href="#" className="text-gray-400 hover:text-white mx-2">
              Facebook
            </a>
            <a href="#" className="text-gray-400 hover:text-white mx-2">
              Twitter
            </a>
            <a href="#" className="text-gray-400 hover:text-white mx-2">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
