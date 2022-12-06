import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Card,
  Input,
  InterfaceLabel,
  InterfaceNameValue,
  Stack,
  Toast,
} from '@tiendanube/components';
import { CheckCircleIcon, ExclamationCircleIcon } from '@tiendanube/icons';
import { navigateHeader } from '@tiendanube/nexo/helpers';
import { CancelAndSaveButtons, Page } from '../../stratus/components';
import nexo from '../../nexoClient';

const delay = (t: number) => new Promise((resolve) => setTimeout(resolve, t));

function ConfigurationPage() {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [data, setData] = useState({
    user: '',
    email: '',
  });

  const handleSave = async () => {
    setIsLoading(true);
    await delay(1000);
    setIsLoading(false);
    setShowToast(true);
  };

  const handleChange = ({ name, value }: InterfaceNameValue) => {
    setData({ ...data, [name]: value });
  };

  const labelsHeader: InterfaceLabel[] = [
    {
      id: 'verify',
      appearance: 'success',
      icon: CheckCircleIcon,
      label: 'Cuenta verificada',
    },
    {
      id: 'pending_payments',
      appearance: 'warning',
      icon: ExclamationCircleIcon,
      label: 'Pagos pendientes',
    },
  ];

  useEffect(() => {
    navigateHeader(nexo, { goTo: '/', text: 'Listado de registros' });
  }, []);

  return (
    <Page
      width="small"
      header={
        <Page.Header
          title="Configuration"
          subtitle="Actualizá los datos de tu cuenta"
          labels={labelsHeader}
          topNavigation={{ onClick: history.goBack }}
        />
      }
    >
      <Card title={'Datos personales'}>
        <Stack column align="stretch">
          <Input
            name="user"
            label="Usuario"
            value={data.user}
            onChange={handleChange}
          />
          <Input
            name="email"
            label="Email"
            value={data.email}
            onChange={handleChange}
          />

          <CancelAndSaveButtons
            saveText="Guardar"
            onCancel={history.goBack}
            onSave={handleSave}
            cancelText="Cancel"
            isLoading={isLoading}
            isDisabled={isLoading}
          />
          {showToast && (
            <Toast
              label="Datos actualizado"
              appearance="success"
              onClose={() => {
                setShowToast(false);
              }}
            />
          )}
        </Stack>
      </Card>
    </Page>
  );
}

export default ConfigurationPage;
