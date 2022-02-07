import { useEffect, useState } from "react";
import axios from "axios";
import TableCoins from "./components/TableCoins";

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  const getData = async () => {
    const { data } = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1"
    );
    setCoins(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <h1 className="text-center">Crypto Coins</h1>
        <input
          type="text"
          placeholder="Search..."
          className="form-control text-white bg-dark border-0 mt-2"
          onChange={(e) => setSearch(e.target.value)}
        />
        <TableCoins coins={coins} search={search} />
      </div>
    </div>
  );
}

export default App;
