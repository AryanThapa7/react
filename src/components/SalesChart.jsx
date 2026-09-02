import { useSelector } from "react-redux";

function SalesChart() {
  const products = useSelector(
    (state) => state.dashboard.products
  );

  const selectedCategory = useSelector(
    (state) => state.dashboard.selectedCategory
  );

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter(
          (product) =>
            product.category === selectedCategory
        );

  const maxSales = Math.max(
    ...filteredProducts.map(
      (product) => product.sales
    )
  );

  return (
    <div className="chart-card">
      <div className="section-header">
        <div>
          <h2>Sales Performance</h2>
          <p>Sales by product</p>
        </div>
      </div>

      <div className="chart">
        {filteredProducts.map((product) => {
          const height =
            (product.sales / maxSales) * 100;

          return (
            <div className="bar-container" key={product.id}>
              <div className="bar-value">
                {(product.sales / 1000).toFixed(0)}k
              </div>

              <div
                className="bar"
                style={{ height: `${height}%` }}
              ></div>

              <div className="bar-label">
                {product.name}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SalesChart;