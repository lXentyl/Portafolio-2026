import useReveal from "../hooks/useReveal";

export default function Reveal({ children, className = "", as = "div", delay = 0, style, ...props }) {
  const Tag = as;
  const ref = useReveal();
  return <Tag ref={ref} style={{ ...style, "--reveal-delay": `${delay}ms` }} className={`reveal ${className}`} {...props}>{children}</Tag>;
}
