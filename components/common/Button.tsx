import { ButtonPros } from "@/interfaces";

function Button({ children, className }: ButtonPros) {
  return <button className={className}>{children}</button>;
}
export default Button;
