import React, { useState } from "react"
import { BottomNavigation, Text } from "react-native-paper"
import { ScrollView, View } from "react-native"
import { useEffect } from "react"
import { Appbar } from "react-native-paper"

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

const Home = () => {
	const test = async () => {
		let url = "https://documents.devdocs.io/rust/index.json"

		let response: res = await (await fetch(url)).json()

		let entries = []

		for (let i = 0; i < response.entries.length; i++) {
			if (response.entries[i].type == "Guide") {
				entries.push(response.entries[i])
			}
		}

		setData(entries)
	}

	const [data, setData] = useState([])

	useEffect(() => {
		test()
	}, [])

	return (
		<>
			<View>
				<Appbar.Header elevated={true}>
					<Appbar.Action icon="home" />
					<Appbar.Content title="Home" />
				</Appbar.Header>

				<ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: "center", alignItems: "center" }}>
					<Text className="text-red-400">Home2!</Text>
				</ScrollView>
			</View>
		</>
	)
}

export default Home
