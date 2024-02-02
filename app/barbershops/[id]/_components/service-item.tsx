import { Service } from "@prisma/client";

interface ServiceItemProps {
  service: Service;
}

const ServiceItem = ({ service }: ServiceItemProps) => {
  return <h1>{service.name}</h1>;
};

export default ServiceItem;