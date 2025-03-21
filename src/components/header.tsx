"use client";

import Link from "next/link";

const Header = () => {
  return (
    <header className="relative flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white text-sm py-3">
      <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between">
        <div className="flex items-center justify-between">
          <Link
            className="flex-none font-semibold text-3xl text-sky-900 focus:outline-hidden focus:opacity-80"
            href="/"
            aria-label="Utsah Health"
          >
            Utsah Health
            {/* <span className="text-sky-600 ml-2">Medical Weight-Loss</span> */}
          </Link>
          <div className="sm:hidden">
            {/* <button
              type="button"
              className="hs-collapse-toggle relative size-9 flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
              id="hs-navbar-example-collapse"
              aria-expanded="false"
              aria-controls="hs-navbar-example"
              aria-label="Toggle navigation"
              data-hs-collapse="#hs-navbar-example"
            >
              <svg
                className="hs-collapse-open:hidden shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" x2="21" y1="6" y2="6" />
                <line x1="3" x2="21" y1="12" y2="12" />
                <line x1="3" x2="21" y1="18" y2="18" />
              </svg>
              <svg
                className="hs-collapse-open:block hidden shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
              <span className="sr-only">Toggle navigation</span>
            </button> */}
          </div>
        </div>
        <div
          id="hs-navbar-example"
          className="hidden hs-collapse overflow-hidden transition-all duration-300 basis-full grow sm:block"
          aria-labelledby="hs-navbar-example-collapse"
        >
          <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
            <Link
              className="font-medium text-gray-600 hover:text-gray-400 focus:outline-hidden focus:text-gray-400"
              href="/"
            >
              Home
            </Link>
            <Link
              className="font-medium text-gray-600 hover:text-gray-400 focus:outline-hidden focus:text-gray-400"
              href="/services/nutritional-counseling"
            >
              Nutritional Counseling
            </Link>
            <Link
              className="font-medium text-gray-600 hover:text-gray-400 focus:outline-hidden focus:text-gray-400"
              href="/services/obesity-management"
            >
              Obesity Management
            </Link>
            <Link
              className="font-medium text-gray-600 hover:text-gray-400 focus:outline-hidden focus:text-gray-400"
              href="/services/physical-activity-counseling"
            >
              Physical Activity Counseling
            </Link>
            <Link
              href="/contact-us"
              className="font-medium text-gray-600 hover:text-gray-400 focus:outline-hidden focus:text-gray-400"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
