import { fork, all } from "redux-saga/effects";

import authsSaga from "./saga/authsSaga";

export default function* rootSaga() {
	yield all([fork(authsSaga)]);
}
