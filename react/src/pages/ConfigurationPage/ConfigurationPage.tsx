import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Card, Box, Tag, Icon, useToast } from '@nimbus-ds/components';
import { Page, FormField } from '@nimbus-ds/patterns';
import { CheckCircleIcon, ExclamationCircleIcon } from '@nimbus-ds/icons';
import { navigateHeader } from '@tiendanube/nexo/helpers';
import { CancelAndSaveButtons } from '../../stratus/components';
import nexo from '../../nexoClient';

const delay = (t: number) => new Promise((resolve) => setTimeout(resolve, t));

interface InterfaceNameValue {
  name: string;
  value: string;
}

function ConfigurationPage() {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [data, setData] = useState({
    user: '',
    email: '',
  });
  const { addToast } = useToast();

  const handleSave = async () => {
    setIsLoading(true);
    await delay(1000);
    setIsLoading(false);
    setShowToast(true);
    addToast({
      type: 'success',
      text: 'Datos actualizados',
      duration: 4000,
      id: 'toast',
    });
  };

  const handleChange = ({ name, value }: InterfaceNameValue) => {
    setData({ ...data, [name]: value });
  };

  useEffect(() => {
    navigateHeader(nexo, { goTo: '/', text: 'Listado de registros' });
  }, []);

  return (
    <Page maxWidth="800px">
      <Page.Header
        title="Configuration"
        subtitle="Actualizá los datos de tu cuenta"
      >
        <Box display="flex" gap="2">
          <Tag appearance="success" id="verify">
            <Icon source={<CheckCircleIcon />} color="currentColor" />
            Cuenta verificada
          </Tag>
          <Tag appearance="warning" id="pending_payments">
            <Icon source={<ExclamationCircleIcon />} color="currentColor" />
            Pagos pendientes
          </Tag>
        </Box>
      </Page.Header>
      <Page.Body>
        <Card>
          <Card.Header title={'Datos personales'} />
          <Card.Body>
            <Box display="flex" flexDirection="column" gap="2">
              <FormField.Input
                id="user"
                label="Usuario"
                // value={data.user}
                // onChange={handleChange}
              />
              <FormField.Input
                id="email"
                label="Email"
                // value={data.email}
                // onChange={handleChange}
              />
            </Box>
          </Card.Body>
          <Card.Footer>
            <CancelAndSaveButtons
              saveText="Guardar"
              onCancel={history.goBack}
              onSave={handleSave}
              cancelText="Cancel"
              isLoading={isLoading}
              isDisabled={isLoading}
            />
          </Card.Footer>
        </Card>
      </Page.Body>
    </Page>
  );
}

export default ConfigurationPage;
