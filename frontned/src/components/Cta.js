import MyLink from "./Link";

export default function Cta({ name, className, href }) {
  return (
    <MyLink
      name={name}
      href={href}
      className={className ? `cta ${className}` : "cta"}
    />
  );
}
