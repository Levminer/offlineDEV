"use client"

import { useEffect } from "react"
import route from "./store"
import { useStore } from "@nanostores/react"

export default function Home() {
	let currentRoute = useStore(route)

	useEffect(() => {
		const getContent = async () => {
			let url = `https://documents.devdocs.io/rust/${currentRoute.path}.html`

			let response = await (await fetch(url)).text()

			document.querySelector("#test")!.innerHTML = response
		}

		getContent()
	}, [currentRoute])

	return (
		<>
			<h1 id="test">Loading...</h1>
		</>
	)
}
