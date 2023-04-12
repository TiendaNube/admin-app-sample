import { Link, Text, Tag, Box } from '@nimbus-ds/components';
import { DataList } from '@nimbus-ds/patterns';
import { useHistory } from 'react-router-dom';

const { Row } = DataList;
function ListMobile() {
  const { push } = useHistory();
  const handleGoToDetail = () => {
    push('/detail');
  };
  return (
    <DataList>
      <Row id={'1'} flexDirection="column">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Link
            as="button"
            appearance="primary"
            onClick={handleGoToDetail}
            textDecoration="none"
          >
            #919191
          </Link>
          <Tag appearance="success" id="aa">
            {'Pagado'}
          </Tag>
        </Box>
        <Text>Customer name</Text>
      </Row>
      <Row id={'2'} flexDirection="column">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Link
            as="button"
            appearance="primary"
            onClick={handleGoToDetail}
            textDecoration="none"
          >
            #919190
          </Link>
          <Tag appearance="danger" id="aa">
            {'Rechazado'}
          </Tag>
        </Box>
        <Text>Customer name</Text>
      </Row>
      <Row id={'3'} flexDirection="column">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Link
            as="button"
            appearance="primary"
            onClick={handleGoToDetail}
            textDecoration="none"
          >
            #919189
          </Link>
          <Tag appearance="success" id="aa">
            {'Pagado'}
          </Tag>
        </Box>
        <Text>Customer name</Text>
      </Row>
      <Row id={'4'} flexDirection="column">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Link
            as="button"
            appearance="primary"
            onClick={handleGoToDetail}
            textDecoration="none"
          >
            #919188
          </Link>
          <Tag appearance="success" id="aa">
            {'Pagado'}
          </Tag>
        </Box>
        <Text>Customer name</Text>
      </Row>
    </DataList>
  );
}

export default ListMobile;
