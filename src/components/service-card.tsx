import ServiceCardProps from "@/types/service-card-props";
import Link from "next/link";

const ServiceCard = ({ name, description, url, icon }: ServiceCardProps) => {
  return (
    <div className="bg-transparent">
      <Link href={url}>
        <div className="grid justify-center text-center">
          <div className="mx-auto mb-6 grid h-12 w-12 place-items-center rounded-full bg-gray-900 p-2.5 text-white shadow">
            {icon}
          </div>
          <h5 className="mb-2 text-sky-900">{name}</h5>
          <p className="px-8 font-normal !text-gray-500">{description}</p>
        </div>
      </Link>
    </div>
  );
};

export default ServiceCard;
