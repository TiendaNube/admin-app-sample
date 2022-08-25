import { Stack } from '@tiendanube/components';
import classNames from 'classnames';

import Header from './Header';

import './Page.scss';

interface PageProps {
  width?: 'large' | 'medium' | 'small';
  header: React.ReactNode;
  children: React.ReactNode;
}
function Page({ width = 'large', header, children }: PageProps) {
  const classStratusPageContent = classNames(
    'stratus--page-content-container',
    `stratus--page-width-${width}`,
  );

  return (
    <>
      <div className={classStratusPageContent}>
        {header}
        <div className="stratus--page-content">
          <Stack column align="stretch" spacing="loose">
            {children}
          </Stack>
        </div>
      </div>
    </>
  );
}

Page.Header = Header;

export default Page;
