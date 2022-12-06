import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {
  BaseCard,
  Input,
  InterfaceRadioButtonOption,
  RadioButtonGroup,
  Stack,
  Title,
  Text,
  Link,
  Label,
} from '@tiendanube/components';
import { EditIcon } from '@tiendanube/icons';
import { navigateHeader } from '@tiendanube/nexo/helpers';
import nexo from '../../nexoClient';
import { CancelAndSaveButtons, Page } from '../../stratus/components';

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

const DELIVERY_TYPES: InterfaceRadioButtonOption[] = [
  {
    label: 'Com custo',
    value: 'cost',
  },
  {
    label: 'Grátis',
    value: 'free',
  },
  {
    label: 'A combinar',
    value: 'toCombine',
  },
];

// TODO: move to other file
function OptionalSectionTitle({ children }: { children: string }): JSX.Element {
  return (
    <Stack spacing="tight">
      <Title type="h3">{children}</Title>
      <Text>(opcional)</Text>
    </Stack>
  );
}

function DeliveryPage() {
  const history = useHistory();
  const handleSave = () => console.log('save');
  const handleCancel = () => history.goBack();

  useEffect(() => {
    navigateHeader(nexo, { goTo: '/', text: 'Formas de entrega' });
  }, []);

  return (
    <Page
      header={
        <Page.Header
          title="Nova entrega personalizada"
          topNavigation={{ onClick: history.goBack }}
        />
      }
      width="small"
    >
      <BaseCard>
        <BaseCard.Header>
          <Title type="h3">Informações</Title>
        </BaseCard.Header>
        <BaseCard.Body>
          <Stack column align="stretch">
            <Input
              name="address"
              label="Datos de entrega:"
              placeholder="Ex: Rua Prudente de Morais, 206 - RJ"
            />
            <RadioButtonGroup
              name="deliveryType"
              label="Retirada"
              options={DELIVERY_TYPES}
              value="cost"
            />
            <Input
              name="price"
              label="Defina um valor:"
              prependLabel="R$"
              type="number"
            />
          </Stack>
        </BaseCard.Body>
      </BaseCard>
      <BaseCard>
        <BaseCard.Header>
          <OptionalSectionTitle>Condições</OptionalSectionTitle>
        </BaseCard.Header>
        <BaseCard.Body>
          <Stack column align="stretch">
            <Text>
              Aplique as condições que quiser, seja por peso, valor da compro ou
              zona de entrega.
            </Text>
            <Title type="h6">Peso total do carrinho</Title>
            <Stack>
              <Stack.Item fill>
                <Input
                  name="minWeight"
                  label="De"
                  appendLabel="kg"
                  type="number"
                />
              </Stack.Item>
              <Stack.Item fill>
                <Input
                  name="maxWeight"
                  label="Até"
                  appendLabel="kg"
                  type="number"
                />
              </Stack.Item>
            </Stack>
            <Title type="h6">Valor total da compra</Title>
            <Stack>
              <Stack.Item fill>
                <Input
                  name="minPrice"
                  label="De"
                  prependLabel="R$"
                  type="number"
                />
              </Stack.Item>
              <Stack.Item fill>
                <Input
                  name="maxPrice"
                  label="Até"
                  prependLabel="R$"
                  type="number"
                />
              </Stack.Item>
            </Stack>
            <Title type="h6">Zonas de entrega</Title>
            <Text>
              Defina para quais estados você deseja oferecer esta forma de
              entrega.
            </Text>
            <Stack>
              <Label id="city" label="Mato Grosso" />
            </Stack>
            <Link appearance="primary" icon={EditIcon} iconPosition="start">
              Editar
            </Link>
          </Stack>
        </BaseCard.Body>
      </BaseCard>
      <BaseCard>
        <BaseCard.Header>
          <OptionalSectionTitle>Prazo de envio</OptionalSectionTitle>
        </BaseCard.Header>
        <BaseCard.Body>
          <Stack column align="stretch">
            <Text>
              Defina um intervalo de dias úteis para a entrega chegar ao seu
              destino.
            </Text>
            <Stack>
              <Stack.Item fill>
                <Input
                  name="minDeliveryDays"
                  label="De"
                  helpText="Dias úteis"
                  type="number"
                />
              </Stack.Item>
              <Stack.Item fill>
                <Input
                  name="maxDeliveryDays"
                  label="Até"
                  helpText="Dias úteis"
                  type="number"
                />
              </Stack.Item>
            </Stack>
          </Stack>
        </BaseCard.Body>
      </BaseCard>
      <CancelAndSaveButtons
        saveText="Criar entrega"
        cancelText="Cancelar"
        onCancel={handleCancel}
        onSave={handleSave}
      />
    </Page>
  );
}

export default DeliveryPage;
