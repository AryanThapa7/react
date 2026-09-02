import { useDispatch, useSelector } from "react-redux";

import {
  setCategory,
  setSortBy,
  resetFilters,
} from "../redux/dashboardSlice";

function Filters() {
  const dispatch = useDispatch();

  const selectedCategory = useSelector(
    (state) => state.dashboard.selectedCategory
  );

  const sortBy = useSelector(
    (state) => state.dashboard.sortBy
  );

  return (
    <div className="filters">
      <div className="filter-group">
        <label>Category</label>

        <select
          value={selectedCategory}
          onChange={(event) =>
            dispatch(setCategory(event.target.value))
          }
        >
          <option value="All">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Furniture">Furniture</option>
          <option value="Sports">Sports</option>
          <option value="Accessories">Accessories</option>
        </select>
      </div>

      <div className="filter-group">
        <label>Sort By</label>

        <select
          value={sortBy}
          onChange={(event) =>
            dispatch(setSortBy(event.target.value))
          }
        >
          <option value="sales">Sales</option>
          <option value="orders">Orders</option>
          <option value="customers">Customers</option>
        </select>
      </div>

      <button
        className="reset-button"
        onClick={() => dispatch(resetFilters())}
      >
        Reset Filters
      </button>
    </div>
  );
}

export default Filters;