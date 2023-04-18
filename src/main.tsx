import { createRoot } from 'react-dom/client';
import App from '@/App';
import './styles/index.scss';
import { Provider } from 'react-redux';
import store from '@/store';
import { BrowserRouter } from 'react-router-dom';

function bootstrap() {
  const rootNode = document.getElementById('root')!;
  const root = createRoot(rootNode);
  root.render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>,
  );
}

window.addEventListener('load', bootstrap);
