import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { StoreContext, store } from './stores/store';


import './styles/normalize.css';
import './styles/style.css';
import './styles/style-label.css';
import './styles/style-btn-loading.css';
import './styles/style-btn.css';
import './styles/style-btn-outline.css';
import './styles/style-timeline.css';

import './styles/style-footer.css';
import './styles/style-sidebar.css';
import './styles/style-section-certification.css';
import './styles/style-section-home.css';
import './styles/style-section-project.css';
import './styles/style-section-project.css';
import './styles/style-section-summary.css';
import './styles/style-section-working.css';
import './styles/style-section-education.css';
import './styles/style-section-contact.css';
import "./languages/i18n";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StoreContext.Provider value={store}>
      <App />
    </StoreContext.Provider>
  </React.StrictMode>,
)
