"use client";

import Image from "next/image";

export function Hero() {
  return (
    <header className="bg-white p-8">
      <div className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2">
        <div className="row-start-2 lg:row-auto">
          <h1 className="mb-4 lg:text-5xl !leading-tight text-3xl text-sky-800 font-bold">
            Utsah Health
          </h1>
          <p className="mb-4 !text-gray-500 md:pr-16 xl:pr-28">
            I&apos;m Dr. Gini Dutt MD , a practicing phyisician with over 15
            years of experience. I have bene helping individuals reclaim their
            health since 2010. Utsah Health is a membership-based practice
            prodivind 1-on-1 care for thos commited to a healthier lifestyle.
          </p>
        </div>
        <Image
          width={1024}
          height={1024}
          alt="team work"
          src="/utsah-health-nextjs/image/image-7.svg"
          className="h-[36rem] w-full rounded-xl object-cover"
        />
      </div>
    </header>
  );
}

export default Hero;
