import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Card, Box, useToast } from '@nimbus-ds/components';
import { Layout, Page, FormField } from '@nimbus-ds/patterns';
import { navigateHeader } from '@tiendanube/nexo/helpers';
import { CancelAndSaveButtons } from '../../stratus/components';
import nexo from '../../nexoClient';

interface InterfaceNameValue {
  name: string;
  value: string;
}

function DetailPage() {
  const history = useHistory();
  const [showToast, setShowToast] = useState(false);
  const [data, setData] = useState({
    user: '',
    email: '',
  });
  const { addToast } = useToast();

  const handleSave = async () => {
    console.log('save');
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
    <Page maxWidth="1200px">
      <Page.Header
        title="Detalle"
        subtitle="Actualizá los datos de tu cuenta"
      />
      <Page.Body>
        <Layout columns="2 - asymmetric">
          <Layout.Section>
            <Card>
              <Card.Header title={'Datos personales'} />
              <Card.Body>
                <Box display="flex" flexDirection="column" gap="2">
                  <FormField.Input
                    id="user"
                    label="Usuario"
                    //value={data.user}
                    //onChange={handleChange}
                  />
                  <FormField.Input
                    id="email"
                    label="Email"
                    //value={data.email}
                    //onChange={handleChange}
                  />
                </Box>
              </Card.Body>
              <Card.Footer>
                <CancelAndSaveButtons
                  saveText="Guardar"
                  onCancel={history.goBack}
                  onSave={handleSave}
                  cancelText="Cancel"
                />
              </Card.Footer>
            </Card>
          </Layout.Section>
          <Layout.Section>
            <Card>
              <Card.Header title={'Más información'} />
              <Card.Body>...</Card.Body>
            </Card>
          </Layout.Section>
        </Layout>
      </Page.Body>
    </Page>
  );
}

export default DetailPage;
