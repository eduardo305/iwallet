import { withAuthorization } from '../utils/auth';
import '../scss/pages/wallet.scss';

const Wallet = props => {
	const { user } = props;

	return <div>wallet {user}</div>;
};

Wallet.getInitialProps = context => {
	return {
		user: 'Bo'
	};
};

export default withAuthorization(Wallet);
