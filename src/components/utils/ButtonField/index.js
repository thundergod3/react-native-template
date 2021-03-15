import React from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";

import LinearGradientContainer from "../../layouts/LinearGradientContainer";

const ButtonField = ({ title, onPress, normalButton, style }) => {
	return (
		<>
			{normalButton ? (
				<TouchableOpacity onPress={onPress}>
					<LinearGradientContainer colors={["#000", "#000"]} style={style}>
						<Text style={[styles.buttonText, { color: "#fff" }]}>{title}</Text>
					</LinearGradientContainer>
				</TouchableOpacity>
			) : (
				<TouchableOpacity onPress={onPress}>
					<LinearGradientContainer colors={["#FFFF3B", "#FFB13B"]} style={style}>
						<Text style={styles.buttonText}>{title}</Text>
					</LinearGradientContainer>
				</TouchableOpacity>
			)}
		</>
	);
};

export default ButtonField;

const styles = StyleSheet.create({
	linearGradient: {
		marginLeft: 20,
		marginRight: 20,
		borderRadius: 100,
		height: 50,
		display: "flex",
		justifyContent: "center",
	},
	buttonText: {
		fontSize: 16,
		fontFamily: "SF Pro Text",
		textAlign: "center",
		margin: 10,
		color: "#000",
	},
});
