import { useState } from "react";
import Button from "./Button";

interface PaginationProps {
  itemsPerPage: number;
  totalItems: number;
}

function Pagination({ totalItems, itemsPerPage }: PaginationProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const maxButtons = 5;

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
        onClick={() => setCurrentPage(1)}
        disabled={currentPage === 1}
      >
        1
      </Button>
      {startPage > 2 && <span className="skip-pagination__span">...</span>}
      {pages.map((page, index) => (
        <Button
          className={currentPage === page ? "active pagination" : "pagination"}
          key={index}
          onClick={() => setCurrentPage(page)}
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
        onClick={() => setCurrentPage(totalPages)}
        disabled={currentPage === totalPages}
      >
        {totalPages}
      </Button>
    </div>
  );
}

export default Pagination;
