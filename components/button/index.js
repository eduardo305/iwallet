import classNames from 'classnames';

import './Button.scss';

export default ({ children, type = 'submit', fullWidth = true }) => {
	const cssClasses = classNames('button', {
		['button--full']: fullWidth
	});

	return (
		<button type={type} className={cssClasses}>
			{children}
		</button>
	);
};
