import { DataList, Link, Text, Label } from "@tiendanube/components";
import { useHistory } from "react-router-dom";

const { Row, Cell } = DataList;
function ListMobile() {
  const { push } = useHistory();
  const handleGoToDetail = () => { push('/detail') }
  return (
    <DataList>
      <Row id={'1'}>
        <Cell rowTitle trimText width={70}>
          <Link appearance="primary" onClick={handleGoToDetail}>
            #919191
          </Link>
        </Cell>
        <Cell width={30} alignRight>
          <Label appearance='success' id='aa' label={'Pagado'} />
        </Cell>
        <Cell>
          <Text textAlign="right">Aaa NN</Text>
        </Cell>
      </Row>
      <Row id={'2'}>
        <Cell rowTitle trimText width={70}>
          <Link appearance="primary" onClick={handleGoToDetail}>
            #919191
          </Link>
        </Cell>
        <Cell width={30} alignRight>
          <Label appearance='danger' id='aa' label={'Rechazado'} />
        </Cell>
        <Cell>
          <Text textAlign="right">Aaa NN</Text>
        </Cell>
      </Row>
      <Row id={'22'}>
        <Cell rowTitle trimText width={70}>
          <Link appearance="primary" onClick={handleGoToDetail}>
            #919191
          </Link>
        </Cell>
        <Cell width={30} alignRight>
          <Label appearance='success' id='aa' label={'Pagado'} />
        </Cell>
        <Cell>
          <Text textAlign="right">Aaa NN</Text>
        </Cell>
      </Row>
      <Row id={'22'}>
        <Cell rowTitle trimText width={70}>
          <Link appearance="primary" onClick={handleGoToDetail}>
            #919191
          </Link>
        </Cell>
        <Cell width={30} alignRight>
          <Label appearance='success' id='aa' label={'Pagado'} />
        </Cell>
        <Cell>
          <Text textAlign="right">Aaa NN</Text>
        </Cell>
      </Row>
    </DataList>
  );
}

export default ListMobile;