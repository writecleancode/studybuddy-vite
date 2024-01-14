import React from 'react';
import ReactDOM from 'react-dom/client';
import { Root } from 'src/views/Root';
import 'src/assets/styles/fonts.css';
import { worker } from 'src/mocks/browser';
import { AppProviders } from './providers/AppProviders';

worker
	.start({
		onUnhandledRequest: 'bypass',
	})
	.then(() => {
		ReactDOM.createRoot(document.getElementById('root')!).render(
			<React.StrictMode>
				<AppProviders>
					<Root />
				</AppProviders>
			</React.StrictMode>
		);
	});
