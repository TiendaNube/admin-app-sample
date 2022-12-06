import {
  Button,
  InterfaceButton,
  InterfaceLink,
  Link,
} from '@tiendanube/components';
import { ChevronLeftIcon } from '@tiendanube/icons';
import { useResponsive } from '../../../../../hooks';

import './HeaderTop.scss';
export interface HeaderTopProps {
  navigation?: Pick<InterfaceButton, 'children' | 'onClick'>;
  mainAction?: Pick<
    InterfaceLink,
    'appearance' | 'children' | 'onClick' | 'icon' | 'spinner' | 'disabled'
  >;
  actions?: React.ReactNode;
  showAllways?: boolean;
}

function HeaderTop({
  navigation,
  mainAction,
  actions,
  showAllways = false,
}: HeaderTopProps): JSX.Element | null {
  const { isMobile } = useResponsive();

  if (!(isMobile || showAllways)) return null;

  const renderMainAction = mainAction && (
    <Link
      appearance={mainAction.appearance}
      icon={mainAction.icon}
      onClick={mainAction.onClick}
      spinner={mainAction.spinner}
      disabled={mainAction.disabled}
    >
      {mainAction.children}
    </Link>
  );

  return (
    <div className="stratus--page-mobile-navbar">
      {navigation && (
        <div className="stratus--page-navbar__back">
          <Button
            onClick={navigation.onClick}
            icon={ChevronLeftIcon}
            appearance="secondary"
          >
            {navigation.children}
          </Button>
        </div>
      )}
      <div className="stratus--page-mobile-navbar__toolbar">
        {renderMainAction}
        {actions}
      </div>
    </div>
  );
}

export default HeaderTop;
