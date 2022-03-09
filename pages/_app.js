import { useRouter } from "next/router";
import splitbee from "@splitbee/web";
import { DefaultSeo } from "next-seo";
import { useEffect } from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	const router = useRouter();
	useEffect(() => {
		splitbee.init({
			apiUrl: "/_hive",
			scriptUrl: "/bee.js",
		});
	}, []);

	return (
		<>
			<DefaultSeo
				openGraph={{
					type: "website",
					url: `https://lukefrauhiger.com${router.asPath}`,
					site_name: "Luke Frauhiger",
					images: [
						{
							url: "https://www.lukefrauhiger.com/seo/luke_frauhiger_og.png",
							width: 1200,
							height: 630,
							alt: "Luke Frauhiger banner",
						},
					],
				}}
				twitter={{
					handle: "@lukefrogger",
					site: "@lukefrogger",
					cardType: "summary_large_image",
				}}
			/>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
