"use client";

import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";

const ObesityManagement = () => {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-sky-800 text-center mb-6">
        Obesity Management
      </h2>
      <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
        Obesity is more than just diet and exercise—it&apos;s a complex
        condition influenced by genetics, metabolism, and lifestyle. At{" "}
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
              "Physician-Led Weight Loss Program",
              "One-on-One Support",
              "Holistic & Sustainable Approach",
              "Telemedicine & Remote Monitoring",
              "Conduct appointments from anywhere",
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
              "Emotional or stress eating habits",
              "Doctor-advised weight loss for health reasons",
              "Patients with obesity-related health complications",
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
        <h3 className="text-2xl font-semibold text-sky-900 text-center mb-6">
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
                "Provide guidance on physical activity, workouts, and lifestyle changes.",
            },
            {
              title: "Medication",
              description:
                "FDA-approved weight-loss medications when medically necessary, supervised by Dr. Gini Dutt.",
            },
          ].map((item, index) => (
            <div key={index} className="p-6 bg-white shadow-md rounded-lg">
              <h4 className="text-lg font-semibold text-sky-900">
                {item.title}
              </h4>
              <p className="text-gray-600 mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <h3 className="text-2xl font-semibold text-sky-900">
          Start Your Journey Today!
        </h3>
        <p className="text-gray-700 mt-3 max-w-2xl mx-auto">
          Obesity is a chronic medical disease, not a personal failure. At{" "}
          <span className="font-semibold text-sky-600">Utsah Health</span>,
          we&apos;re here to support you with evidence-based care and a
          personalized plan to help you achieve a healthier life.
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
  );
};

export default ObesityManagement;
