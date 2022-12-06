import useWindowSize from '../useWindowSize';

interface UseResponsiveResult {
  isMobile: boolean;
  isDesktop: boolean;
}

export const MOBILE_BREAKPOINT = 992;

function useResponsive(
  breakpoint: number = MOBILE_BREAKPOINT,
): UseResponsiveResult {
  const { width } = useWindowSize();
  const isMobile = width < breakpoint;
  return {
    isMobile,
    isDesktop: !isMobile,
  };
}

export default useResponsive;
