import { connect, iAmReady } from '@tiendanube/nexo/helpers';
import { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import nexo from './nexoClient';
import NexoSyncRoute from './NexoSyncRoute';
import { ConfigurationPage, DetailPage, MainPage } from './pages';


function App() {
  const [isConnect, setIsConnect] = useState(false);

  useEffect(() => {
    connect(nexo).then(async () => {
      setIsConnect(true);
      iAmReady(nexo);
    });
  }, []);


  if (!isConnect) return <div>conecting..</div>;

  return (
    <BrowserRouter>
      <NexoSyncRoute>
        <Switch>
          <Route path="/" exact>
            <MainPage />
          </Route>
          <Route path="/configuration">
            <ConfigurationPage />
          </Route>
          <Route path="/detail">
            <DetailPage />
          </Route>
        </Switch>
      </NexoSyncRoute>
    </BrowserRouter>
  );
}

export default App;
