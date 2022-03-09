import { NextSeo } from "next-seo";
import Header from "./Header";

export default function Layout({ children, pageMeta }) {
	return (
		<>
			{pageMeta && (
				<NextSeo
					description={pageMeta.description}
					title={pageMeta.title}
					openGraph={{
						description: pageMeta.description,
						title: pageMeta.title,
					}}
				/>
			)}
			<div className="min-h-screen subpixel-antialiased">
				<Header />
				<main className="max-w-4xl mx-auto py-6 sm:px-6 lg:px-8">{children}</main>
			</div>
		</>
	);
}
