import { redirectIfNotSignedIn } from '../api/auth';

const Wallet = () => {
	return <div>wallet</div>;
};

Wallet.getInitialProps = context => {
	if (redirectIfNotSignedIn(context)) {
		return null;
	}

	return {};
};

export default Wallet;
