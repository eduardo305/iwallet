import getServiceResponse from './helpers/request';
import { redirect, session } from './helpers';

const signin = async payload => {
	getServiceResponse(
		'http://localhost:8000/api/auth/signin',
		'signin',
		payload,
		{},
		(response, error) => {
			if (error) {
				console.log('TCL: error', error);
			}

			session.setCookie('token', response);
			redirect('/wallet');
		}
	);
};

const signup = async payload => {
	return getServiceResponse(
		'http://localhost:8000/api/auth/signup',
		'signup',
		payload,
		{},
		(response, error) => {
			if (error) {
				console.log('TCL: error', error);
			}

			redirect('/signin');
		}
	);

	// const response = await post('http://localhost:8000/api/auth/signup', payload);
	// redirect('/signin');
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

export { signin, signup, getJwtToken, redirectIfNotSignedIn };
