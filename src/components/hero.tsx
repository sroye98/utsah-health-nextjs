"use client";

import Image from "next/image";

const Hero = () => {
  return (
    <header className="bg-white p-8">
      <div className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2">
        <div className="row-start-2 lg:row-auto">
          <h1 className="mb-4 lg:text-5xl !leading-tight text-3xl text-sky-800 font-bold">
            Your Enthusiasm for a Healthier Life Starts Here
          </h1>
          <p className="mb-4 !text-gray-500 md:pr-16 xl:pr-28">
            Shedding excess weight can be a challenging journey, and it becomes
            even tougher when faced alone. For many individuals, achieving
            sustainable weight loss goes beyond simply breaking habits and
            increasing physical activity—it requires a customized approach
            tailored to their unique needs.
          </p>
          <p className="mb-4 !text-gray-500 md:pr-16 xl:pr-28">
            At Utsah Health, our dedicated healthcare professionals specialize
            in personalized weight management and nutritional guidance. No
            matter where you are in your weight loss journey, we’re here to
            support you in reaching the next level.
          </p>
        </div>
        <Image
          width={1024}
          height={1024}
          alt="team work"
          src="/image/avatar1.jpg"
          className="h-[36rem] w-full rounded-xl object-cover"
        />
      </div>
    </header>
  );
};

export default Hero;
