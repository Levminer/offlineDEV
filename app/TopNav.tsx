import React from "react"

const TopNav = () => {
	const test = () => {
		document.querySelector(".test2")?.classList.toggle("hidden")
		document.querySelector(".test2")?.classList.toggle("absolute")
	}

	return (
		<div className="py-5 bg-gray-900 text-white text-center flex items-baseline">
			<button className="bg-gray-800 p-4 rounded-xl cursor-pointer sm:hidden ml-5 block" onClick={test}>
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
					<line x1="4" y1="12" x2="20" y2="12"></line>
					<line x1="4" y1="6" x2="20" y2="6"></line>
					<line x1="4" y1="18" x2="20" y2="18"></line>
				</svg>
			</button>
			<h1 className="text-4xl ml-5">Offline DEV</h1>
		</div>
	)
}

export default TopNav
