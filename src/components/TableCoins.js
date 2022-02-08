import React from "react";
import RowOfCoins from "./RowOfCoins";

const TableCoins = ({ coins, search }) => {
  const filterCoins = coins.filter( coin =>
      coin.name.toLowerCase().includes(search.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <table className="table table-striped table-dark mt-4 table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Coin</th>
          <th scope="col">Price</th>
          <th scope="col">Price Change</th>
          <th scope="col">Price high 24h</th>
          <th scope="col">Price low 24h</th>
        </tr>
      </thead>
      <tbody>
        {filterCoins.map((coin) => (
          <RowOfCoins coin={coin} key={coin.id} />
        ))}
      </tbody>
    </table>
  );
};

export default TableCoins;
