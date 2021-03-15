import axios from "axios";

const initUser = ({ token }) =>
	axios
		.get("https://graph.facebook.com/v2.5/me?fields=email,name,friends&access_token=" + token)
		.then((data) => data)
		.catch((error) => {
			console.log(error);
		});

export default initUser;
