"use client";

import { FaCheckCircle } from "react-icons/fa";
import CalendlyPopup from "./calendly-popup";
import Constants from "@/constants";

const ServicePhysicalActivityCounseling = () => {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-6">
        Physical Activity Counseling
      </h2>
      <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
        Exercise is not just about losing weight—it’s about **building strength,
        improving mobility, and enhancing your overall well-being**. At{" "}
        <span className="font-semibold text-sky-600">Utsah Health</span>, we
        provide **personalized fitness guidance** to help you move better, feel
        stronger, and stay motivated.
      </p>

      {/* Key Features */}
      <div className="grid md:grid-cols-2 gap-8 mt-10">
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Why Choose Our Program?
          </h3>
          <ul className="space-y-3">
            {[
              "Personalized Fitness Plans",
              "No Gym Required",
              "Science-Based & Safe",
              "Designed for All Fitness Levels",
              "Focus on Strength & Longevity",
            ].map((item, index) => (
              <li key={index} className="flex items-center text-gray-700">
                <FaCheckCircle className="text-sky-500 mr-3" /> {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="p-6 bg-white shadow-md rounded-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Who Can Benefit?
          </h3>
          <ul className="space-y-3">
            {[
              "Beginners looking to start a fitness routine",
              "Individuals with past injuries or mobility concerns",
              "Anyone struggling with motivation or consistency",
              "Those aiming to improve strength and endurance",
            ].map((item, index) => (
              <li key={index} className="flex items-center text-gray-700">
                <FaCheckCircle className="text-sky-500 mr-3" /> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Our Approach */}
      <div className="mt-12">
        <h3 className="text-2xl font-semibold text-gray-900 text-center mb-6">
          How Our Physical Activity Counseling Works
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Comprehensive Fitness Assessment",
              description:
                "We evaluate your fitness level, medical conditions, and goals to create a tailored movement plan.",
            },
            {
              title: "Personalized Movement Plan",
              description:
                "Custom workouts designed for strength, flexibility, endurance, and overall function.",
            },
            {
              title: "Education on Proper Form",
              description:
                "We guide you through safe and effective exercises to prevent injury and maximize results.",
            },
            {
              title: "Building Long-Term Habits",
              description:
                "Our goal is to help you create a fitness routine that fits your lifestyle and is easy to maintain.",
            },
            {
              title: "Progress Tracking & Adjustments",
              description:
                "Regular check-ins to modify your plan as you improve and set new goals.",
            },
          ].map((item, index) => (
            <div key={index} className="p-6 bg-white shadow-md rounded-lg">
              <h4 className="text-lg font-semibold text-gray-900">
                {item.title}
              </h4>
              <p className="text-gray-600 mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <h3 className="text-2xl font-semibold text-gray-900">
          Start Moving & Feeling Your Best!
        </h3>
        <p className="text-gray-700 mt-3 max-w-2xl mx-auto">
          Whether you&apos;re **just starting** or **looking to optimize your
          fitness**, our **expert guidance** will help you stay active, avoid
          injuries, and enjoy movement. Let&apos;s build a **stronger, healthier
          you** together!
        </p>
        <CalendlyPopup url={Constants.CALENDLY_URL} />
      </div>
    </section>
  );
};

export default ServicePhysicalActivityCounseling;
