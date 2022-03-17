import { useContext } from "react";
import DataContext from "./DataContext";

const Pagination = () => {
  const {page, changePage} = useContext(DataContext)
  return (
    <div className="pagination">
      <button
        className={page === 0 ? "active-page" : null}
        onClick={(e) => changePage(0)}
      >
        1
      </button>
      <button
        className={page === 1 ? "active-page" : null}
        onClick={(e) => changePage(1)}
      >
        2
      </button>
      <button
        className={page === 2 ? "active-page" : null}
        onClick={(e) => changePage(2)}
      >
        3
      </button>
      <button
        className={page === 3 ? "active-page" : null}
        onClick={(e) => changePage(3)}
      >
        4
      </button>
      <button
        className={page === 4 ? "active-page" : null}
        onClick={(e) => changePage(4)}
      >
        5
      </button>
    </div>
  );
}

export default Pagination;