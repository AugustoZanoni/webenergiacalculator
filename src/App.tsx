import React from 'react';
import Theme from './styles/Theme';
import AppRoutes from './routes';
import { AuthProvider } from './providers/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <Theme>
        <AppRoutes />
      </Theme>
    </AuthProvider>
  );
}

export default App;
