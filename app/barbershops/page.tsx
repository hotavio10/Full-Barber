import { db } from "@/app/_lib/prisma";
import { useRouter } from "next/router";
import { RouterContext } from "next/dist/shared/lib/router-context.shared-runtime";
import ServiceItem from "./[id]/_components/service-item";
import BarbershopInfo from "./[id]/_components/barbershop-info";


interface BarbershopDetailsPageProps {
  params: {
    id?: string;
  };
}
const BarbershopDetailsPage = async ({ params }: BarbershopDetailsPageProps) => {

  if (!params.id) {
    // TODO: redirecionar para home page
    return null;
  }
  const barbershop = await db.barbershop.findUnique({
    where: {
      id: params.id,
    },
    include: {
      services: true,
    },
  });

  if (!barbershop) {
    // TODO: redirecionar para home page
    return null
  }

  return (
    <div>
      <BarbershopInfo barbershop={barbershop} />

      {barbershop.services.map((service) => (
        <ServiceItem key={service.id} service={service} />
      ))}
    </div>
  );
};

export default BarbershopDetailsPage;