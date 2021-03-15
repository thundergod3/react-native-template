import { takeEvery, call, put } from "redux-saga/effects";

import * as types from "../../constants/types";
import * as screensName from "../../constants/screensName";
import initUser from "../../helpers/initUserFacebook";
import * as RootNavigation from "../../helpers/rootNavigation";

import AuthsService from "../../services/authsService";

import AuthsAction from "../redux/actions/AuthsAction";

function* signIn({ email, password }) {
	try {
		const { data } = yield call(AuthsService.signIn, { email, password });
		yield put(AuthsAction.signInSucceeded(data));
		RootNavigation.navigate(screensName.HOMEPAGE);
	} catch (error) {
		console.log(error);
	}
}

function* signInFacebook({ token }) {
	try {
		const { data } = yield call(initUser, { token });
		yield put(AuthsAction.signInFacebookSucceeded(data));
		RootNavigation.navigate(screensName.HOMEPAGE);
	} catch (error) {
		console.log(error);
	}
}

function* signUp({ name, email, password }) {
	try {
		const { data } = yield call(AuthsService.signUp, { name, email, password });
		yield put(AuthsAction.signUpSucceeded(data));
		RootNavigation.navigate(screensName.HOMEPAGE);
	} catch (error) {
		console.log(error);
	}
}

export default function* authsSaga() {
	yield takeEvery(types.SIGN_IN_REQUEST, signIn);
	yield takeEvery(types.SIGN_UP_REQUEST, signUp);
	yield takeEvery(types.SIGN_IN_FACEBOOK_REQUEST, signInFacebook);
}
