"use client"

import BottomNav from "./BottomNav"
import Drawer from "./Drawer"
import "./index.css"
import TopNav from "./TopNav"
import { useState } from "react"

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head />

			<body>
				<div className="flex h-screen flex-col">
					<TopNav />
					<main className="flex flex-row overflow-hidden">
						<Drawer />
						<div className="test2 inset-y-0 left-0 z-10 hidden w-1/3 bg-green-400">
							<div className="flex h-full items-center justify-center text-4xl">Mobile Navbar</div>
						</div>
						<div className="w-full overflow-y-auto">{children}</div>
					</main>
					<BottomNav />
				</div>
			</body>
		</html>
	)
}
