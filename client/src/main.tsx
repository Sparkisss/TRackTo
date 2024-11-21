import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store/store';
import { AuthObserver } from './features/auth/hocs/AuthObserver';
import { App } from './app/index';
import './shared/api/firebase'
import './index.scss';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <AuthObserver>
        <App />
      </AuthObserver>      
    </Provider>    
  </StrictMode>,
);
