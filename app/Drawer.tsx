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
			<div className="drawer drawer-mobile fixed">
				<input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
				<div className="drawer-side mb-32">
					<label htmlFor="my-drawer-2" className="drawer-overlay"></label>
					<ul className="menu p-4 w-80 text-base-content bg-gray-800">
						{data.map((item: any, index: number) => {
							return (
								<li key={index}>
									<a className={`${active === `selected${index}` ? "bg-gray-700" : ""}`} onClick={() => setActive(`selected${index}`)}>
										{item.name}
									</a>
								</li>
							)
						})}
					</ul>
				</div>
			</div>
		</>
	)
}

export default Drawer
