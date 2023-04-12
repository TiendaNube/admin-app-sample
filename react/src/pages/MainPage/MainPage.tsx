import { Icon, Button, Box, IconButton } from '@nimbus-ds/components';
import { Page } from '@nimbus-ds/patterns';
import { CogIcon } from '@nimbus-ds/icons';
import { goTo, navigateHeaderRemove } from '@tiendanube/nexo/helpers';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import nexo from '../../nexoClient';
import { useResponsive } from '../../stratus/hooks';

import List from './components/List';

function PageMain() {
  const { push } = useHistory();
  const { isMobile } = useResponsive();

  const handleGoToConfiguration = () => push('/configuration');
  const handleGoToDelivery = () => push('/delivery');
  const handleGoToOrders = () => goTo(nexo, '/orders');

  const actions = isMobile ? (
    <IconButton
      backgroundColor="transparent"
      borderColor="transparent"
      onClick={handleGoToConfiguration}
      source={<CogIcon />}
      size="2rem"
    />
  ) : (
    <Box display="flex" gap="2">
      <Button onClick={handleGoToConfiguration}>
        <Icon source={<CogIcon />} />
        Configuración
      </Button>
      <Button onClick={handleGoToDelivery}>Envios personalizados</Button>
      <Button appearance="primary" onClick={handleGoToOrders}>
        Ir a ventas
      </Button>
    </Box>
  );

  useEffect(() => {
    navigateHeaderRemove(nexo);
  }, []);

  return (
    <>
      <Page maxWidth="1200px">
        <Page.Header title="Pago Nube" buttonStack={actions} />
        <Page.Body>
          <Box display="flex" flexDirection="column" alignItems="stretch">
            <List />
          </Box>
        </Page.Body>
      </Page>
    </>
  );
}

export default PageMain;
