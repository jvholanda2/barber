import Image from "next/image";
import { BarbershopService } from "../generated/prisma/client";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

interface ServiceItemProps {
  service: BarbershopService;
}

export function ServiceItem({ service }: ServiceItemProps);
