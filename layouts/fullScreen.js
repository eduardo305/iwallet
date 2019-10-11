import classNames from 'classnames';

import '../scss/index.scss';
import '../scss/layouts/fullScreen.scss';

export default ({
	children,
	alignment = 'center',
	animatedBackground = false
}) => {
	const cssClass = classNames('full-screen', {
		'full-screen--center': alignment === 'center',
		'full-screen--animated': animatedBackground
	});

	return <div className={cssClass}>{children}</div>;
};
