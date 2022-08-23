import { InterfaceButton, InterfaceLabel, Stack } from '@tiendanube/components';
import { Labels, Pagination, Subtitle, Title } from './components';
import { useResponsive } from '../../../hooks';
import HeaderTop from '../../HeaderTop';

export interface HeaderProps {
  title: string | React.ReactNode;
  subtitle?: string;
  labels?: (InterfaceLabel | 'skeleton')[];
  menuMobile?: React.ReactNode;
  actions?: React.ReactNode;
  topNavigation?: Pick<InterfaceButton, 'children' | 'onClick'>;

  paginationPrevious?: () => void;
  paginationNext?: () => void;
}

function Header({
  title,
  subtitle,
  labels,
  actions,
  paginationPrevious,
  paginationNext,
  topNavigation,
}: HeaderProps): JSX.Element {
  const { isDesktop } = useResponsive();

  const isTitleString = typeof 'title' === 'string';

  return (
    <>
      <HeaderTop actions={actions} navigation={topNavigation} />
      <Stack>
        <Stack.Item fill>
          {isTitleString && <Title text={title as string} />}{' '}
          {!isTitleString && title}
        </Stack.Item>
        {(paginationPrevious || paginationNext) && (
          <Stack.Item>
            <Pagination
              paginationPrevious={paginationPrevious}
              paginationNext={paginationNext}
            />
          </Stack.Item>
        )}
        {actions && isDesktop && <Stack.Item>{actions}</Stack.Item>}
      </Stack>
      {subtitle && <Subtitle text={subtitle} />}
      {labels && <Labels>{labels}</Labels>}
    </>
  );
}

export default Header;
