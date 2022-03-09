import Layout from "../components/Layout";

export default function Home() {
	const pageMeta = {
		title: "Luke Frauhiger | Developer, Entrepreneur, Engineer",
		description:
			"Welcome! I'm Luke, an indie developer, founder, and engineer who loves to build and design new things.",
	};
	return (
		<Layout pageMeta={pageMeta}>
			<div>Here's a thing</div>
		</Layout>
	);
}
