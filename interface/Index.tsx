import * as React from "react"
import { BottomNavigation, Text, Appbar } from "react-native-paper"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { Drawer } from "react-native-paper"
import { View } from "react-native"
import Home from "./Home"
import Browse from "./Browse"

const SideDrawer = createDrawerNavigator()

const HomeRoute = () => {
	return (
		<>
			<Home />
		</>
	)
}

const BrowseRoute = (props) => {
	const toggleMenu = () => {
		props.toggleDrawer()
	}

	console.log(props)

	return (
		<>
			<Appbar.Header elevated={true}>
				<Appbar.Action icon="book" />
				<Appbar.Content title="Browse" />
				<Appbar.Action icon="menu" onPress={toggleMenu} />
			</Appbar.Header>

			<Browse />
		</>
	)
}

const SettingsRoute = () => <Text>Settings</Text>

const Navigation = ({ navigation }) => {
	const [index, setIndex] = React.useState(0)
	const [routes] = React.useState([
		{ key: "home", title: "Home", focusedIcon: "home" },
		{ key: "browse", title: "Browse", focusedIcon: "book" },
		{ key: "settings", title: "Settings", focusedIcon: "cog" },
	])

	console.log("INDEX", navigation)

	const homeRoute2 = () => <BrowseRoute {...navigation} />

	const renderScene = BottomNavigation.SceneMap({
		home: HomeRoute,
		browse: homeRoute2,
		settings: SettingsRoute,
	})

	return <BottomNavigation navigationState={{ index, routes }} onIndexChange={setIndex} renderScene={renderScene} />
}

function DrawerContent() {
	const [active, setActive] = React.useState("")

	return (
		<Drawer.Section title="Some title">
			<Drawer.Item label="First Item" active={active === "first"} onPress={() => setActive("first")} />
			<Drawer.Item label="Second Item" active={active === "second"} onPress={() => setActive("second")} />
		</Drawer.Section>
	)
}

const Index = () => {
	return (
		<>
			<SideDrawer.Navigator drawerContent={() => <DrawerContent />}>
				<SideDrawer.Screen options={{ headerShown: false }} name="a" component={Navigation} />
			</SideDrawer.Navigator>
		</>
	)
}

export default Index
