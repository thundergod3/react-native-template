import React, { memo } from "react";
import { useNavigation } from "@react-navigation/native";
import { Image, TouchableOpacity } from "react-native";

import arrowLeft from "../../../assets/icons/left_arrow.png";

const BackArrow = (props) => {
	const navigation = useNavigation();

	const onPress = () => {
		if (props.onPress) {
			props.onPress();
		} else {
			navigation.goBack();
		}
	};

	return (
		<TouchableOpacity onPress={onPress}>
			<Image source={arrowLeft} />
		</TouchableOpacity>
	);
};

export default memo(BackArrow);
