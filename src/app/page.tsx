"use client";

import Image from "next/image";
import ServiceCardProps from "@/types/service-card-props";
import { FaWeightScale } from "react-icons/fa6";
import { TbSaladFilled } from "react-icons/tb";
import { IoBicycle } from "react-icons/io5";
import ServiceCard from "@/components/service-card";
import Link from "next/link";

const SERVICES: ServiceCardProps[] = [
  {
    name: "Obesity Management",
    description:
      "Personalized strategies for effective weight loss and maintenance.",
    url: "/services/obesity-management",
    icon: <FaWeightScale className="h-6 w-6" />,
  },
  {
    name: "Nutritional Counseling",
    description: "Guidance on balanced diets and healthy eating habits.",
    url: "/services/nutritional-counseling",
    icon: <TbSaladFilled className="h-6 w-6" />,
  },
  {
    name: "Physical Activity Coaching",
    description: "Customized exercise plans to enhance fitness levels.",
    url: "/services/physical-activity-counseling",
    icon: <IoBicycle className="h-6 w-6" />,
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <header className="bg-white p-8">
        <div className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2">
          <div className="row-start-2 lg:row-auto">
            <h1 className="mb-4 lg:text-5xl !leading-tight text-3xl text-sky-800 font-bold">
              Your Enthusiasm for a Healthier Life Starts Here
            </h1>
            <p className="mb-4 !text-gray-500 md:pr-16 xl:pr-28">
              Shedding excess weight can be a challenging journey, and it
              becomes even tougher when faced alone. For many individuals,
              achieving sustainable weight loss goes beyond simply breaking
              habits and increasing physical activity—it requires a customized
              approach tailored to their unique needs.
            </p>
            <p className="mb-4 !text-gray-500 md:pr-16 xl:pr-28">
              At Utsah Health, our dedicated healthcare professionals specialize
              in personalized weight management and nutritional guidance. No
              matter where you are in your weight loss journey, we&apos;re here
              to support you in reaching the next level.
            </p>
          </div>
          <Link href="/team/dr-gini-dutt">
            <Image
              width={1024}
              height={1024}
              alt="team work"
              src="/image/gini-dutt.jpg"
              className="h-[36rem] w-full rounded-xl object-cover"
            />
          </Link>
        </div>
      </header>
      {/* End of Hero Section */}

      {/* Services Section */}
      <div className="max-w-5xl mx-auto px-4 py-10">
        <h2 className="text-center mb-8 lg:text-3xl !leading-tight text-3xl text-sky-800 font-bold">
          Our Services
        </h2>
        <div className="container mx-auto grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((props, idx) => (
            <ServiceCard key={idx} {...props} />
          ))}
        </div>
      </div>
      {/* End of Services Section */}

      {/* Contact Form */}
      <section className="px-8 py-16">
        <div className="container mx-auto text-center">
          <h1 className="mb-4 lg:text-3xl !leading-tight text-3xl text-sky-800 font-bold">
            Contact Us
          </h1>
          <p className="mx-auto w-full lg:w-5/12 !text-gray-500">
            Ready to get started? Feel free to reach out through the contact
            form, and let&apos;s embark on a journey of innovation and success.
          </p>
          <div className="mt-6">
            <Link
              href="/contact-us"
              className="bg-sky-500 text-white px-6 py-3 rounded-md shadow-md text-lg font-semibold hover:bg-sky-600 transition"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
      {/* End of Contact Form */}
    </>
  );
}
