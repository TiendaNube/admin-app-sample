import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Card,
  Title,
  Text,
  Link,
  Box,
  Radio,
  Tag,
  Icon,
} from '@nimbus-ds/components';
import { EditIcon } from '@nimbus-ds/icons';
import { FormField, Page, Layout } from '@nimbus-ds/patterns';
import { navigateHeader } from '@tiendanube/nexo/helpers';
import nexo from '../../nexoClient';
import { CancelAndSaveButtons } from '../../stratus/components';

// TODO: implement state
const INITIAL_STATE = {
  address: '',
  deliveryType: '',
  price: '',
  conditions: {
    minWeight: '',
    maxWeight: '',
    minPrice: '',
    maxPrice: '',
  },
  minDeliveryDays: '',
  maxDeliveryDays: '',
};

function DeliveryPage() {
  const history = useHistory();
  const handleSave = () => console.log('save');
  const handleCancel = () => history.goBack();

  useEffect(() => {
    navigateHeader(nexo, { goTo: '/', text: 'Formas de entrega' });
  }, []);

  return (
    <Page maxWidth="800px">
      <Page.Header title="Nova entrega personalizada" />
      <Page.Body>
        <Layout columns="1">
          <Layout.Section>
            <Card>
              <Card.Header title="Informações" />
              <Card.Body>
                <Box display="flex" flexDirection="column" gap="2">
                  <FormField.Input
                    //name="address"
                    label="Datos de entrega:"
                    placeholder="Ex: Rua Prudente de Morais, 206 - RJ"
                  />
                  <FormField
                    //name="deliveryType"
                    label="Retirada"
                  >
                    <Box display="flex" gap="1">
                      <Radio
                        as="button"
                        label="Com custo"
                        name="DELIVERY_TYPES"
                        id="cost"
                      />
                      <Radio
                        as="button"
                        label="Grátis"
                        name="DELIVERY_TYPES"
                        id="free"
                      />
                      <Radio
                        as="button"
                        label="A combinar"
                        name="DELIVERY_TYPES"
                        id="toCombine"
                      />
                    </Box>
                  </FormField>
                  <FormField.Input
                    //name="price"
                    label="Defina um valor:"
                    append={<Text color="neutral-textDisabled">R$</Text>}
                    //type="number"
                  />
                </Box>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>
                <Box display="flex" gap="2" alignItems="flex-end">
                  <Title as="h3">Condições</Title>
                  <Text>(opcional)</Text>
                </Box>
              </Card.Header>
              <Card.Body>
                <Box display="flex" flexDirection="column" gap="4">
                  <Text>
                    Aplique as condições que quiser, seja por peso, valor da
                    compro ou zona de entrega.
                  </Text>
                  <Title as="h6">Peso total do carrinho</Title>
                  <Box display="flex" gap="2">
                    <FormField.Input
                      //name="minWeight"
                      label="De"
                      append={<Text color="neutral-textDisabled">kg</Text>}
                      appendPosition="end"
                      //type="number"
                    />
                    <FormField.Input
                      //name="maxWeight"
                      label="Até"
                      append={<Text color="neutral-textDisabled">kg</Text>}
                      appendPosition="end"
                      //type="number"
                    />
                  </Box>
                  <Title as="h6">Valor total da compra</Title>
                  <Box display="flex" gap="2">
                    <FormField.Input
                      //name="minPrice"
                      label="De"
                      append={<Text color="neutral-textDisabled">R$</Text>}
                      //type="number"
                    />
                    <FormField.Input
                      //name="maxPrice"
                      label="Até"
                      append={<Text color="neutral-textDisabled">R$</Text>}
                      //type="number"
                    />
                  </Box>
                  <Title as="h6">Zonas de entrega</Title>
                  <Text>
                    Defina para quais estados você deseja oferecer esta forma de
                    entrega.
                  </Text>
                  <Tag id="city">Mato Grosso</Tag>
                  <Link appearance="primary">
                    <Icon source={<EditIcon />} color="currentColor" />
                    Editar
                  </Link>
                </Box>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>
                <Box display="flex" gap="2" alignItems="flex-end">
                  <Title as="h3">Prazo de envio</Title>
                  <Text>(opcional)</Text>
                </Box>
              </Card.Header>
              <Card.Body>
                <Box display="flex" flexDirection="column" gap="4">
                  <Text>
                    Defina um intervalo de dias úteis para a entrega chegar ao
                    seu destino.
                  </Text>
                  <Box display="flex" gap="2">
                    <FormField.Input
                      //name="minDeliveryDays"
                      label="De"
                      helpText="Dias úteis"
                      //type="number"
                    />
                    <FormField.Input
                      //name="maxDeliveryDays"
                      label="Até"
                      helpText="Dias úteis"
                      //type="number"
                    />
                  </Box>
                </Box>
              </Card.Body>
            </Card>
            <CancelAndSaveButtons
              saveText="Criar entrega"
              cancelText="Cancelar"
              onCancel={handleCancel}
              onSave={handleSave}
            />
          </Layout.Section>
        </Layout>
      </Page.Body>
    </Page>
  );
}

export default DeliveryPage;
