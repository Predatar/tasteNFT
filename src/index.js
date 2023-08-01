import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './pages/app/App';

import 'normalize.css';
import './styles/fonts.scss';
import './styles/variable.scss';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
