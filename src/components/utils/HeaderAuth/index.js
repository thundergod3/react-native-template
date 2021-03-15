import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";

import * as screensName from "../../../constants/screensName";

import BackArrow from "../BackArrow";

import arrowLongRightBlack from "../../../assets/icons/right_long_arrow_black.png";

const HeaderAuth = ({ title, navigateToSignIn }) => {
	const route = useRoute();
	const navigation = useNavigation();

	return (
		<View style={styles.header}>
			{route.name !== screensName.SIGN_IN && <BackArrow />}
			{navigateToSignIn ? (
				<View style={styles.navigateToSignIn}>
					<TouchableOpacity onPress={() => navigation.navigate(screensName.SIGN_IN)}>
						<Text style={{ marginRight: 8, fontWeight: "500", fontSize: 16 }}>
							Already have an account?
						</Text>
					</TouchableOpacity>
					<Image source={arrowLongRightBlack} style={styles.navigateToSignInIcon} />
				</View>
			) : (
				<Text style={[styles.title, route.name !== screensName.SIGN_IN ? { marginLeft: 30 } : {}]}>
					{title}
				</Text>
			)}
		</View>
	);
};

export default HeaderAuth;

const styles = StyleSheet.create({
	header: {
		height: 60,
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		paddingLeft: 20,
		paddingRight: 20,
		backgroundColor: "transparent",
	},
	title: {
		fontSize: 34,
		fontWeight: "bold",
		lineHeight: 41,
		color: "#222222",
	},
	navigateToSignIn: {
		marginLeft: "auto",
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
});
