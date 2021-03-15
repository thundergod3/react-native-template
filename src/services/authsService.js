import HTTPMethod from "./index";

class AuthsService {
	// [GET]

	// [POST]
	signIn = ({ email, password }) => HTTPMethod.post("/api/users/login", { email, password });
	signUp = ({ name, email, password }) => HTTPMethod.post("/api/users/signup", { name, email, password });

	// [PUT]
}

export default new AuthsService();
