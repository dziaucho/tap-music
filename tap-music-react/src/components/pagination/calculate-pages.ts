import { useSelector } from "react-redux";
import store, { RootState } from "../../state/store";

function calculatePages() {
  const { currentPage } = useSelector((state: RootState) => state.sounds);
  const totalItems = store.getState().sounds.totalPages;
  const itemsPerPage = 5;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const maxButtons = 3;

  // middle buttons;
  let startPage = Math.max(2, currentPage - Math.floor(maxButtons / 2));
  let endPage = Math.min(
    totalPages - 1,
    currentPage + Math.floor(maxButtons / 2),
  );
  if (startPage > endPage - maxButtons + 1) {
    startPage = Math.max(2, endPage - maxButtons + 1);
  }

  const pages = Array.from(
    { length: endPage - startPage + 1 },
    (_, index) => startPage + index,
  );

  return { currentPage, totalPages, startPage, endPage, pages };
}

export default calculatePages;
