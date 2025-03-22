"use client";

import Link from "next/link";

const CURRENT_YEAR = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="mt-10 px-8 pt-20">
      <div className="container mx-auto">
        <div className="mt-16 flex flex-wrap items-center justify-center gap-y-4 border-t border-gray-200 py-6 md:justify-between">
          <p className="text-center font-normal !text-gray-700">
            &copy; {CURRENT_YEAR} <Link href="/">Utsah Health</Link>
          </p>
          <ul className="flex gap-8 items-center">
            <li>
              <Link
                href="/services/nutritional-counseling"
                className="hover:text-sky-600 text-sky-800"
              >
                Nutritional Counseling
              </Link>
            </li>
            <li>
              <Link
                href="/services/obesity-management"
                className="hover:text-sky-600 text-sky-800"
              >
                Obesity Managment
              </Link>
            </li>
            <li>
              <Link
                href="/services/physical-activity-counseling"
                className="hover:text-sky-600 text-sky-800"
              >
                Physical Activity Counseling
              </Link>
            </li>
            <li></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
