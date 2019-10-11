import SignupForm from '../components/forms/signup';
import FullScreen from '../layouts/fullScreen';

export default () => {
	return (
		<FullScreen alignment="center" animatedBackground>
			<div className="signup">
				<SignupForm />
			</div>
		</FullScreen>
	);
};
