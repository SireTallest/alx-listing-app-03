import { PropertyProps } from "@/interfaces";

const PropertyCard: React.FC<PropertyProps> = ({
  name,
  image,
  price,
  rating,
}) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md bg-white">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-gray-600">${price} / night</p>
        <p className="text-yellow-500">⭐ {rating}</p>
      </div>
    </div>
  );
};

export default PropertyCard;
