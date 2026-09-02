import { useSelector } from "react-redux";

function Stats() {
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

  const totalSales = filteredProducts.reduce(
    (total, product) => total + product.sales,
    0
  );

  const totalOrders = filteredProducts.reduce(
    (total, product) => total + product.orders,
    0
  );

  const totalCustomers = filteredProducts.reduce(
    (total, product) => total + product.customers,
    0
  );

  const averageOrder =
    totalOrders === 0
      ? 0
      : Math.round(totalSales / totalOrders);

  return (
    <div className="stats-grid">

      <div className="stat-card">
        <p>Total Sales</p>
        <h2>Rs. {totalSales.toLocaleString()}</h2>
        <span>Revenue generated</span>
      </div>

      <div className="stat-card">
        <p>Total Orders</p>
        <h2>{totalOrders.toLocaleString()}</h2>
        <span>Completed orders</span>
      </div>

      <div className="stat-card">
        <p>Customers</p>
        <h2>{totalCustomers.toLocaleString()}</h2>
        <span>Unique customers</span>
      </div>

      <div className="stat-card">
        <p>Average Order</p>
        <h2>Rs. {averageOrder.toLocaleString()}</h2>
        <span>Average order value</span>
      </div>

    </div>
  );
}

export default Stats;