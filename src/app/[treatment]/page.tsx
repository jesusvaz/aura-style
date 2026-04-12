// app/[treatment]/page.tsx

import { treatments } from "../data/treatments";
import  {TreatmentPage } from "../compopnents/TreatmentPage"
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ treatment: string }>;
};

export default async function Page({ params }: Props) {
  const { treatment } = await params;

  const data = treatments.find((t) => t.slug === treatment);

  if (!data) return notFound();

  return (
    <TreatmentPage
      title={data.title}
      image={data.image}
      description={data.description}
    />
  );
}