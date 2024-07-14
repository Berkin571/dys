import { CardCarousel } from "../../components";

export function LectureCompanies() {
  const cardData = [
    {
      title: "UG",
      price: "Kaufpreis <strong>25.000 Euro</strong>",
      description: "inkl. 500 Euro eingezahltes Kapital",
    },
    {
      title: "GmbH",
      price: "Kaufpreis <strong>50.000 Euro</strong>",
      description: "inkl. 1.000 Euro eingezahltes Kapital",
    },
  ];

  return <CardCarousel cards={cardData} />;
}
