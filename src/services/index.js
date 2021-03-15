import axios from "axios";

class HTTPMethod {
	constructor() {
		this.axios = axios;
		this.axios.defaults.baseURL = "https://proshop-app-fullstack.herokuapp.com";
		this.axios.defaults.headers = { "Access-Control-Allow-Origin": "*", "Content-type": "application/json" };
	}

	get = (url, remainProps) => axios.get(url, remainProps);

	post = (url, remainProps) => axios.post(url, remainProps);

	put = (url, remainProps) => axios.put(url, remainProps);

	delete = (url, remainProps) => axios.delete(url, remainProps);

	attachTokenToHeader = ({ token }) => (axios.defaults.headers["Authorization"] = `Bearer ${token}`);

	removeTokenToHeader = () => (axios.defaults.headers["Authorization"] = "");
}

export default new HTTPMethod();
