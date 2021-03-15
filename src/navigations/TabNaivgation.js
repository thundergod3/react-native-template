import React from "react";
import { StyleSheet, Image, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import * as screensName from "../constants/screensName";

import homeIcon from "../assets/icons/home_icon.png";
import discoveryIcon from "../assets/icons/discovery_icon.png";
import cartIcon from "../assets/icons/cart_icon.png";
import messageIcon from "../assets/icons/message_icon.png";
import profileIcon from "../assets/icons/profile_icon.png";
import chooseTabYellowIcon from "../assets/icons/choose_tab_yellow_icon.png";
import chooseTabGreenIcon from "../assets/icons/choose_tab_green_icon.png";
import chooseTabRedIcon from "../assets/icons/choose_tab_red_icon.png";
import chooseTabBlueIcon from "../assets/icons/choose_tab_blue_icon.png";
import chooseTabBlackIcon from "../assets/icons/choose_tab_black_icon.png";

import HomepageScreen from "../screens/HomepageScreen/";
import ExploreScreen from "../screens/ExploreScreen";
import CartScreen from "../screens/CartScreen";
import MessagesScreen from "../screens/MessagesScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNaivgation = () => {
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

	return (
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
							{focused && <Image source={chooseTabRedIcon} style={{ marginTop: 3, marginLeft: 5 }} />}
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
	);
};

export default TabNaivgation;

const styles = StyleSheet.create({
	tabBottom: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
});
