import { useNexoConnect } from '@tiendanube/nexo/react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import nexo from './nexoClient';
import NexoSyncRoute from './NexoSyncRoute';

function App() {
  const isConnect = useNexoConnect(nexo);

  if (!isConnect) return <div>conecting..</div>;

  return (
    <BrowserRouter>
      <NexoSyncRoute>
        <Switch>
          <Route path="/subpage" exact>
            <div>subpage
              <button onClick={() => window.history.back()}>back</button>

            </div>
          </Route>
          <Route path="/">
            <div>
              <Link to="/subpage">Go to subpage</Link>
            </div>
          </Route>
        </Switch>
      </NexoSyncRoute>
    </BrowserRouter>
  );
}

export default App;
