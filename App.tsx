import * as React from "react"
import { AppRegistry } from "react-native"
import { Provider as PaperProvider, MD3DarkTheme } from "react-native-paper"
import { expo } from "./app.json"
import App from "./interface/Index"
import { StatusBar } from "expo-status-bar"
import { NavigationContainer, DarkTheme } from "@react-navigation/native"

const theme = {
	...MD3DarkTheme,
}

export default function Main() {
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

