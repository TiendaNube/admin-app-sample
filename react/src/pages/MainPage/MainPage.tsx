import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import {
  Icon,
  Button,
  Box,
  IconButton,
  Card,
  Title,
  Text,
  Link,
} from '@nimbus-ds/components';
import { Layout, Page } from '@nimbus-ds/patterns';
import {
  ExternalLinkIcon,
  PictureIcon,
  PlusCircleIcon,
  TagIcon,
} from '@nimbus-ds/icons';
import tokens from '@nimbus-ds/tokens/dist/js/tokens';
import { goTo, navigateHeaderRemove } from '@tiendanube/nexo/helpers';

import nexo from '../../nexoClient';
import { useWindowWidth } from '../../hooks';
import { useProductContext } from '../../components';

function PageMain() {
  const { push } = useHistory();
  const windowWidth = useWindowWidth();

  const breakpointMd = tokens.breakpoint.md.value.replace('px', '');

  const handleGoToExamples = () => push('/examples');
  const handleGoToProducts = () => push('/products');
  const handleGoToOrders = () => goTo(nexo, '/orders');

  const { products, addProducts } = useProductContext();
  const productsQty = products.length;

  const add5Products = () => addProducts(5);

  const actions =
    windowWidth !== null && windowWidth <= breakpointMd ? (
      <IconButton
        backgroundColor="transparent"
        borderColor="transparent"
        onClick={handleGoToExamples}
        source={<PictureIcon />}
        size="2rem"
      />
    ) : (
      <Box display="flex" gap="2">
        <Button onClick={handleGoToExamples}>
          <Icon source={<PictureIcon />} color="currentColor" />
          Ejemplos
        </Button>
        <Button onClick={handleGoToProducts}>
          <Icon source={<TagIcon />} color="currentColor" />
          Productos
        </Button>
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
      <Page maxWidth="800px">
        <Page.Header title="Demo app" buttonStack={actions} />
        <Page.Body>
          <Layout columns="1">
            <Layout.Section>
              <Card>
                <Card.Header title="Demo app" />
                <Card.Body>
                  <Text>
                    Esta app de ejemplo incluye nuestro&nbsp;
                    <Link
                      as="a"
                      href="https://nimbus.tiendanube.com/"
                      target="_blank"
                      appearance="primary"
                      textDecoration="none"
                    >
                      design system Nimbus
                    </Link>
                    &nbsp;y la integración a la&nbsp;
                    <Link appearance="primary" textDecoration="none">
                      API de Tiendanube
                    </Link>
                    &nbsp;para facilitar el desarrollo de nuevas aplicaciones
                    para nuestro ecosistema.
                  </Text>
                </Card.Body>
                <Card.Footer>
                  <Link>
                    Conocé más sobre cómo crear tu app
                    <Icon color="currentColor" source={<ExternalLinkIcon />} />
                  </Link>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Header title="Contador de productos de Tienda demo" />
                <Card.Body>
                  <Box display="flex" flexDirection="column" gap="4" mb="2">
                    <Text>
                      Los productos de ejemplo se crean con un nombre y precio
                      aleatorios, a modo de prueba. Podés modificarlos o
                      eliminarlos en cualquier momento.
                    </Text>
                    <Box display="flex" flexDirection="column" gap="2">
                      <Text color="neutral-textDisabled">
                        Total de productos
                      </Text>
                      <Title as="h6" fontSize="h1" color="primary-textLow">
                        {productsQty}
                      </Title>
                    </Box>
                  </Box>
                </Card.Body>
                <Card.Footer>
                  <Button appearance="primary" onClick={add5Products}>
                    <Icon color="currentColor" source={<PlusCircleIcon />} />
                    Crear 5 productos
                  </Button>
                </Card.Footer>
              </Card>
            </Layout.Section>
          </Layout>
        </Page.Body>
      </Page>
    </>
  );
}

export default PageMain;
