import Navbar from "@/components/app/navbar";
import NavTabs from "@/components/app/navbar/nav-tabs";
import React, { ReactNode } from "react";

interface DashboardLayoutProps {
	children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
	return (
		<div>
			<Navbar />
			{/* <NavTabs /> */}
			{children}
		</div>
	);
}
