import React, { useEffect, useState } from "react"
import route, { changeRoute } from "./store"
import { useStore } from "@nanostores/react"

interface entries {
	name: string
	type: string
	path: string
}

interface types {
	name: string
	count: number
	slug: string
}

interface res {
	entries: entries[]
	types: types[]
}

const Drawer = () => {
	const [data, setData] = useState<any>([])
	const [active, setActive] = useState("selected0")

	const getChapters = async () => {
		let url = "https://documents.devdocs.io/rust/index.json"

		let response: res = await (await fetch(url)).json()

		let entries: entries[] = []

		for (let i = 0; i < response.entries.length; i++) {
			if (response.entries[i].type == "Guide") {
				entries.push(response.entries[i])
			}
		}

		setData(entries)
	}

	const clicked = (index: number) => {
		setActive(`selected${index}`)

		changeRoute(data[index].path)
	}

	useEffect(() => {
		getChapters()
	}, [])

	return (
		<>
			<div className="hidden w-80 flex-col overflow-auto p-3 sm:flex">
				{data.map((item: any, index: number) => {
					return (
						<a key={index} className={`0 m-1 cursor-pointer break-words rounded-xl p-3 duration-200 hover:bg-gray-700 ${active === `selected${index}` ? "bg-gray-800 hover:bg-gray-700" : ""}`} onClick={() => clicked(index)}>
							{item.name}
						</a>
					)
				})}
			</div>
		</>
	)
}

export default Drawer
