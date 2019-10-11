import { useToasts } from 'react-toast-notifications';
import { redirect, session } from '../api/helpers';
import getServiceResponse from '../api/helpers/request';

const useAuth = () => {
	const { addToast } = useToasts();
	const baseUrl = 'https://iwallet-api.herokuapp.com';

	const signup = payload => {
		getServiceResponse(
			`${baseUrl}/api/auth/signup`,
			'signup',
			payload,
			{},
			(response, error) => {
				if (error) {
					return addToast(error.message, {
						appearance: 'error',
						autoDismiss: true
					});
				}
				session.setCookie('token', response.token);
				redirect('/wallet');
			}
		);
	};

	const signin = payload => {
		getServiceResponse(
			`${baseUrl}/api/auth/signin`,
			'signin',
			payload,
			{},
			(response, error) => {
				if (error) {
					return addToast(error.message, {
						appearance: 'error',
						autoDismiss: true
					});
				}

				session.setCookie('token', response.token);
				redirect('/wallet');
			}
		);
	};

	return {
		signup,
		signin
	};
};

export default useAuth;
