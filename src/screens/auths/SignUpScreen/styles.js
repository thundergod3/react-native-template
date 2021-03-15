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
	signInContainer: {
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
		marginBottom: 50,
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
	buttonSignUp: {
		width: 92,
		height: 64,
		backgroundColor: "#fff",
		shadowColor: "rgba(31, 36, 39, 0.3)",
		shadowOffset: {
			width: 3.88889,
			height: 3.88889,
		},
		shadowOpacity: 16.6667,
		borderRadius: 24,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		elevation: 3,
	},
	title: {
		fontSize: 34,
		fontWeight: "bold",
		lineHeight: 41,
		color: "#222222",
	},
});

export default styles;
