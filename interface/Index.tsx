import React from "react"
import { BottomNavigation } from "react-native-paper"
import Home from "./Home"
import Browse from "./Browse"
import Settings from "./Settings"

const home = () => <Home />
const browse = () => <Browse />
const settings = () => <Settings />

const Navigation = () => {
	const [index, setIndex] = React.useState(0)
	const [routes] = React.useState([
		{ key: "home", title: "Home", focusedIcon: "home" },
		{ key: "browse", title: "Browse", focusedIcon: "book" },
		{ key: "settings", title: "Settings", focusedIcon: "cog" },
	])

	const renderScene = BottomNavigation.SceneMap({
		home,
		browse,
		settings,
	})

	return <BottomNavigation navigationState={{ index, routes }} onIndexChange={setIndex} renderScene={renderScene} />
}

const Index = () => {
	return <Navigation />
}

export default Index
