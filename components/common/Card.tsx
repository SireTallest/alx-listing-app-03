import { CardProps } from "@/interfaces";
function Card({ children, className }: CardProps) {
  return <div className={className}>{children}</div>;
}
export default Card;
