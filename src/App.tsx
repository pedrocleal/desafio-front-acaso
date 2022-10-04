import { BrowserRouter, Link } from 'react-router-dom';
import AppRoutes from './Routes';
import GlobalStyles from './styles/globals'
import { Toaster } from 'react-hot-toast'
import AuthProvider from './contexts/AuthContext';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Toaster toastOptions={{
          style: {
            color: '#1D1E59',
            fontWeight: '500',
          }
        }}/>
        <GlobalStyles />
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
