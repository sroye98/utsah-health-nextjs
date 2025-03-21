"use client";

import { FaWeightScale } from "react-icons/fa6";
import { IoBicycle } from "react-icons/io5";
import { TbSaladFilled } from "react-icons/tb";
import ServiceCard from "./service-card";
import ServiceCardProps from "@/types/service-card-props";

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

const Services = () => {
  return (
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
  );
};

export default Services;
