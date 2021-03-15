import React, { useEffect, useState } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import ButtonField from "../../../components/utils/ButtonField";

import { Formik } from "formik";
import * as Yup from "yup";
import styles from "./styles";

import HeaderAuth from "../../../components/utils/HeaderAuth";
import InputField from "../../../components/utils/InputField";

const YupSchema = Yup.object({
	email: Yup.string().required().email(),
});

const ForgotPasswordScreen = () => {
	return (
		<Formik
			initialValues={{
				email: "",
			}}
			onSubmit={(values, actions) => {}}
			validationSchema={YupSchema}>
			{(props) => (
				<View style={styles.forgotPasswordContainer}>
					<HeaderAuth title="Forgot password" />
					<View style={styles.inputContaner}>
						<Text style={{ color: "#000", marginBottom: 30 }}>
							Please, enter your email address. You will receive a link to create a new password via
							email.
						</Text>
						<InputField value={props.values.email} label="Email" type="email" {...props} />
					</View>
					<View style={{ marginTop: 50 }}>
						<ButtonField
							title="SEND"
							onPress={props.handleSubmit}
							normalButton
							style={styles.linearGradient}
						/>
					</View>
				</View>
			)}
		</Formik>
	);
};

export default ForgotPasswordScreen;
