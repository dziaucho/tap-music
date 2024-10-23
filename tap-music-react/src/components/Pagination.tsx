import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../state/store";
import { fetchSounds, setPage } from "../slices/soundSlice";

interface PaginationProps {
  itemsPerPage: number;
  totalItems: number;
  inputValue: string;
}

function Pagination({ totalItems, itemsPerPage, inputValue }: PaginationProps) {
  const dispatch: AppDispatch = useDispatch();
  const { currentPage } = useSelector((state: RootState) => state.sounds);
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const maxButtons = 5;

  const handlePageChange = (page: number) => {
    dispatch(setPage(page));
    dispatch(fetchSounds(inputValue));
  };

  let startPage = Math.max(2, currentPage - Math.floor(maxButtons / 2));
  let endPage = Math.min(
    totalPages - 1,
    currentPage + Math.floor(maxButtons / 2)
  );
  if (startPage > endPage - maxButtons + 1) {
    startPage = Math.max(2, endPage - maxButtons + 1);
  }
  const pages = Array.from(
    { length: endPage - startPage + 1 },
    (_, index) => startPage + index
  );

  return (
    <div className="pagination__div flex-row-center">
      <Button
        className={currentPage === 1 ? "active pagination" : "pagination"}
        onClick={() => handlePageChange(1)}
        disabled={currentPage === 1}
      >
        1
      </Button>
      {startPage > 2 && <span className="skip-pagination__span">...</span>}
      {pages.map((page, index) => (
        <Button
          className={currentPage === page ? "active pagination" : "pagination"}
          key={index}
          onClick={() => handlePageChange(page)}
          disabled={currentPage === page}
        >
          {page}
        </Button>
      ))}
      {endPage < totalPages - 1 && (
        <span className="skip-pagination__span">...</span>
      )}
      <Button
        className={
          currentPage === totalPages ? "active pagination" : "pagination"
        }
        onClick={() => handlePageChange(totalPages)}
        disabled={currentPage === totalPages}
      >
        {totalPages}
      </Button>
    </div>
  );
}

export default Pagination;
