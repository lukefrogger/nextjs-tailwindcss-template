import { useRouter } from "next/router";
import { DefaultSeo } from "next-seo";
import { useEffect } from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	const router = useRouter();
	useEffect(() => {
		// init js plugins here
	}, []);

	return (
		<>
			<DefaultSeo
				openGraph={{
					type: "website",
					url: `__url__${router.asPath}`,
					site_name: "next_template",
					images: [
						{
							url: "__url__/seo/luke_frauhiger_og.png",
							width: 1200,
							height: 630,
							alt: "alt name",
						},
					],
				}}
				twitter={{
					handle: "twitter",
					site: "siteName",
					cardType: "summary_large_image",
				}}
			/>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
