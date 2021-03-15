import * as types from "../../../constants/types";

class AuthsAction {
	signInRequest = (email, password) => {
		return {
			type: types.SIGN_IN_REQUEST,
			email,
			password,
		};
	};
	signInSucceeded = (userData) => {
		return {
			type: types.SIGN_IN_SUCCEEDED,
			userData,
		};
	};

	signInFacebookRequest = (token) => {
		return {
			type: types.SIGN_IN_FACEBOOK_REQUEST,
			token,
		};
	};
	signInFacebookSucceeded = (userData) => {
		return {
			type: types.SIGN_IN_FACEBOOK_SUCCEEDED,
			userData,
		};
	};

	signUpRequest = (name, email, password) => {
		return {
			type: types.SIGN_UP_REQUEST,
			name,
			email,
			password,
		};
	};
	signUpSucceeded = (userData) => {
		return {
			type: types.SIGN_UP_SUCCEEDED,
			userData,
		};
	};
}

export default new AuthsAction();
