"use client";

import { FaCheckCircle } from "react-icons/fa";
// import CalendlyPopup from "./calendly-popup";
// import Constants from "@/constants";

const ServiceObesityManagement = () => {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-6">
        Obesity Management
      </h2>
      <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
        Obesity is more than just diet and exercise—it’s a complex condition
        influenced by genetics, metabolism, and lifestyle. At{" "}
        <span className="font-semibold text-sky-800">Utsah Health</span>, we
        provide a science-backed, personalized approach to help you achieve
        long-term weight loss and improved health.
      </p>

      {/* Key Features */}
      <div className="grid md:grid-cols-2 gap-8 mt-10">
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            What Makes Our Program Unique?
          </h3>
          <ul className="space-y-3">
            {[
              "Personalized Assessments",
              "Evidence-Based Treatment",
              "One-on-One Support",
              "Holistic & Sustainable Approach",
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
              "Struggling with long-term weight loss",
              "BMI over 30 (or 27+ with health conditions)",
              "Emotional or stress eating habits",
              "Doctor-advised weight loss for health reasons",
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
          Our Approach to Obesity Treatment
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Medical & Metabolic Evaluation",
              description:
                "Assessing hormones, metabolism, and medical history to customize your weight loss plan.",
            },
            {
              title: "Nutrition & Meal Planning",
              description:
                "Helping you develop a balanced, sustainable diet tailored to your preferences.",
            },
            {
              title: "Exercise & Movement Strategies",
              description:
                "Personalized fitness plans that align with your lifestyle and health goals.",
            },
            {
              title: "Behavioral & Mindset Coaching",
              description:
                "Identifying triggers and developing strategies to build lifelong healthy habits.",
            },
            {
              title: "Medication & Advanced Therapies",
              description:
                "FDA-approved weight-loss medications when medically necessary, supervised by professionals.",
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
          Start Your Journey Today!
        </h3>
        <p className="text-gray-700 mt-3 max-w-2xl mx-auto">
          Obesity is a medical condition, not a personal failure. At{" "}
          <span className="font-semibold text-sky-600">Utsah Health</span>,
          we’re here to support you with **evidence-based care** and a
          **personalized plan** to help you achieve a healthier life.
        </p>
        {/* <CalendlyPopup url={Constants.CALENDLY_URL} /> */}
      </div>
    </section>
  );
};

export default ServiceObesityManagement;
