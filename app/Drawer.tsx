import React, { useEffect, useState } from "react"

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
	const [active, setActive] = React.useState("selected0")

	const getChapters = async () => {
		let url = "https://documents.devdocs.io/rust/index.json"

		let response: res = await (await fetch(url)).json()

		let entries: entries[] = []

		for (let i = 0; i < response.entries.length; i++) {
			if (response.entries[i].type == "Guide") {
				entries.push(response.entries[i])
			}
		}

		console.log(entries)

		setData(entries)
	}

	useEffect(() => {
		getChapters()
	}, [])

	return (
		<>
			<div className="sm:flex flex-col w-80 overflow-auto hidden p-3">
				{data.map((item: any, index: number) => {
					return (
						<a key={index} className={`p-3 break-words cursor-pointer rounded-xl ${active === `selected${index}` ? "bg-gray-800" : ""}`} onClick={() => setActive(`selected${index}`)}>
							{item.name}
						</a>
					)
				})}
			</div>
		</>
	)
}

export default Drawer
