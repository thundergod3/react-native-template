import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { TextInput } from "react-native-paper";

import checkIcon from "../../../assets/icons/check_icon.png";

const InputField = ({
	label,
	value,
	handleChange,
	handleBlur,
	secureTextEntry,
	keyboardType,
	errors,
	type,
	touched,
}) => {
	return (
		<View style={styles.inputContainer}>
			<TextInput
				secureTextEntry={secureTextEntry}
				value={value}
				underlineColor="transparent"
				selectionColor="transparent"
				label={label}
				mode="flat"
				style={styles.input}
				onChangeText={handleChange(type)}
				onBlur={handleBlur(type)}
				keyboardType={keyboardType ? keyboardType : "default"}
			/>
			{!errors[type] && touched[type] && (
				<View style={styles.checkIcon}>
					<Image source={checkIcon} />
				</View>
			)}
		</View>
	);
};

export default InputField;

const styles = StyleSheet.create({
	inputContainer: {
		width: "100%",
	},

	input: {
		position: "relative",
		backgroundColor: "#fff",
		marginBottom: 10,
		shadowColor: "rgba(31, 36, 39, 0.3)",
		shadowOffset: {
			width: 3.88889,
			height: 3.88889,
		},
		shadowRadius: 16.6667,
		borderRadius: 4,
		borderColor: "transparent",
		height: 60,
		elevation: 2,
		zIndex: 10,
	},
	checkIcon: {
		position: "absolute",
		elevation: 3,
		zIndex: 100,
		top: 20,
		left: "90%",
	},
});
