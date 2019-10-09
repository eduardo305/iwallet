import { useToasts } from 'react-toast-notifications';
import { redirect, session } from '../api/helpers';
import getServiceResponse from '../api/helpers/request';

const useAuth = () => {
	const { addToast } = useToasts();

	const signup = payload => {
		getServiceResponse(
			'http://localhost:8000/api/auth/signup',
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
			'http://localhost:8000/api/auth/signin',
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
