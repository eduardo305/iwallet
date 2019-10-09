import React from 'react';
import App from 'next/app';

import { ToastProvider } from 'react-toast-notifications';
import { AppStateProvider } from '../AppState';

class MyApp extends App {
	render() {
		const { Component, pageProps } = this.props;

		return (
			<AppStateProvider>
				<ToastProvider placement="top-center">
					<Component {...pageProps} />)
				</ToastProvider>
			</AppStateProvider>
		);
	}
}

export default MyApp;
