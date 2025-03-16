import { FaArrowRight } from "react-icons/fa";

const SERVICES = [
  {
    name: "Obesity Management",
    description:
      "Personalized strategies for effective weight loss and maintenance.",
  },
  {
    name: "Nutritional Counseling",
    description: "Guidance on balanced diets and healthy eating habits.",
  },
  {
    name: "Physical Activity Coaching",
    description: "Customized exercise plans to enhance fitness levels.",
  },
];

export function Services() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
        Our Services
      </h2>
      <div className="overflow-hidden rounded-lg shadow-lg">
        <table className="w-full border-collapse bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-sky-700 text-white">
            <tr>
              <th className="py-4 px-6 text-left text-lg font-semibold">
                Service
              </th>
              <th className="py-4 px-6 text-left text-lg font-semibold">
                Description
              </th>
              {/* <th className="py-4 px-6 text-center text-lg font-semibold">
                More Info
              </th> */}
            </tr>
          </thead>
          <tbody>
            {SERVICES.map((service, index) => (
              <tr
                key={index}
                className="border-b transition duration-300 hover:bg-sky-50"
              >
                <td className="py-6 px-6 text-gray-900 text-lg font-medium">
                  {service.name}
                </td>
                <td className="py-6 px-6 text-gray-600">
                  {service.description}
                </td>
                {/* <td className="py-6 px-6 text-center">
                  <button className="flex items-center gap-2 bg-sky-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-sky-600 transition duration-300">
                    Learn More <FaArrowRight />
                  </button>
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Services;
