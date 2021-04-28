import axios from 'axios';

class Api {
	init(baseUrl) {
		axios.defaults.baseURL = baseUrl;
		axios.interceptors.response.use(response => response.data, error => Promise.reject(error));
	}

	get(resource) {
		return axios.get(`${resource}&apiKey=${process.env.VUE_APP_API_KEY}`);
	}

	getSource() {
		return axios.get(`sources?apiKey=${process.env.VUE_APP_API_KEY}`);
	}

	getArticle(source) {
		return axios.get(`top-headlines?sources=${source}&apiKey=${process.env.VUE_APP_API_KEY}`);
	}
}

export default new Api();
