import React, { useState } from "react";
import { Text, View, Image, ScrollView, TouchableOpacity } from "react-native";
import { LoginManager, AccessToken } from "react-native-fbsdk";

import { Formik } from "formik";
import * as Yup from "yup";
import * as screensName from "../../../constants/screensName";
import styles from "./styles";

import googleIcon from "../../../assets/icons/google_icon.png";
import facebookIcon from "../../../assets/icons/facebook_icon.png";

import { useDispatch } from "react-redux";
import AuthsAction from "../../../stores/redux/actions/AuthsAction";

import HeaderAuth from "../../../components/utils/HeaderAuth";
import InputField from "../../../components/utils/InputField";
import ButtonField from "../../../components/utils/ButtonField";

const YupSchema = Yup.object({
	fullName: Yup.string().required(),
	email: Yup.string().required().email(),
	phoneNumber: Yup.number().required().max(11, "The phone number must valid"),
	password: Yup.string().required(),
	confirmPassword: Yup.string()
		.oneOf([Yup.ref("password")], "Password's not match")
		.required(),
});

const SignUpScreen = ({ navigation }) => {
	const dispatch = useDispatch();
	const { signInFacebookRequest } = AuthsAction;

	const handleFacebookLogin = () => {
		LoginManager.logInWithPermissions(["public_profile"]).then(
			function (result) {
				if (result.isCancelled) {
					console.log("Login cancelled");
				} else {
					AccessToken.getCurrentAccessToken().then((data) => {
						const { accessToken } = data;
						dispatch(signInFacebookRequest(accessToken));
						navigation.navigate(screensName.HOMEPAGE);
					});
				}
			},
			function (error) {
				console.log("Login fail with error: " + error);
			}
		);
	};

	return (
		<Formik
			initialValues={{
				fullName: "",
				email: "",
				phoneNumber: "",
				password: "",
				confirmPassword: "",
				referalCode: "",
			}}
			onSubmit={(values, actions) => {
				navigation.navigate(screensName.OTP, {
					phoneNumber: values.phoneNumber,
				});
			}}
			validationSchema={YupSchema}>
			{(props) => (
				<ScrollView style={styles.signInContainer}>
					<HeaderAuth navigateToSignIn />
					<View
						style={{
							paddingLeft: 20,
							paddingRight: 20,
							display: "flex",
							flexDirection: "row",
							justifyContent: "space-between",
						}}>
						<Text style={styles.title}>Sign Up</Text>
					</View>
					<View style={styles.inputContaner}>
						<InputField value={props.values.fullName} label="Full Name" type="fullName" {...props} />
						<InputField value={props.values.email} label="Email" type="email" {...props} />
						<InputField
							value={props.values.phoneNumber}
							label="Mobile Number"
							type="phoneNumber"
							keyboardType="phone-pad"
							{...props}
						/>
						<InputField
							value={props.values.password}
							label="Password"
							type="password"
							secureTextEntry
							{...props}
						/>
						<InputField
							value={props.values.confirmPassword}
							type="confirmPassword"
							label="Confirm Password"
							secureTextEntry
							{...props}
						/>
						<InputField
							value={props.values.referalCode}
							type="referalCode"
							label="Referal Code"
							{...props}
						/>
					</View>
					<View
						style={{
							width: "100%",
							paddingLeft: 20,
							paddingRight: 20,
							display: "flex",
							flexDirection: "row",
							justifyContent: "center",
							marginTop: 10,
							marginBottom: 15,
						}}>
						<Text style={{ fontSize: 15, color: "#222" }}>By clicking on signup I accept the </Text>
						<Text style={{ fontSize: 15, color: "#222", borderBottomWidth: 1 }}>Terms & Conditions</Text>
					</View>
					<ButtonField title="SIGN UP" onPress={props.handleSubmit} style={styles.linearGradient} />
					<View style={{ width: "100%" }}>
						<Text
							style={{
								textAlign: "center",
								fontSize: 14,
								color: "#555",
								fontWeight: "bold",
								lineHeight: 20,
								marginTop: 30,
							}}>
							Or sign up with social account
						</Text>
					</View>
					<View
						style={{
							width: "100%",
							display: "flex",
							flexDirection: "row",
							justifyContent: "center",
							marginTop: 15,
							marginBottom: 20,
						}}>
						{/* <View style={[styles.buttonSignUp, { marginRight: 7 }]}>
							<Image source={googleIcon} />
						</View> */}
						<TouchableOpacity onPress={handleFacebookLogin}>
							<View style={[styles.buttonSignUp, { marginRight: 7 }]}>
								<Image source={facebookIcon} />
							</View>
						</TouchableOpacity>
					</View>
				</ScrollView>
			)}
		</Formik>
	);
};

export default SignUpScreen;
