import { connect, iAmReady } from '@tiendanube/nexo/helpers';
import { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import nexo from './nexoClient';
import NexoSyncRoute from './NexoSyncRoute';
import {
  ConfirmationModalExamplePage,
  ExamplesPage,
  FormExamplePage,
  LoginExamplePage,
  MainPage,
  PageTemplateExamplePage,
  ProductListExamplePage,
  SettingsExamplePage,
  SimpleListExamplePage,
} from './pages';
import { DarkModeProvider, ProductProvider, BaseLayout } from './components';
import { generateProducts } from './lib';

import { ToastProvider } from '@nimbus-ds/components';
import ProductsPage from './pages/ProductsPage.tsx/ProductsPage';

function App() {
  const [isConnect, setIsConnect] = useState(false);

  useEffect(() => {
    connect(nexo).then(async () => {
      setIsConnect(true);
      iAmReady(nexo);
    });
  }, []);

  if (!isConnect) return <div>connecting..</div>;

  const initialProducts = generateProducts(30);

  return (
    <DarkModeProvider>
      <BrowserRouter>
        <ProductProvider initialProducts={initialProducts}>
          <ToastProvider>
            <BaseLayout>
              <NexoSyncRoute>
                <Switch>
                  <Route path="/" exact>
                    <MainPage />
                  </Route>
                  <Route path="/examples">
                    <ExamplesPage />
                  </Route>
                  <Route path="/products">
                    <ProductsPage />
                  </Route>
                  <Route path="/examples-confirmation-modal">
                    <ConfirmationModalExamplePage />
                  </Route>
                  <Route path="/examples-form">
                    <FormExamplePage />
                  </Route>
                  <Route path="/examples-login">
                    <LoginExamplePage />
                  </Route>
                  <Route path="/examples-page-template">
                    <PageTemplateExamplePage />
                  </Route>
                  <Route path="/examples-product-list">
                    <ProductListExamplePage />
                  </Route>
                  <Route path="/examples-settings">
                    <SettingsExamplePage />
                  </Route>
                  <Route path="/examples-simple-list">
                    <SimpleListExamplePage />
                  </Route>
                </Switch>
              </NexoSyncRoute>
            </BaseLayout>
          </ToastProvider>
        </ProductProvider>
      </BrowserRouter>
    </DarkModeProvider>
  );
}

export default App;
