import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Card,
  Input,
  InterfaceNameValue,
  Stack,
  Toast,
} from '@tiendanube/components';
import { navigateHeader } from '@tiendanube/nexo/helpers';
import { CancelAndSaveButtons, Page } from '../../stratus/components';
import nexo from '../../nexoClient';
import Layout from '../../stratus/components/Layout';

function DetailPage() {
  const history = useHistory();
  const [showToast, setShowToast] = useState(false);
  const [data, setData] = useState({
    user: '',
    email: '',
  });

  const handleSave = async () => console.log('save');

  const handleChange = ({ name, value }: InterfaceNameValue) => {
    setData({ ...data, [name]: value });
  };

  useEffect(() => {
    navigateHeader(nexo, { goTo: '/', text: 'Listado de registros' });
  }, []);

  return (
    <Page
      width="medium"
      header={
        <Page.Header
          title="Detalle"
          subtitle="Actualizá los datos de tu cuenta"
          topNavigation={{ onClick: history.goBack }}
        />
      }
    >
      <Layout
        mainContent
        left={
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
        }
        right={<Card title={'Más información'}>...</Card>}
      />
    </Page>
  );
}

export default DetailPage;
