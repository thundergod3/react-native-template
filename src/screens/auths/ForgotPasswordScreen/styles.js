import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	linearGradient: {
		marginLeft: 20,
		marginRight: 20,
		borderRadius: 100,
		height: 50,
		display: "flex",
		justifyContent: "center",
	},
	forgotPasswordContainer: {
		backgroundColor: "transparent",
	},
	inputContaner: {
		display: "flex",
		alignItems: "center",
		width: "100%",
		marginTop: 30,
		paddingRight: 20,
		paddingLeft: 20,
	},
	forgotPassword: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "flex-end",
		alignItems: "center",
		paddingRight: 20,
		paddingLeft: 20,
		marginBottom: 40,
		marginTop: 5,
	},
	forgotPasswordText: {
		fontWeight: "500",
		fontSize: 14,
		lineHeight: 20,
	},
	forgotPasswordIcon: {
		marginLeft: 10,
	},
});

export default styles;
