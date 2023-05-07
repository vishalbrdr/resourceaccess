import Link from "next/link";

function MyLink({ name, className, href }) {
  return (
    <Link
      href={href ? href : "/"}
      title={name}
      className={className ? `link ${className}` : "link"}
    >
      {name}
    </Link>
  );
}

export default MyLink;
