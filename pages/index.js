import Image from "next/image";
import Layout from "../components/Layout";
import portrait from "../public/assets/portrait.png";

export default function Home() {
	const pageMeta = {
		title: "Luke Frauhiger | Developer, Entrepreneur, Engineer",
		description:
			"Welcome! I'm Luke, an indie developer, founder, and engineer who loves to build and design new things.",
	};
	return (
		<Layout pageMeta={pageMeta}>
			<div className="flex flex-col items-center">
				<div className="w-64">
					<Image src={portrait} alt="luke frauhiger" />
				</div>
				<h1 className="mt-8 text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl ">Hey, I'm Luke</h1>
				<p className="mt-5 font-light text-white sm:text-lg md:mt-5 md:text-3xl lg:mx-0 text-center">
					I bring ideas to life with web technologies.
				</p>
				<p className="mt-3 text-highlight sm:text-lg md:text-xl lg:mx-0 text-center">
					Full stack developer + Entrepreneur
				</p>
			</div>
		</Layout>
	);
}
