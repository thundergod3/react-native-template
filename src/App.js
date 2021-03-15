import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import { getFocusedRouteNameFromRoute, NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StyleSheet, ImageBackground, Image, View } from "react-native";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { Provider } from "react-redux";

import store from "./stores/configureStore";

import backgroundImage from "./assets/utils/background.png";
import homeIcon from "./assets/icons/home_icon.png";
import discoveryIcon from "./assets/icons/discovery_icon.png";
import cartIcon from "./assets/icons/cart_icon.png";
import messageIcon from "./assets/icons/message_icon.png";
import profileIcon from "./assets/icons/profile_icon.png";
import chooseTabYellowIcon from "./assets/icons/choose_tab_yellow_icon.png";
import chooseTabGreenIcon from "./assets/icons/choose_tab_green_icon.png";
import chooseTabRedIcon from "./assets/icons/choose_tab_red_icon.png";
import chooseTabBlueIcon from "./assets/icons/choose_tab_blue_icon.png";
import chooseTabBlackIcon from "./assets/icons/choose_tab_black_icon.png";

import * as screensName from "./constants/screensName";
import { navigationRef } from "./helpers/rootNavigation";

import SignInScreen from "./screens/auths/SignInScreen";
import SignUpScreen from "./screens/auths/SignUpScreen";
import ForgotPasswordScreen from "./screens/auths/ForgotPasswordScreen";
import OTPScreen from "./screens/auths/OTPScreeen";
import HomepageScreen from "./screens/HomepageScreen/";
import ExploreScreen from "./screens/ExploreScreen";
import CartScreen from "./screens/CartScreen";
import MessagesScreen from "./screens/MessagesScreen";
import ProfileScreen from "./screens/ProfileScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
	const [authentication, setAuthentication] = useState(false);

	const renderSignInScreen = (props) => (
		<ImageBackground source={backgroundImage} style={styles.image}>
			<SignInScreen {...props} setAuthentication={setAuthentication} />
		</ImageBackground>
	);

	const renderSignUpScreen = (props) => (
		<ImageBackground source={backgroundImage} style={styles.image}>
			<SignUpScreen {...props} />
		</ImageBackground>
	);

	const renderForgotPassword = (props) => (
		<ImageBackground source={backgroundImage} style={styles.image}>
			<ForgotPasswordScreen {...props} />
		</ImageBackground>
	);

	const renderOTP = (props) => (
		<ImageBackground source={backgroundImage} style={styles.image}>
			<OTPScreen {...props} />
		</ImageBackground>
	);

	const renderHomepageStack = () => (
		<Stack.Navigator headerMode="none">
			<Stack.Screen name={screensName.HOMEPAGE} component={HomepageScreen} />
		</Stack.Navigator>
	);

	const renderMessageStack = () => (
		<Stack.Navigator headerMode="none">
			<Stack.Screen name={screensName.MESSAGE} component={MessagesScreen} />
		</Stack.Navigator>
	);

	const renderProfileScreen = () => (
		<Stack.Navigator headerMode="none">
			<Stack.Screen name={screensName.PROFILE} component={ProfileScreen} />
		</Stack.Navigator>
	);

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
				{!authentication ? (
					<NavigationContainer ref={navigationRef}>
						{/* AUTHS NAVIGATION */}
						<Stack.Navigator initialRouteName={screensName.SIGN_IN} headerMode="none">
							<Stack.Screen name={screensName.SIGN_IN} component={renderSignInScreen} />
							<Stack.Screen name={screensName.SIGN_UP} component={renderSignUpScreen} />
							<Stack.Screen name={screensName.FORGOT_PASSWORD} component={renderForgotPassword} />
							<Stack.Screen name={screensName.OTP} component={renderOTP} />

							{/* NORMAL NAVIGATION */}
							<Stack.Screen name={screensName.HOMEPAGE} component={HomepageScreen} />
						</Stack.Navigator>
					</NavigationContainer>
				) : (
					<NavigationContainer ref={navigationRef}>
						{/* BOTTOM NAVIGATION */}
						<Tab.Navigator
							initialRouteName={screensName.HOMEPAGE}
							tabBarOptions={{
								activeTintColor: "#e91e63",
							}}>
							<Tab.Screen
								name={screensName.HOMEPAGE}
								component={renderHomepageStack}
								options={{
									tabBarLabel: "",
									tabBarIcon: ({ focused }) => (
										<View
											style={[
												styles.tabBottom,
												focused
													? {
															marginTop: 15,
													  }
													: { marginTop: 10 },
											]}>
											<Image source={homeIcon} />
											{focused && <Image source={chooseTabYellowIcon} style={{ marginTop: 3 }} />}
										</View>
									),
								}}
							/>
							<Tab.Screen
								name={screensName.EXPLORE}
								component={ExploreScreen}
								options={{
									tabBarLabel: "",
									tabBarIcon: ({ focused }) => (
										<View
											style={[
												styles.tabBottom,
												focused
													? {
															marginTop: 15,
													  }
													: { marginTop: 10 },
											]}>
											<Image source={discoveryIcon} />
											{focused && <Image source={chooseTabGreenIcon} style={{ marginTop: 3 }} />}
										</View>
									),
								}}
							/>
							<Tab.Screen
								name={screensName.CART}
								component={CartScreen}
								options={{
									tabBarLabel: "",
									tabBarIcon: ({ focused }) => (
										<View
											style={[
												styles.tabBottom,
												focused
													? {
															marginTop: 15,
													  }
													: { marginTop: 10 },
											]}>
											<Image source={cartIcon} />
											{focused && (
												<Image
													source={chooseTabRedIcon}
													style={{ marginTop: 3, marginLeft: 5 }}
												/>
											)}
										</View>
									),
								}}
							/>
							<Tab.Screen
								name={screensName.MESSAGE}
								component={renderMessageStack}
								options={{
									tabBarLabel: "",
									tabBarIcon: ({ focused }) => (
										<View
											style={[
												styles.tabBottom,
												focused
													? {
															marginTop: 15,
													  }
													: { marginTop: 10 },
											]}>
											<Image source={messageIcon} />
											{focused && <Image source={chooseTabBlueIcon} style={{ marginTop: 3 }} />}
										</View>
									),
								}}
							/>
							<Tab.Screen
								name={screensName.PROFILE}
								component={renderProfileScreen}
								options={{
									tabBarLabel: "",
									tabBarIcon: ({ focused }) => (
										<View
											style={[
												styles.tabBottom,
												focused
													? {
															marginTop: 15,
													  }
													: { marginTop: 10 },
											]}>
											<Image source={profileIcon} />
											{focused && <Image source={chooseTabBlackIcon} style={{ marginTop: 3 }} />}
										</View>
									),
								}}
							/>
						</Tab.Navigator>
					</NavigationContainer>
				)}
			</SafeAreaProvider>
		</Provider>
	);
};

export default App;

const styles = StyleSheet.create({
	image: {
		flex: 1,
		resizeMode: "cover",
		backgroundColor: "#fff",
	},
	tabBottom: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
});
