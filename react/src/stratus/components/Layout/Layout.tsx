import { Stack } from '@tiendanube/components';
import { useResponsive } from '../../hooks';
import Section from './components/Section';

import './Layout.scss';

export interface LayoutProps {
  left: React.ReactNode;
  right: React.ReactNode;
  mainContent?: boolean;
  orderDesktop?: 'default' | 'reverse';
  orderMobile?: 'default' | 'reverse';
}

function Layout({
  left,
  right,
  mainContent = false,
  orderDesktop = 'default',
  orderMobile = 'default',
}: LayoutProps): JSX.Element {
  const { isDesktop } = useResponsive();
  /* optionality we use `orderDesktop` and `orderMobile` to set the render order of the sections */
  const order = isDesktop ? orderDesktop : orderMobile;
  const contentLeft = order === 'default' ? left : right;
  const contentRight = order === 'default' ? right : left;
  return (
    <main className="stratus--layout">
      <Section isMain={mainContent}>
        <Stack column spacing="loose" align="stretch">
          {contentLeft}
        </Stack>
      </Section>
      <Section>
        <Stack column spacing="loose" align="stretch">
          {contentRight}
        </Stack>
      </Section>
    </main>
  );
}

export default Layout;
