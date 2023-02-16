import React, { useEffect, useState } from "react"
import { ScrollView, View } from "react-native"
import { Appbar, Text } from "react-native-paper"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { useWindowDimensions } from "react-native"
import RenderHtml from "react-native-render-html"
import ChaptersDrawer from "./ChaptersDrawer"

const SideDrawer = createDrawerNavigator()

function DrawerContent(props) {
	return (
		<ScrollView>
			<ChaptersDrawer setRoute={props.setRoute} />
		</ScrollView>
	)
}

const Page = (props) => {
	const [data, setData] = useState("")

	console.log(props.currentRoute)

	const toggleMenu = () => {
		props.navigation.toggleDrawer()
	}

	const getContent = async () => {
		let url = `https://documents.devdocs.io/rust/${props.currentRoute.path}.html`

		let response = await (await fetch(url)).text()

		console.log(response)

		setData(response)
	}

	useEffect(() => {
		getContent()
	}, [props.currentRoute.path])

	const { width } = useWindowDimensions()

	return (
		<View style={{ backgroundColor: "white", flex: 1 }}>
			<Appbar.Header elevated={true}>
				<Appbar.Action icon="menu" onPress={toggleMenu} />
				<Appbar.Content title="Chapters" />
			</Appbar.Header>

			<ScrollView>
				<RenderHtml contentWidth={width} source={{ html: data }} />
			</ScrollView>
		</View>
	)
}

const Browse = () => {
	const [route, setRoute] = useState({ path: "book/ch01-00-getting-started" })

	useEffect(() => {
		console.log(route)
	}, [route])

	return (
		<>
			{/* screenOptions={{ drawerType: "permanent" }} */}
			<SideDrawer.Navigator drawerContent={() => <DrawerContent setRoute={setRoute} />}>
				<SideDrawer.Screen options={{ headerShown: false }} name="a">
					{(props) => <Page {...props} currentRoute={route} />}
				</SideDrawer.Screen>
			</SideDrawer.Navigator>
		</>
	)
}

export default Browse
