import './Checkbox.scss';

const CheckBox = ({ field, ...props }) => {
	return (
		<div className="checkbox-wrapper">
			<input type="checkbox" />
			{props.label}
		</div>
	);
};

export default CheckBox;
