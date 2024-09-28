import './output.css'
import App from './App.tsx'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import ReduxProvider from './store/ReduxProvider.tsx'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter>
			<ReduxProvider>
				<App />
			</ReduxProvider>
		</BrowserRouter>
	</StrictMode>,
)
