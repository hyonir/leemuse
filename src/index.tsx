import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {ThemeProvider , createTheme} from '@mui/material/styles';
import App from './App';

const theme = createTheme({});

const container  = document.getElementById('root');
const root = createRoot(container!);
root.render(
    <ThemeProvider theme={theme}>
        <App/>
    </ThemeProvider>,
)

reportWebVitals();
