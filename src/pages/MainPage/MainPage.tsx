import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Page, useResponsive } from '@tiendanube/admin-components';
import { Button, Link, Stack } from '@tiendanube/components';
import { CogIcon, MoneyIcon } from '@tiendanube/icons';
import { goTo, navigateHeaderRemove } from '@tiendanube/nexo/helpers';

import nexo from '../../nexoClient';

import List from './components/List';
import { ReactComponent as Logo } from './logo.svg';

function PageMain() {
  const { push } = useHistory();
  const { isMobile } = useResponsive();

  const handleGoToConfiguration = () => push('/configuration');
  const handleGoToDelivery = () => push('/delivery');
  const handleGoToOrders = () => goTo(nexo, '/orders');

  const actions = isMobile ? (
    <Link onClick={handleGoToConfiguration} icon={CogIcon} />
  ) : (
    <Stack>
      <Button
        appearance="default"
        onClick={handleGoToConfiguration}
        icon={CogIcon}
      >
        Configuración
      </Button>
      <Button appearance="default" onClick={handleGoToDelivery}>
        Envios personalizados
      </Button>
      <Button appearance="primary" icon={MoneyIcon} onClick={handleGoToOrders}>
        Ventas
      </Button>
    </Stack>
  );

  useEffect(() => {
    navigateHeaderRemove(nexo);
  }, []);

  return (
    <Page
      width="medium"
      header={<Page.Header title={<Logo height={40} />} actions={actions} />}
    >
      <Stack column align="stretch">
        <List />
      </Stack>
    </Page>
  );
}

export default PageMain;
