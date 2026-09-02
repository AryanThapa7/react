import Navbar from "./components/Navbar";
import Filters from "./components/Filters";
import Stats from "./components/Stats";
import SalesChart from "./components/SalesChart";
import ProductTable from "./components/ProductTable";

import "./App.css";

function App() {
  return (
    <div className="app">

      <Navbar />

      <main className="dashboard">

        <div className="dashboard-header">
          <div>
            <h1>Data Analysis</h1>
            <p>
              Monitor sales, orders and customer
              performance.
            </p>
          </div>
        </div>

        <Filters />

        <Stats />

        <SalesChart />

        <ProductTable />

      </main>

    </div>
  );
}

export default App;