import { useToasts } from 'react-toast-notifications';

const useForm = (callback, options = {}) => {
	const { addToast } = useToasts();
	const { onSuccess } = options;

	const onSuccessCallback = onSuccess
		? onSuccess
		: response => {
				addToast(response.data.message, {
					appearance: 'success',
					autoDismiss: true
				});
		  };

	const handleSubmit = values => {
		callback(values)
			.then(response => {
				onSuccessCallback(response);
			})
			.catch(error => {
				addToast(error.response.data.message, {
					appearance: 'error',
					autoDismiss: true
				});
			});
	};

	return {
		handleSubmit
	};
};

export default useForm;
