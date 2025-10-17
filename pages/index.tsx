// pages/index.tsx
import Image from "next/image";
import { HERO_BACKGROUND, PROPERTYLISTINGSAMPLE } from "@/constants";
import Card from "@/components/common/Card";
import Button from "@/components/common/Button";
import Pill from "@/components/common/Pill";

const filters = [
  "All",
  "Top Villa",
  "Free Reschedule",
  "Book now, pay later",
  "Self checkIn",
  "Instant book",
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full px-4 py-6 bg-white pl-20 pr-20">
        <div className="relative w-full h-[40vh] md:h-[50vh] lg:h-[60vh] rounded-2xl overflow-hidden">
          <Image
            src={HERO_BACKGROUND}
            alt="Hero background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 rounded-2xl" />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 max-w-4xl leading-tight">
              Find your favorite place here!
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl max-w-2xl">
              The best prices for over 2 million properties worldwide
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="flex flex-wrap gap-3 justify-center px-4 py-6 bg-white">
        {filters.map((label, index) => (
          <Pill key={index} label={label} />
        ))}
        <></>
      </section>

      {/* Listing Section */}
      <section className="px-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4 pb-10 bg-white">
        {PROPERTYLISTINGSAMPLE.map((property, idx) => (
          <Card key={idx}>
            <div className="relative w-full h-52 rounded-lg overflow-hidden mb-4">
              <Image
                src={property.image}
                alt={property.name}
                layout="fill"
                objectFit="cover"
                priority={idx === 0}
              />
            </div>
            <h2 className="text-xl font-semibold">{property.name}</h2>
            <p className="text-sm text-gray-600">
              {property.address.city}, {property.address.state},{" "}
              {property.address.country}
            </p>
            <p className="mt-1 text-sm">Rating: ⭐ {property.rating}</p>
            <p className="font-semibold mt-1">${property.price}</p>
            <Button className="mt-3">Book Now</Button>
          </Card>
        ))}
      </section>
    </>
  );
}
