import { ExternalLinkIcon } from "@heroicons/react/outline";
import Link from "next/link";

export default function Header() {
	const poweredBy = [
		{ title: "TinaCMS", href: "https://tina.io" },
		{ title: "Next.js", href: "https://nextjs.org" },
		{ title: "Vercel", href: "https://vercel.com" },
	];
	return (
		<div className="fixed bottom-0 flex border-t border-primary-dark bg-primary-dark/50 text-sm w-full">
			<div className="border-r border-primary-dark px-6 text-white/70 py-2">Powered by:</div>
			{poweredBy.map((item) => (
				<div key={item.title} className="border-r border-primary-dark px-4 py-2 text-white/70 relative">
					{/* <Link> */}
					<a
						href={item.href}
						target="_blank"
						rel="noopener noreferrer"
						className="hover:underline underline-offset-4 no-underline"
					>
						{item.title}
						<span className="absolute text-highlight top-2 right-1">
							<ExternalLinkIcon className="h-3 w-3" />
						</span>
					</a>
					{/* </Link> */}
				</div>
			))}
		</div>
	);
}
