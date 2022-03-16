import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					{/* https://realfavicongenerator.net/ */}
					<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
					<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
					<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
					<link rel="manifest" href="/site.webmanifest" />
					<meta name="theme-color" content="#450404" />
				</Head>
				<body className="text-white duration-300 font-nunito bg-brand">
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
