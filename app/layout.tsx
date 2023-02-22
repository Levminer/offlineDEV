"use client"

import BottomNav from "./BottomNav"
import Drawer from "./Drawer"
import "./index.css"
import TopNav from "./TopNav"

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head />

			<body>
				<div className="flex flex-col h-screen">
					<TopNav />
					<main className="flex flex-row overflow-hidden">
						<Drawer />
						<div className="inset-y-0 left-0 z-10 bg-green-400 w-1/3 hidden test2">
							<div className="flex h-full items-center justify-center text-4xl">Mobile Navbar</div>
						</div>
						<div className="overflow-y-auto w-full">{children}</div>
					</main>
					<BottomNav />
				</div>
			</body>
		</html>
	)
}
