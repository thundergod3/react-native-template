import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ImageBackground, StyleSheet } from "react-native";

import * as screensName from "../constants/screensName";

import backgroundImage from "../assets/utils/background.png";

import SignInScreen from "../screens/auths/SignInScreen";
import SignUpScreen from "../screens/auths/SignUpScreen";
import ForgotPasswordScreen from "../screens/auths/ForgotPasswordScreen";
import OTPScreen from "../screens/auths/OTPScreeen";
import HomepageScreen from "../screens/HomepageScreen";

const Stack = createStackNavigator();

const AuthNavigation = ({ setAuthentication }) => {
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

	return (
		<Stack.Navigator initialRouteName={screensName.SIGN_IN} headerMode="none">
			<Stack.Screen name={screensName.SIGN_IN} component={renderSignInScreen} />
			<Stack.Screen name={screensName.SIGN_UP} component={renderSignUpScreen} />
			<Stack.Screen name={screensName.FORGOT_PASSWORD} component={renderForgotPassword} />
			<Stack.Screen name={screensName.OTP} component={renderOTP} />

			{/* NORMAL NAVIGATION */}
			<Stack.Screen name={screensName.HOMEPAGE} component={HomepageScreen} />
		</Stack.Navigator>
	);
};

export default AuthNavigation;

const styles = StyleSheet.create({
	image: {
		flex: 1,
		resizeMode: "cover",
		backgroundColor: "#fff",
	},
});
