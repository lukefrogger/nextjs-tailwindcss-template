import Layout from "../components/Layout";

export default function Home() {
	const pageMeta = {
		title: "Next.js Template",
		description: "Get going faster!",
	};
	return (
		<Layout pageMeta={pageMeta}>
			<div className="flex justify-center">
				<h1 className="text-6xl font-light">Hello World!</h1>
			</div>
		</Layout>
	);
}
