// Render Prop
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
	email: Yup.string()
		.email('Invalid email')
		.required('Required'),
	password: Yup.string()
		.min(2, 'Too Short!')
		.max(50, 'Too Long!')
		.required('Required')
});

export default () => (
	<div>
		<h1>Signup</h1>
		<Formik
			initialValues={{
				email: '',
				password: ''
			}}
			validationSchema={SignupSchema}
			onSubmit={values => {
				// same shape as initial values
				console.log(values);
			}}
		>
			{({ errors, touched }) => (
				<Form>
					<Field name="email" />
					{errors.email && touched.email ? <div>{errors.email}</div> : null}
					<Field name="password" />
					{errors.password && touched.password ? (
						<div>{errors.password}</div>
					) : null}
					<button type="submit">Submit</button>
				</Form>
			)}
		</Formik>
	</div>
);
