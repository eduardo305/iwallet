import './TextInput.scss';

const TextInput = ({ field, form: { touched, errors }, ...props }) => {
	const { name } = field;

	return (
		<div className="custom-input">
			<input type="text" {...field} {...props} />
			{errors[name] && touched[name] ? (
				<div className="error">{errors[name]}</div>
			) : null}
		</div>
	);
};

export default TextInput;
