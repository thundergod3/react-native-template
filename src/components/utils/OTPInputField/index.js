import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

const OTPInputField = ({ value, handleChange, otpRef, nextOTPRef }) => {
	return (
		<View style={styles.otpContainer}>
			<TextInput
				ref={otpRef}
				value={value}
				keyboardType="number-pad"
				style={{ fontSize: 26, textAlign: "center", color: "#000" }}
				onChangeText={(text) => {
					console.log(text.length);
					if (text.length < 2) handleChange(text);

					if (text !== "") {
						if (nextOTPRef) nextOTPRef.current.focus();
					}
				}}
			/>
		</View>
	);
};

export default OTPInputField;

const styles = StyleSheet.create({
	otpContainer: {
		width: 72,
		height: 64,
		shadowColor: "rgba(31, 36, 39, 0.3)",
		shadowOffset: {
			width: 3.88889,
			height: 3.88889,
		},
		shadowRadius: 16.6667,
		borderRadius: 4,
		elevation: 2,
		backgroundColor: "#fff",
	},
});
