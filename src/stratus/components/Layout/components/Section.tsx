import classNames from 'classnames';

export interface LayoutSectionProps {
  children: React.ReactNode;
  isMain?: boolean;
}

function Section({
  children,
  isMain = false,
}: LayoutSectionProps): JSX.Element {
  const mainClass = classNames('stratus--layout-section', {
    'stratus--layout-section--main': isMain,
  });
  return <section className={mainClass}> {children}</section>;
}

export default Section;
