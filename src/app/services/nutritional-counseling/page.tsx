"use client";

import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";

const NutritionalCounseling = () => {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-sky-800 text-center mb-6">
        Nutritional Counseling
      </h2>
      <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
        Nutrition plays a key role in overall health, but with so much
        conflicting information, it can be overwhelming. At{" "}
        <span className="font-semibold text-sky-600">Utsah Health</span>, we
        provide nutritional guidance to help you develop a sustainable, balanced
        diet that supports your healthy weight-loss goals.
      </p>

      {/* Key Features */}
      <div className="grid md:grid-cols-2 gap-8 mt-10">
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h3 className="text-xl font-semibold text-sky-900 mb-3">
            What Makes Our Program Unique?
          </h3>
          <ul className="space-y-3">
            {[
              "Personalized Meal Planning",
              "Evidence-Based Guidance",
              "One-on-One Support & Accountability",
              "Education & Empowerment",
            ].map((item, index) => (
              <li key={index} className="flex items-center text-gray-700">
                <FaCheckCircle className="text-sky-500 mr-3" /> {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="p-6 bg-white shadow-md rounded-lg">
          <h3 className="text-xl font-semibold text-sky-900 mb-3">
            Who Can Benefit?
          </h3>
          <ul className="space-y-3">
            {[
              "Struggling with yo-yo dieting",
              "Managing weight-related health conditions",
              "Experiencing emotional or stress eating",
              "Seeking a long-term, realistic approach to healthy eating",
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
          How Our Nutritional Counseling Works
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Comprehensive Nutrition Assessment",
              description:
                "Identify nutritional gaps, food sensitivities, and eating behaviors.",
            },
            {
              title: "Personalized Nutrition Plan",
              description:
                "Customized meal plans based on your goals, preferences, and lifestyle.",
            },
            {
              title: "Education & Habit-Building",
              description:
                "Learn to read food labels, manage portions, and make sustainable choices.",
            },
            {
              title: "Ongoing Support & Adjustments",
              description:
                "Regular check-ins to track progress and make necessary changes.",
            },
            {
              title: "Mindful Eating & Emotional Health",
              description:
                "Understand and manage stress eating or emotional food triggers.",
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
        <h3 className="text-2xl font-semibold text-sky-900">
          Ready to Take Control of Your Nutrition?
        </h3>
        <p className="text-gray-700 mt-3 max-w-2xl mx-auto">
          At <span className="font-semibold text-sky-600">Utsah Health</span>,
          we empower you with practical, evidence-based nutrition guidance to
          help you feel your best. Whether your goal is weight loss, better
          digestion, or long-term wellness, we&apos;ll guide you every step of
          the way.
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

export default NutritionalCounseling;
