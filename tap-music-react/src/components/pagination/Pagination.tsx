import Button from "../button/Button";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { fetchSounds } from "../../redux/async";
import { setCurrentPage } from "../../redux/soundsSlice";
import calculatePages from "./calculate-pages";

interface PaginationProps {
  inputValue: string;
}

function Pagination({ inputValue }: PaginationProps) {
  const dispatch: AppDispatch = useDispatch();
  const handlePageChange = (page: number) => {
    dispatch(setCurrentPage(page));
    dispatch(fetchSounds({ query: inputValue, page }));
  };

  const { currentPage, totalPages, startPage, endPage, pages } =
    calculatePages();

  if (totalPages < 2) return <></>;

  return (
    <div className="pagination__div flex-row-center">
      <Button
        className={currentPage === 1 ? "active pagination" : "pagination"}
        onClick={() => handlePageChange(1)}
        isDisabled={currentPage === 1}
      >
        1
      </Button>
      {startPage > 2 && <span className="skip-pagination__span">...</span>}
      {pages.map((page, index) => (
        <Button
          className={currentPage === page ? "active pagination" : "pagination"}
          key={index}
          onClick={() => handlePageChange(page)}
          isDisabled={currentPage === page}
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
        isDisabled={currentPage === totalPages}
      >
        {totalPages}
      </Button>
    </div>
  );
}

export default Pagination;
