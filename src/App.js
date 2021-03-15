import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { Provider } from "react-redux";

import store from "./stores/configureStore";

import { navigationRef } from "./helpers/rootNavigation";

import AuthNavigation from "./navigations/AuthNavigation";
import TabNaivgation from "./navigations/TabNaivgation";

const App = () => {
	const [authentication, setAuthentication] = useState(false);

	useEffect(() => {
		GoogleSignin.configure({
			offlineAccess: false,
			webClientId: "723045951649-9m3q46me0vve0e4krv36iehhe38g67o2.apps.googleusercontent.com",
			scopes: ["profile", "email"],
		});
	}, []);

	return (
		<Provider store={store}>
			<SafeAreaProvider style={{ fontFamily: "SF Pro Text" }}>
				<NavigationContainer ref={navigationRef}>
					{!authentication ? <AuthNavigation setAuthentication={setAuthentication} /> : <TabNaivgation />}
				</NavigationContainer>
			</SafeAreaProvider>
		</Provider>
	);
};

export default App;
