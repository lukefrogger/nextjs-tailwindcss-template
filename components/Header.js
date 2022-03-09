import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { FaTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { XIcon, MenuIcon } from "@heroicons/react/outline";
import whiteLogo from "../public/assets/logo-on-white.png";
import redLogo from "../public/assets/logo-on-dark.png";
import Image from "next/image";
import NavLink from "./NavLink";

const navItems = [
	{ icon: FaTwitter, href: "https://twitter.com/lukefrogger" },
	{ icon: FaGithub, href: "https://github.com/lukefrogger" },
	{ icon: FaLinkedinIn, href: "https://www.linkedin.com/in/luke-frauhiger-56639318b/" },
	{ title: "Blog", href: "/blog" },
	{ title: "About", href: "/about" },
];

export default function Header() {
	return (
		<Popover className="relative mt-12">
			<div className="max-w-4xl mx-auto px-4 sm:px-6">
				<div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
					<div className="flex justify-start lg:w-0 lg:flex-1">
						<NavLink href="/">
							<Image src={whiteLogo} alt="luke frauhiger logo" height={50} width={50} />
						</NavLink>
					</div>
					<div className="md:hidden">
						<Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-white bg-white/25">
							<span className="sr-only">Open menu</span>
							<MenuIcon className="h-6 w-6" aria-hidden="true" />
						</Popover.Button>
					</div>
					<div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
						{navItems.map((item) => (
							<NavLink href={item.href} external={!!item.icon} className="text-white hover:text-gray-200">
								{(item.icon && <item.icon className="flex-shrink-0 h-5 w-5" />) || item.title}
							</NavLink>
						))}
					</div>
				</div>
			</div>

			<Transition
				as={Fragment}
				enter="duration-200 ease-out"
				enterFrom="opacity-0 scale-95"
				enterTo="opacity-100 scale-100"
				leave="duration-100 ease-in"
				leaveFrom="opacity-100 scale-100"
				leaveTo="opacity-0 scale-95"
			>
				<Popover.Panel
					focus
					className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
				>
					<div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white">
						<div className="pt-5 px-5">
							<div className="flex items-center justify-between">
								<NavLink href="/">
									<Image src={redLogo} alt="luke frauhiger logo" height={50} width={50} />
								</NavLink>
								<Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
									<span className="sr-only">Close menu</span>
									<XIcon className="h-6 w-6" aria-hidden="true" />
								</Popover.Button>
							</div>
						</div>
						<div className="py-6 px-5 space-y-6">
							<div className="flex justify-between items-center">
								{navItems.map((item) => (
									<NavLink
										href={item.href}
										external={!!item.icon}
										className="text-gray-900 hover:text-gray-700"
									>
										{(item.icon && <item.icon className="flex-shrink-0 h-5 w-5" />) || item.title}
									</NavLink>
								))}
							</div>
						</div>
					</div>
				</Popover.Panel>
			</Transition>
		</Popover>
	);
}
