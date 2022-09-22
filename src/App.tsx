import { BrowserRouter, Link } from 'react-router-dom';
import AppRoutes from './Routes';
import GlobalStyles from './styles/globals'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
