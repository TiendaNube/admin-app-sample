import {
  Link,
  Text,
  Stack,
  DataTable,
  Pagination,
  Label,
} from '@tiendanube/components';

import { useHistory } from 'react-router-dom';

const { Header, Cell, Row } = DataTable;
function ListDesktop() {
  const { push } = useHistory();
  const handleGoToDetail = () => {
    push('/detail');
  };

  return (
    <>
      <DataTable>
        <Header>
          <Cell grow={0} basis={120}>
            <Text>Number</Text>
          </Cell>
          <Cell grow={0} basis={130}>
            <Text>Fecha</Text>
          </Cell>
          <Cell grow={1}>
            <Text>Customer</Text>
          </Cell>
          <Cell>
            <Text>Estado</Text>
          </Cell>
        </Header>

        <Row id="1" align="center">
          <Cell grow={0} basis={120}>
            <Link onClick={handleGoToDetail} appearance="primary">
              #93948
            </Link>
          </Cell>
          <Cell grow={0} basis={130}>
            <Text>Customer</Text>
          </Cell>
          <Cell grow={1}>
            <Text>Customer</Text>
          </Cell>
          <Cell>
            <Label appearance="success" id="aa" label={'Pagado'} />
          </Cell>
        </Row>

        <Row id="2" align="center">
          <Cell grow={0} basis={120}>
            <Link onClick={handleGoToDetail} appearance="primary">
              #93948
            </Link>
          </Cell>
          <Cell grow={0} basis={130}>
            <Text>Customer</Text>
          </Cell>
          <Cell grow={1}>
            <Text>Customer</Text>
          </Cell>
          <Cell>
            <Label appearance="danger" id="aa" label={'Rechazado'} />
          </Cell>
        </Row>
      </DataTable>
      <Stack justify="flex-end">
        <Stack.Item>
          <Pagination
            pageSelected={1}
            pageTotal={2}
            onPageSelect={() => console.log('select page')}
          />
        </Stack.Item>
      </Stack>
    </>
  );
}

export default ListDesktop;
