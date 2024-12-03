import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {App} from './App.jsx'
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global.js';
import { defaultTheme } from './styles/theme/default.js';
import { Theme } from '@radix-ui/themes';
import "@radix-ui/themes/styles.css";



createRoot(document.getElementById('root')).render(
  <StrictMode>

		<ThemeProvider theme={defaultTheme}>
			<GlobalStyle/>
				<Theme>
					<App />
				</Theme>

		</ThemeProvider>

  </StrictMode>,




)
