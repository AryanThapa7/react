import { useSelector } from "react-redux";

function ProductTable() {
  const products = useSelector(
    (state) => state.dashboard.products
  );

  const selectedCategory = useSelector(
    (state) => state.dashboard.selectedCategory
  );

  const sortBy = useSelector(
    (state) => state.dashboard.sortBy
  );

  let filteredProducts =
    selectedCategory === "All"
      ? [...products]
      : products.filter(
          (product) =>
            product.category === selectedCategory
        );

  filteredProducts.sort(
    (a, b) => b[sortBy] - a[sortBy]
  );

  return (
    <div className="table-card">

      <div className="section-header">
        <div>
          <h2>Product Performance</h2>
          <p>Detailed product analysis</p>
        </div>
      </div>

      <div className="table-wrapper">
        <table>

          <thead>
            <tr>
              <th>Product</th>
              <th>Category</th>
              <th>Sales</th>
              <th>Orders</th>
              <th>Customers</th>
            </tr>
          </thead>

          <tbody>
            {filteredProducts.map((product) => (
              <tr key={product.id}>
                <td className="product-name">
                  {product.name}
                </td>

                <td>
                  <span className="category">
                    {product.category}
                  </span>
                </td>

                <td>
                  Rs. {product.sales.toLocaleString()}
                </td>

                <td>
                  {product.orders}
                </td>

                <td>
                  {product.customers}
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>

    </div>
  );
}

export default ProductTable;