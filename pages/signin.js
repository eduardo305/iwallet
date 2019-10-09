import SigninForm from '../components/forms/signin';
import FullScreen from '../layouts/fullScreen';

export default () => (
	<FullScreen alignment="center" animatedBackground>
		<div className="signin">
			<SigninForm />
		</div>
	</FullScreen>
);
