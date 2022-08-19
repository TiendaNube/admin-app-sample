import { ChevronLeftIcon, ChevronRightIcon } from '@tiendanube/icons';

import { Link, Stack } from '@tiendanube/components';

import './Pagination.scss';

export interface PaginationProps {
  paginationPrevious?: () => void;
  paginationNext?: () => void;
}

function Pagination({
  paginationPrevious,
  paginationNext,
}: PaginationProps): JSX.Element | null {
  return (
    <div className="stratus--page-header__pagination">
      <Stack spacing="none">
        <Stack.Item>
          <Link
            onClick={paginationPrevious}
            icon={ChevronLeftIcon}
            disabled={!paginationPrevious}
          />
        </Stack.Item>
        <Stack.Item>
          <Link
            onClick={paginationNext}
            icon={ChevronRightIcon}
            disabled={!paginationNext}
          />
        </Stack.Item>
      </Stack>
    </div>
  );
}

export default Pagination;
