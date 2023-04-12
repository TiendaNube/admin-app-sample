import { connect, iAmReady } from '@tiendanube/nexo/helpers';
import { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ToastProvider } from '@nimbus-ds/components';

import { ThemeProvider } from '@nimbus-ds/styles';
import '@nimbus-ds/styles/dist/index.css';
import '@nimbus-ds/styles/dist/themes/dark.css';

import nexo from './nexoClient';
import NexoSyncRoute from './NexoSyncRoute';
import { ConfigurationPage, DeliveryPage, DetailPage, MainPage } from './pages';

function App() {
  const [isConnect, setIsConnect] = useState(false);

  useEffect(() => {
    connect(nexo).then(async () => {
      setIsConnect(true);
      iAmReady(nexo);
    });
  }, []);

  if (!isConnect) return <div>connecting..</div>;

  return (
    <BrowserRouter>
      <ThemeProvider theme="base">
        <ToastProvider>
          <NexoSyncRoute>
            <Switch>
              <Route path="/" exact>
                <MainPage />
              </Route>
              <Route path="/configuration">
                <ConfigurationPage />
              </Route>
              <Route path="/delivery">
                <DeliveryPage />
              </Route>
              <Route path="/detail">
                <DetailPage />
              </Route>
            </Switch>
          </NexoSyncRoute>
        </ToastProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
