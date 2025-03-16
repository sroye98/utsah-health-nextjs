"use client";

import Link from "next/link";

const NavBar = () => {
  return (
    <div className="container mx-auto px-4 bg-white">
      <h1 className="text-6xl font-bold text-sky-900 mt-8 pt-8">
        <Link href="/">Utsah Health</Link>
      </h1>
      <h4 className="text-5xl text-sky-700 ml-9 my-0 py-0 font-bold italic">
        <Link href="/">Medical Weight-Loss</Link>
      </h4>
    </div>
  );
};

export default NavBar;
