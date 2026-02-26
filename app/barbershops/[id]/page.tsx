import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/app/_components/ui/button";
//import { Separator } from "@/app/_components/ui/separator";
//import { ServiceItem } from "@/app/_components/ui/service-item";
//import { PhoneItem } from "@/app/_components/ui/phone-item";

//dessa forma eu pego ID dessa rota
const BarberShopPage = async (props: PageProps<"/barbershops/[id]">) => {
  const { id } = await props.params;
  const barbershop = await prisma.barbershop.findUnique({
    where: {
      id,
    },
  });
  if (!barbershop) {
    notFound();
  }
  return <div>BarberShopPage {barbershop?.name}</div>;
};

export default BarberShopPage;
