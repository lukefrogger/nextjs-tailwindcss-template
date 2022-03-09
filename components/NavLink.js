import Link from "next/link";

export default function NavLink({ href, external, children, className }) {
	if (external) {
		<a href={href} className="whitespace-nowrap text-base font-medium">
			{children}
		</a>;
	}

	return (
		<Link href={href ?? "#"} passHref>
			<a className={`whitespace-nowrap text-base font-medium px-2${className ? ` ${className}` : ""}`}>
				{children}
			</a>
		</Link>
	);
}
