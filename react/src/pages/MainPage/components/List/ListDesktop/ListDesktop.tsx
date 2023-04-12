import { Link, Text, Table, Tag } from '@nimbus-ds/components';

import { useHistory } from 'react-router-dom';

const { Head, Cell, Row, Body } = Table;
function ListDesktop() {
  const { push } = useHistory();
  const handleGoToDetail = () => {
    push('/detail');
  };

  return (
    <>
      <Table>
        <Head>
          <Row backgroundColor="neutral-surface">
            <Cell as="th" width="120px">
              Number
            </Cell>
            <Cell as="th" width="140px">
              Fecha
            </Cell>
            <Cell as="th">Customer</Cell>
            <Cell as="th">Estado</Cell>
          </Row>
        </Head>

        <Body>
          <Row id="1">
            <Cell>
              <Link
                as="button"
                onClick={handleGoToDetail}
                appearance="primary"
                textDecoration="none"
              >
                #93948
              </Link>
            </Cell>
            <Cell>
              <Text>11 apr 23</Text>
            </Cell>
            <Cell>
              <Text>Customer name</Text>
            </Cell>
            <Cell>
              <Tag appearance="success" id="aa">
                {'Pagado'}
              </Tag>
            </Cell>
          </Row>

          <Row id="2">
            <Cell>
              <Link
                as="button"
                onClick={handleGoToDetail}
                appearance="primary"
                textDecoration="none"
              >
                #93947
              </Link>
            </Cell>
            <Cell>
              <Text>10 apr 23</Text>
            </Cell>
            <Cell>
              <Text>Customer name</Text>
            </Cell>
            <Cell>
              <Tag appearance="danger" id="aa">
                {'Rechazado'}
              </Tag>
            </Cell>
          </Row>
        </Body>
      </Table>
    </>
  );
}

export default ListDesktop;
