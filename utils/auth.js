import { Component } from 'react';
import Router from 'next/router';
import nextCookies from 'next-cookies';

const authenticate = context => {
	const { token } = nextCookies(context);

	if (context.req && !token) {
		context.res.writeHead(302, { Location: '/signin' });
		context.res.end();
		return;
	}

	if (!token) {
		Router.push('/signin');
	}

	return token;
};

const withAuthorization = WrappedComponent => {
	return class extends Component {
		static displayName = `withAuthorization(${WrappedComponent.displayName ||
			WrappedComponent.name ||
			'WrappedComponent'})`;

		static async getInitialProps(context) {
			const token = authenticate(context);

			const componentProps =
				WrappedComponent.getInitialProps &&
				(await WrappedComponent.getInitialProps(context));

			return { ...componentProps, token };
		}

		render() {
			return <WrappedComponent {...this.props} />;
		}
	};
};

export { withAuthorization };
