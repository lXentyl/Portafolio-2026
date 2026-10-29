import useReveal from "../hooks/useReveal";

export default function Reveal({ children, className = "", as = "div", ...props }) {
  const Tag = as;
  const ref = useReveal();
  return <Tag ref={ref} className={`reveal ${className}`} {...props}>{children}</Tag>;
}
