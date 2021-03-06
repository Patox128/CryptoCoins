import React from "react";

const RowOfCoins = ({ coin }) => {
  return (
    <tr>
      <th>{coin.market_cap_rank}</th>
      <td>
        <img
          src={coin.image}
          alt={coin.name}
          style={{ width: "25px", height: "25px" }}
          className="me-4"
        />
        <span>
          <strong>{coin.name}</strong>
        </span>
        <span className="ms-4 text-muted text-uppercase">{coin.symbol}</span>
      </td>
      <td>$ {coin.current_price.toLocaleString("en-US")}</td>
      <td
        className={
          coin.price_change_percentage_24h > 0 ? "text-success" : "text-danger"
        }
      >
        {coin.price_change_percentage_24h} %
      </td>
      <td>$ {coin.high_24h.toLocaleString("en-US")}</td>
      <td>$ {coin.low_24h.toLocaleString("en-US")}</td>
    </tr>
  );
};

export default RowOfCoins;


