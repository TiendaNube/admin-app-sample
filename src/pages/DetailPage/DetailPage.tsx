import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  CancelAndSaveButtons,
  Page,
  Layout,
} from '@tiendanube/admin-components';
import {
  Card,
  Input,
  InterfaceNameValue,
  Stack,
  Toast,
  Text,
} from '@tiendanube/components';
import { navigateHeader } from '@tiendanube/nexo/helpers';

import nexo from '../../nexoClient';

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
        right={
          <Card title={'Más información'}>
            <Text>
              Store: <b>ocaemailsintag</b>
            </Text>
          </Card>
        }
      />
    </Page>
  );
}

export default DetailPage;
