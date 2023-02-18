import * as React from "react"
import { AppRegistry, Platform } from "react-native"
import { Provider as PaperProvider, MD3DarkTheme } from "react-native-paper"
import { expo } from "./app.json"
import App from "./interface/Index"
import { StatusBar } from "expo-status-bar"
import { NavigationContainer, DarkTheme } from "@react-navigation/native"

const theme = {
	...MD3DarkTheme,
}

export default function Main() {
	React.useEffect(() => {
		if (Platform.OS === "web") {
			document.body.style.overflowY = "hidden"
			document.body.style.height = "100%"
		}
	}, [])

	return (
		<PaperProvider theme={theme}>
			<NavigationContainer theme={DarkTheme}>
				<StatusBar style="light" />
				<App />
			</NavigationContainer>
		</PaperProvider>
	)
}

AppRegistry.registerComponent(expo.name, () => Main)

