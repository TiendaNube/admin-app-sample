import { Button, Link, Stack } from '@tiendanube/components';
import { CogIcon } from '@tiendanube/icons';
import { goTo, navigateHeaderRemove } from '@tiendanube/nexo/helpers';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import nexo from '../../nexoClient';
import { Page } from '../../stratus/components';
import { useResponsive } from '../../stratus/hooks';

import List from './components/List';
import { ReactComponent as Logo } from './logo.svg';


function PageMain() {
  const { push } = useHistory();
  const { isMobile } = useResponsive();

  const handleGoToConfiguration = () => { push('/configuration') }

  const handleGoToOrders = () => goTo(nexo, '/orders');

  const actions = isMobile ?
    <Link onClick={handleGoToConfiguration} icon={CogIcon} />
    :
    <Stack>
      <Button appearance='default' onClick={handleGoToConfiguration} icon={CogIcon}>Configuración</Button >
      <Button appearance='primary' onClick={handleGoToOrders} >Ir a ventas</Button >
    </Stack>;

  useEffect(() => {
    navigateHeaderRemove(nexo);
  }, []);

  return <Page width='medium' header={
    <Page.Header title={<Logo height={40} />} actions={actions} />
  }>
    <Stack column align="stretch">
      <List />
    </Stack>
  </Page >
}

export default PageMain;