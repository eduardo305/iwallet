import Link from 'next/link';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import Button from '../../button';
import TextInput from '../inputs/TextInput/';
import Box from '../../Box/';
import useAuth from '../../../api/useAuth';

import '../Form.scss';

const SigninSchema = Yup.object().shape({
	email: Yup.string()
		.email('Invalid email')
		.required(),
	password: Yup.string()
		.min(2, 'Too Short!')
		.max(50, 'Too Long!')
		.required()
});

export default () => {
	const { signin } = useAuth();

	return (
		<Box className="form-wrapper">
			<Formik
				initialValues={{
					email: '',
					password: '',
					rememberme: false
				}}
				validationSchema={SigninSchema}
				onSubmit={values => {
					signin(values);
				}}
			>
				{() => (
					<Form className="form">
						<Field name="email" placeholder="email" component={TextInput} />
						<Field
							name="password"
							placeholder="password"
							component={TextInput}
						/>

						{/* <div className="form__controls">
							<a>Forgot your password?</a>
						</div> */}

						<Button type="submit">Submit</Button>
					</Form>
				)}
			</Formik>
			<div className="form-wrapper__footer">
				Don't you have an account?{' '}
				<Link href="/signup">
					<a>
						<span>Sign up now!</span>
					</a>
				</Link>
			</div>
		</Box>
	);
};
