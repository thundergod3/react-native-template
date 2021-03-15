import React, { useState } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { LoginManager, AccessToken } from "react-native-fbsdk";
import { GoogleSignin, statusCodes } from "@react-native-google-signin/google-signin";

import { Formik } from "formik";
import * as Yup from "yup";
import * as screensName from "../../../constants/screensName";
import styles from "./styles";

import { useDispatch } from "react-redux";
import AuthsAction from "../../../stores/redux/actions/AuthsAction";

import arrowLongRight from "../../../assets/icons/right_long_arrow.png";
import googleIcon from "../../../assets/icons/google_icon.png";
import facebookIcon from "../../../assets/icons/facebook_icon.png";

import HeaderAuth from "../../../components/utils/HeaderAuth";
import InputField from "../../../components/utils/InputField";
import ButtonField from "../../../components/utils/ButtonField";

const YupSchema = Yup.object({
	email: Yup.string().required().email(),
	password: Yup.string().required(),
});

const SignInScreen = ({ navigation, setAuthentication }) => {
	const dispatch = useDispatch();
	const { signInFacebookRequest } = AuthsAction;

	const handleFacebookLogin = () => {
		LoginManager.logInWithPermissions(["public_profile", "email"]).then(
			function (result) {
				if (result.isCancelled) {
					console.log("Login cancelled");
				} else {
					AccessToken.getCurrentAccessToken().then((data) => {
						const { accessToken } = data;
						dispatch(signInFacebookRequest(accessToken));
					});
				}
			},
			function (error) {
				console.log("Login fail with error: " + error);
			}
		);
	};

	const handleGoogleLogin = async () => {
		try {
			await GoogleSignin.hasPlayServices();
			const userInfo = await GoogleSignin.signIn();
			console.log(userInfo);
		} catch (error) {
			if (error.code === statusCodes.SIGN_IN_CANCELLED) {
				// user cancelled the login flow
			} else if (error.code === statusCodes.IN_PROGRESS) {
				// operation (e.g. sign in) is in progress already
			} else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
				// play services not available or outdated
			} else {
				console.log(error);
			}
		}
	};

	return (
		<Formik
			initialValues={{
				email: "",
				password: "",
			}}
			onSubmit={(values, actions) => {
				navigation.navigate(screensName.HOMEPAGE);
				setAuthentication(true);
			}}
			validationSchema={YupSchema}>
			{(props) => (
				<View style={styles.signInContainer}>
					<HeaderAuth title="Login" />
					<View style={styles.inputContaner}>
						<InputField value={props.values.email} label="Email" type="email" {...props} />
						<InputField
							value={props.values.password}
							label="Password"
							type="password"
							secureTextEntry
							{...props}
						/>
					</View>
					<TouchableOpacity onPress={() => navigation.navigate(screensName.FORGOT_PASSWORD)}>
						<View style={styles.forgotPassword}>
							<Text style={styles.forgotPasswordText}>Forgot your password?</Text>
							<Image source={arrowLongRight} style={styles.forgotPasswordIcon} />
						</View>
					</TouchableOpacity>
					<ButtonField title="LOGIN" onPress={props.handleSubmit} style={styles.linearGradient} />
					<View style={{ width: "100%", marginTop: 10 }}>
						<TouchableOpacity onPress={() => navigation.navigate(screensName.SIGN_UP)}>
							<Text style={{ textAlign: "center", fontFamily: "Montserrat", fontSize: 14 }}>
								Sign up now
							</Text>
						</TouchableOpacity>
					</View>
					<View style={{ width: "100%" }}>
						<Text
							style={{
								textAlign: "center",
								fontSize: 14,
								color: "#555",
								fontWeight: "bold",
								lineHeight: 20,
							}}>
							Or sign in with social account
						</Text>
					</View>
					<View
						style={{
							width: "100%",
							display: "flex",
							flexDirection: "row",
							justifyContent: "center",
							marginTop: 15,
						}}>
						{/* <TouchableOpacity onPress={handleGoogleLogin}>
							<View style={[styles.buttonSignUp, { marginRight: 7 }]}>
								<Image source={googleIcon} />
							</View>
						</TouchableOpacity> */}
						<TouchableOpacity onPress={handleFacebookLogin}>
							<View style={[styles.buttonSignUp, { marginRight: 7 }]}>
								<Image source={facebookIcon} />
							</View>
						</TouchableOpacity>
					</View>
				</View>
			)}
		</Formik>
	);
};

export default SignInScreen;
