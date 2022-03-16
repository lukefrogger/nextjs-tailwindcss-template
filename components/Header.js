import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { XIcon, MenuAlt3Icon } from "@heroicons/react/outline";
import whiteLogo from "../public/assets/logo-on-white.png";
import redLogo from "../public/assets/logo-on-dark.png";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
	return (
		<Popover className="relative">
			<div className="max-w-4xl mx-auto ">
				<div className="flex justify-between items-center py-6 px-6 sm:px-4 mx-4 md:mx-0 md:justify-start">
					<div className="flex justify-start lg:w-0 lg:flex-1 relative">
						<Link href="/">
							<div className="flex items-center">
								<Image src={whiteLogo} alt="luke frauhiger logo" height={30} width={30} />
							</div>
						</Link>
					</div>
					<div className="md:hidden">
						<Popover.Button className="rounded-md p-2 inline-flex items-center justify-center">
							<span className="sr-only">Open menu</span>
							<MenuAlt3Icon className="h-8 w-8 " aria-hidden="true" />
						</Popover.Button>
					</div>
					<div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
						<Link href="/">Home</Link>
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
								<Link href="/">
									<Image src={redLogo} alt="luke frauhiger logo" height={30} width={30} />
								</Link>
								<Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
									<span className="sr-only">Close menu</span>
									<XIcon className="h-6 w-6" aria-hidden="true" />
								</Popover.Button>
							</div>
						</div>
						<div className="py-6 px-5 space-y-6">
							<div className="flex justify-between items-center">
								<Link href="/">Home</Link>
							</div>
						</div>
					</div>
				</Popover.Panel>
			</Transition>
		</Popover>
	);
}
