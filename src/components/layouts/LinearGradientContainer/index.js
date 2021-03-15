import React from "react";
import LinearGradient from "react-native-linear-gradient";

const LinearGradientContainer = ({ children, colors, style }) => {
	return (
		<LinearGradient colors={colors} style={style} angle={320.66} useAngle={true}>
			{children}
		</LinearGradient>
	);
};

export default LinearGradientContainer;
