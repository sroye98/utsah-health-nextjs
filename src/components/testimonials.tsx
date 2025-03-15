"use client";

import { useState } from "react";
import Image from "next/image";

export function Testimonial() {
  const [active, setActive] = useState(3);

  const renderContent = (active: number) => {
    switch (active) {
      case 1:
        return (
          <>
            <h3 className="mb-4 font-bold lg:max-w-xs text-sky-900">
              Weight Loss Transformation
            </h3>
            <p className="mb-3 w-full lg:w-8/12 font-normal !text-gray-500">
              I had the pleasure of working with Dr. Dutt and with her help I
              was able to stay on track of my nutrition goals and make time to
              fit in workouts with my busy schedule.
            </p>
            <h6 className="mb-0.5 text-sky-900 font-semibold">Jessica</h6>
            <p className="font-normal mb-5 !text-gray-500 text-sm">
              Executive Mom with 4 young children
            </p>
          </>
        );
      case 2:
        return (
          <>
            <h3 className="mb-4 font-bold lg:max-w-xs text-sky-900">
              Dieting Relief
            </h3>
            <p className="mb-3 w-full lg:w-8/12 font-normal !text-gray-500">
              Working with Dr. Dutt helped to get rid of the endless cycle of
              dieting all the time and actually enjoying food.
            </p>
            <h6 color="blue-gray" className="mb-0.5 text-sky-900">
              David
            </h6>
            <p className="font-normal mb-5 !text-gray-500 text-sm">
              Busy Dad working long hours
            </p>
          </>
        );
      case 3:
        return (
          <>
            <h3 className="mb-4 font-bold lg:max-w-xs text-sky-900">
              New Wardrobe
            </h3>
            <p className="mb-3 w-full lg:w-8/12 font-normal !text-gray-500">
              Dr. Dutt took the time to learn my busy schedule with my kids
              which in turn helped us to determine the best time for me to
              actually get my rest in. It wasn't only eating right and working
              out I also needed to get my beatuy sleep.
            </p>
            <h6 color="blue-gray" className="mb-0.5 text-sky-900">
              Tina
            </h6>
            <p className="font-normal mb-5 !text-gray-500 text-sm">
              Stay-at-home Mom of 3 young daughters
            </p>
          </>
        );
    }
  };

  return (
    <section className="py-12 px-8 lg:py-24">
      <div className="container max-w-screen-lg mx-auto">
        <div className="container mx-auto mb-20 text-center">
          <h2 className="mb-4 lg:text-3xl !leading-tight text-3xl text-sky-800 font-bold">
            What Patients Say
          </h2>
          <p className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-8/12">
            Discover what patients have to say about their experiences working
            with Utsah Health. My patient&apos;s satisfaction is my greatest
            achievement!
          </p>
        </div>
        <div className="py-8 lg:flex-row">
          <div className="w-full lg:gap-10 h-full lg:!flex justify-between ">
            <div className="w-full mb-10 lg:mb-0">
              {renderContent(active)}
              <div className="flex items-center gap-4">
                <Image
                  height={10}
                  width={10}
                  src="/utsah-health-nextjs/image/avatar1.jpg"
                  alt="spotify"
                  className={`cursor-pointer rounded-sm w-10 h-10 ${
                    active === 1 ? "opacity-100" : "opacity-50"
                  }`}
                  onClick={() => setActive(1)}
                />
                <div className="w-[1px] h-[36px] bg-blue-gray-100 "></div>
                <Image
                  height={10}
                  width={10}
                  src="/utsah-health-nextjs/image/avatar2.jpg"
                  alt="spotify"
                  className={`cursor-pointer rounded-sm w-10 h-10 ${
                    active === 2 ? "opacity-100" : "opacity-50"
                  }`}
                  onClick={() => setActive(2)}
                />
                <div className="w-[1px] h-[36px] bg-blue-gray-100" />
                <Image
                  height={10}
                  width={10}
                  src="/utsah-health-nextjs/image/avatar3.jpg"
                  alt="spotify"
                  className={`cursor-pointer rounded-sm w-10 h-10 ${
                    active === 3 ? "opacity-100" : "opacity-50"
                  }`}
                  onClick={() => setActive(3)}
                />
              </div>
            </div>
            <div className="h-[21rem] rounded-lg w-full sm:w-[18rem] shrink-0">
              <Image
                width={768}
                height={768}
                alt="testimonial image"
                src={`/utsah-health-nextjs/image/avatar${active}.jpg`}
                className="h-full rounded-lg w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
