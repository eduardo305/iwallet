import axios from 'axios';

export const post = async (endpoint, payload) => {
	return axios.post(endpoint, payload, {
		headers: { 'content-type': 'application/json' }
	});
};

export default { post };
