import Header from './components/partials/Header';
import Footer from './components/partials/Footer';
import { BrowserRouter } from 'react-router-dom';

import AppRoutes from './Routes';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
