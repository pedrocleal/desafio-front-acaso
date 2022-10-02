import { BrowserRouter, Link } from 'react-router-dom';
import AppRoutes from './Routes';
import GlobalStyles from './styles/globals'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <BrowserRouter>
      <Toaster toastOptions={{
        style: {
          color: '#1D1E59',
          fontWeight: '500',
        }
      }}/>
      <GlobalStyles />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
