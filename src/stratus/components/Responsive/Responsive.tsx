import useResponsive from "../../hooks/useResponsive";

interface ResponsiveProps {
  mobile: JSX.Element;
  desktop: JSX.Element;
}

function Responsive({ mobile, desktop }: ResponsiveProps): JSX.Element {
  const { isMobile } = useResponsive();
  return isMobile ? mobile : desktop;
}

export default Responsive;
