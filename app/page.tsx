"use client"

import { useEffect } from "react"
import route from "./store"
import { useStore } from "@nanostores/react"
import hljs from "highlight.js"

export default function Home() {
	let currentRoute = useStore(route)

	useEffect(() => {
		const getContent = async () => {
			let url = `https://documents.devdocs.io/rust/${currentRoute.path}.html`

			let response = await (await fetch(url)).text()

			document.querySelector("#test")!.innerHTML = response
			document.querySelector(".top")!.scrollIntoView()

			document.querySelectorAll("[data-language]").forEach((block) => {
				hljs.highlightBlock(block as HTMLElement)
			})
		}

		getContent()
	}, [currentRoute])

	return (
		<>
			<div className="m-10">
				<div className="top"></div>
				<div id="test" className="prose !prose-invert prose-slate !max-w-none p-10">
					{/* <h1>Loading</h1> */}
				</div>
			</div>
		</>
	)
}
