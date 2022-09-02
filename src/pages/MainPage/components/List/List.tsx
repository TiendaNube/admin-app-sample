import { useResponsive } from '@tiendanube/admin-components';

import ListDesktop from './ListDesktop';
import ListMobile from './ListMobile';

function List(): JSX.Element {
  const { isMobile } = useResponsive();

  return isMobile ? <ListMobile /> : <ListDesktop />;
}

export default List;
