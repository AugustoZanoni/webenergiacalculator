import React from 'react';
import Theme from './styles/Theme';
import AppRoutes from './routes';
import { AuthProvider } from './providers/AuthProvider';
import { AppProvider } from './providers/AppProvider';

function App() {
  return (
    <AuthProvider>
      <AppProvider>
        <Theme>
          <AppRoutes />
        </Theme>
      </AppProvider>
    </AuthProvider>
  );
}

export default App;
