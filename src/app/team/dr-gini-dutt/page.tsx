import Image from "next/image";
import Link from "next/link";
import React from "react";

const DrGiniDutt = () => {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Meet Dr. Gini Dutt
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mt-4">
          Dr.{" "}
          <span className="font-semibold text-sky-600">
            Gini Dutt, MD, FACP, DABOM
          </span>{" "}
          is a board-certified Internal Medicine physician specializing in
          Obesity Medicine. With over 19 years of experience, she helps patients
          achieve long-term health through weight management, preventive care,
          and chronic disease treatment.
        </p>
      </div>

      {/* Image Section */}
      <div className="flex justify-center my-8">
        <Image
          width={50}
          height={50}
          src="/image/gini-dutt-avatar.jpg"
          alt="Dr. Gini Dutt"
          className="w-48 h-48 rounded-full shadow-md"
        />
      </div>

      {/* Key Sections */}
      <div className="grid md:grid-cols-2 gap-8 mt-8">
        {/* Education & Training */}
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Education & Training
          </h3>
          <ul className="text-gray-700 space-y-3">
            <li>
              🎓 <strong>MD:</strong> Ross University School of Medicine
            </li>
            <li>
              🏥 <strong>Residency:</strong> West Suburban Medical Center
            </li>
            <li>
              📜 <strong>Board Certifications:</strong> Internal Medicine,
              Obesity Medicine
            </li>
            <li>
              🎖 <strong>Fellowship:</strong> American College of Physicians
              (FACP)
            </li>
          </ul>
        </div>

        {/* Areas of Expertise */}
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Areas of Expertise
          </h3>
          <ul className="text-gray-700 space-y-3">
            {[
              "Obesity & Weight Management",
              "Preventive Healthcare",
              "Chronic Disease Treatment",
              "Medical Education & Mentorship",
              "Veteran Healthcare",
            ].map((item, index) => (
              <li key={index} className="flex items-center">
                <span className="text-sky-500 mr-2">✔</span> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Philosophy */}
      <div className="mt-12 text-center">
        <h3 className="text-2xl font-semibold text-gray-900">
          Philosophy & Approach
        </h3>
        <p className="text-gray-700 max-w-3xl mx-auto mt-3">
          Dr. Dutt believes that every patient&apos;s health journey is unique.
          She emphasizes personalized treatment plans focused on long-term
          wellness, ensuring that patients feel supported in achieving their
          health goals.
        </p>
      </div>

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <h3 className="text-2xl font-semibold text-gray-900">
          Ready to Begin Your Health Journey?
        </h3>
        <p className="text-gray-700 mt-3 max-w-2xl mx-auto">
          If you&apos;re ready to take control of your health with a trusted
          medical expert, schedule a consultation with Dr. Gini Dutt today.
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

export default DrGiniDutt;
