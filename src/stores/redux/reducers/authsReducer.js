import * as types from "../../../constants/types";

import produce from "immer";

const initialState = {
	userData: {},
	token: "",
};

const authsReducer = (state = initialState, action) =>
	produce(state, (draft) => {
		switch (action.type) {
			case types.SIGN_IN_SUCCEEDED:
			case types.SIGN_UP_SUCCEEDED:
			case types.SIGN_IN_FACEBOOK_SUCCEEDED: {
				draft.userData = action.userData;
				draft.token = action.userData.token;
				break;
			}

			case types.SIGN_OUT_SUCCEEDED: {
				draft.userData = {};
				draft.token = "";
				break;
			}

			default:
				break;
		}
	});

export default authsReducer;
