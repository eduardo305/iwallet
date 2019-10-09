import Link from 'next/link';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import TextInput from '../inputs/TextInput';
import Button from '../../button/';
import Box from '../../Box/';

import useAuth from '../../../api/useAuth';

import '../Form.scss';

const SignupSchema = Yup.object().shape({
	name: Yup.string()
		.max(50, 'Too Long!')
		.required(),
	email: Yup.string()
		.email('Invalid email')
		.required(),
	password: Yup.string()
		.min(2, 'Too Short!')
		.max(50, 'Too Long!')
		.required()
});

export default () => {
	const { signup } = useAuth();

	return (
		<Box className="form-wrapper">
			<Formik
				initialValues={{
					name: '',
					email: '',
					password: ''
				}}
				validationSchema={SignupSchema}
				onSubmit={values => {
					signup(values);
				}}
			>
				{() => (
					<Form className="form">
						<Field name="name" placeholder="name" component={TextInput} />
						<Field name="email" placeholder="email" component={TextInput} />
						<Field
							name="password"
							placeholder="password"
							component={TextInput}
						/>
						<Button type="submit">Submit</Button>
					</Form>
				)}
			</Formik>
			<div className="form-wrapper__footer">
				Already have an account?{' '}
				<Link href="/signin">
					<a>
						<span>Sign in now!</span>
					</a>
				</Link>
			</div>
		</Box>
	);
};
