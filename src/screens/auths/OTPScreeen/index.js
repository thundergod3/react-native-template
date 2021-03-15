import React, { useEffect, useRef, useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";

import { Formik } from "formik";
import * as Yup from "yup";
import styles from "./styles";

import ButtonField from "../../../components/utils/ButtonField";
import HeaderAuth from "../../../components/utils/HeaderAuth";
import OTPInputField from "../../../components/utils/OTPInputField";

const YupSchema = Yup.object({
	email: Yup.string().required().email(),
});

const OTPScreen = ({ route }) => {
	const { phoneNumber } = route.params;
	const [countdonw, setCoundown] = useState(59);
	const [otp1, setOTP1] = useState("");
	const [otp2, setOTP2] = useState("");
	const [otp3, setOTP3] = useState("");
	const [otp4, setOTP4] = useState("");

	const otp1Ref = useRef(null);
	const otp2Ref = useRef(null);
	const otp3Ref = useRef(null);
	const otp4Ref = useRef(null);

	const clockCall = () => {
		setInterval(() => {
			decrementClock();
		}, 1000);
	};

	const decrementClock = () => {
		if (countdonw === 0) {
			clearInterval(clockCall());
			return;
		}
		setCoundown((preveCountdonw) => preveCountdonw - 1);
	};

	useEffect(() => {
		if (countdonw > 0) {
			clockCall();
		}

		return () => clearInterval(clockCall());
	}, []);

	useEffect(() => {
		if (countdonw === 0) {
			setCoundown(59);
		}

		return () => {};
	}, [countdonw]);

	return (
		<Formik
			initialValues={{
				email: "",
			}}
			onSubmit={(values, actions) => {}}
			validationSchema={YupSchema}>
			{(props) => (
				<View style={styles.OTPContainer}>
					<HeaderAuth title="Forgot password" />
					<View style={styles.inputContaner}>
						<Text style={{ color: "#000", marginBottom: 10, fontSize: 16 }}>
							We sent on your mobile number
						</Text>
						<Text style={{ color: "#000", fontWeight: "bold", fontSize: 16 }}>{phoneNumber}</Text>
					</View>
					<View
						style={{
							display: "flex",
							flexDirection: "row",
							justifyContent: "space-between",
							marginRight: 20,
							marginLeft: 20,
							marginTop: 30,
						}}>
						<OTPInputField value={otp1} handleChange={setOTP1} otpRef={otp1Ref} nextOTPRef={otp2Ref} />
						<OTPInputField value={otp2} handleChange={setOTP2} otpRef={otp2Ref} nextOTPRef={otp3Ref} />
						<OTPInputField value={otp3} handleChange={setOTP3} otpRef={otp3Ref} nextOTPRef={otp4Ref} />
						<OTPInputField value={otp4} handleChange={setOTP4} otpRef={otp4Ref} />
					</View>
					<TouchableOpacity onPress={() => {}}>
						<View style={styles.OTP}>
							<Text style={styles.OTPText}>Send again (00:{countdonw})</Text>
						</View>
					</TouchableOpacity>
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

export default OTPScreen;
