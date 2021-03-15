import React from "react";
import { StyleSheet, ScrollView, View } from "react-native";

const Container = ({ children, style }) => {
	return <ScrollView style={[styles.container, style ? style : {}]}>{children}</ScrollView>;
};

export default Container;

const styles = StyleSheet.create({
	container: {
		width: "100%",
		height: "100%",
		paddingLeft: 15,
		paddingRight: 15,
		backgroundColor: "#F3F3F3",
	},
});
