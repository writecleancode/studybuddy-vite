import React from 'react';
import ReactDOM from 'react-dom/client';
import { Root } from 'src/views/Root.jsx';
import 'src/assets/styles/fonts.css';
import { worker } from './mocks/browser';

worker
	.start({
		onUnhandledRequest: 'bypass',
	})
	.then(() => {
		ReactDOM.createRoot(document.getElementById('root')).render(
			<React.StrictMode>
				<Root />
			</React.StrictMode>
		);
	});
