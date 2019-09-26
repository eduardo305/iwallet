import { post } from './helpers/request';
import { redirect, session } from './helpers';

const signin = async payload => {
	const response = await post('http://localhost:8000/auth/login', payload);

	session.setCookie('token', response.data['access_token']);

	redirect('/wallet');
};

const getJwtToken = context => session.getCookie('token', context.req);

const isAuthenticated = context => !!getJwtToken(context);

const redirectIfNotSignedIn = context => {
	if (!isAuthenticated(context)) {
		redirect('/signin', context);

		return true;
	}

	return false;
};

export { signin, getJwtToken, redirectIfNotSignedIn };
