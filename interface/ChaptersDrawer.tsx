import React, { useState } from "react"
import { useEffect } from "react"
import { Drawer } from "react-native-paper"

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

const ChaptersBrowser = (props) => {
	const [data, setData] = useState([])
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
		props.setRoute(entries[0])
	}

	useEffect(() => {
		getChapters()
	}, [])

	return (
		<Drawer.Section className="mt-5" title="Rust" showDivider={false}>
			{data.map((data: entries, i) => {
				let selected = active == `selected${i}` ? true : false

				return (
					<Drawer.Item
						active={selected}
						onPress={() => {
							setActive(`selected${i}`)
							props.setRoute(data)
						}}
						key={i}
						label={data.name}
					/>
				)
			})}
		</Drawer.Section>
	)
}

export default ChaptersBrowser
