"use client";

import Link from "next/link";
import { useSelectedLayoutSegments } from "next/navigation";
import React from "react";

let tabs = [
	{
		name: "Dashboard",
		href: "/",
		key: "dashboard",
	},
	{
		name: "Sites",
		href: "/sites",
		key: "sites",
	},
	{
		name: "Settings",
		href: "/settings",
		key: "settings",
	},
];

export default function NavTabs() {
	const segments = useSelectedLayoutSegments();
	console.log({ segments });
	return (
		<div className="-mb-0.5 flex h-12 items-center justify-start space-x-2 overflow-x-auto scrollbar-hide">
			{tabs.map(({ name, href, key }) => (
				<Link
					key={href}
					href={href}
					className={`border-b-2 p-1 ${
						// hacky approach to getting the current tab – will replace with useSelectedLayoutSegments when upgrading to Next.js App Router
						// router.asPath
						// 	.split("?")[0]
						// 	.split("/")
						// 	.slice(0, slug ? 3 : 2)
						// 	.join("/") === href
						segments[0] === key ||
						(key === "dashboard" && segments.length === 0)
							? "border-black text-black"
							: "border-transparent text-gray-600 hover:text-black"
					}`}
				>
					<div className="px-3 py-2 transition-all duration-75 rounded-md hover:bg-gray-100 active:bg-gray-200">
						<p className="text-sm">{name}</p>
					</div>
				</Link>
			))}
		</div>
	);
}
