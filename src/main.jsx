import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import StateContext from './context/StateContext.jsx'
import App from './App.jsx'
import './index.css'

import { HelmetProvider } from 'react-helmet-async'

const root = document.getElementById('root')

createRoot(root).render(
	<StrictMode>
		<Router>
			<StateContext>
				<HelmetProvider>
					<App />
				</HelmetProvider>
			</StateContext>
		</Router>
	</StrictMode>,
)
