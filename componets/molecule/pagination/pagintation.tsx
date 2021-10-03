import { useState, useEffect, useCallback } from 'react';
import * as Styled from './styled';
type PaginationProps = {
  totalPagination: number;
  updateList: (control: InitialPage) => void;
  maxVisibleButton: number;
};

export type InitialPage = {
  page: number;
  perPage: number;
  totalPage: number;
  maxButton: number;
  maxRight: number;
  maxLeft: number;
};

const Pagination = ({
  totalPagination,
  updateList,
  maxVisibleButton,
}: PaginationProps) => {
  const initialPage = {
    page: 1,
    perPage: 5,
    totalPage: Math.ceil(totalPagination / 5),
    maxButton: maxVisibleButton,
    maxRight: 0,
    maxLeft: 0,
  };

  const [control, setControl] = useState<InitialPage>(initialPage);
  const paginations = Array.from({
    length: control.totalPage,
  });

  useEffect(() => updateList(control), [control.page]);

  const nextPage = () => {
    if (control.page >= control.totalPage) {
      setControl((prev) => ({ ...prev, page: control.totalPage }));
      return;
    }
    setControl((prev) => ({ ...prev, page: prev.page + 1 }));
  };

  const prevPage = () => {
    if (control.page <= 1) return;
    setControl((prev) => ({ ...prev, page: prev.page - 1 }));
  };

  const goToPage = (page: number) => setControl((prev) => ({ ...prev, page }));

  const calculateMaxButtons = useCallback(() => {
    const { page, maxButton, totalPage } = control;
    let maxLeft = page - Math.floor(maxButton / 2);
    let maxRight = page + Math.floor(maxButton / 2);

    if (maxLeft < 1) {
      maxLeft = 1;
      maxRight = maxButton;
    }

    if (maxRight > totalPage) {
      maxLeft = totalPage - (maxButton - 1);
      maxRight = totalPage;
    }

    return {
      maxLeft,
      maxRight,
    };
  }, [control.page]);

  useEffect(() => {
    const { maxLeft, maxRight } = calculateMaxButtons();
    setControl((prev) => ({ ...prev, maxLeft, maxRight }));
  }, [calculateMaxButtons]);

  return (
    <Styled.Pagiantion>
      <Styled.IconPage
        data-content="<<"
        onClick={() => goToPage(1)}
        Disabled={control.page === 1}
      />
      <Styled.IconPage
        data-content="<"
        onClick={prevPage}
        Disabled={control.page === 1}
      />
      <Styled.PagiantionNumbers>
        {paginations
          .map((_, index) => (
            <Styled.SingleNumber
              onClick={() => goToPage(index + 1)}
              key={index}
              Active={index + 1 === control.page}
              id={(index + 1).toString()}
            >
              {index + 1}
            </Styled.SingleNumber>
          ))
          .slice(control.maxLeft - 1, control.maxRight)}
      </Styled.PagiantionNumbers>
      <Styled.IconPage
        data-content=">"
        onClick={nextPage}
        Disabled={control.page >= control.totalPage}
      />
      <Styled.IconPage
        data-content=">>"
        Disabled={control.page >= control.totalPage}
        onClick={() => goToPage(control.totalPage)}
      />
    </Styled.Pagiantion>
  );
};

export default Pagination;
