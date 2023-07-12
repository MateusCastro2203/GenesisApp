import React, { useEffect, useState } from "react";
import { fetchCoinsData } from "../utils/api";
import { CoinsData } from "../interfaces/coinsTypes";

export const useFetchCoins = () => {
  const [coinsData, setCoinsData] = useState<CoinsData[]>([]);

  const getData = async () => {
    const response = await fetchCoinsData();
    const data: CoinsData[] = response;

    const filteredData = data.map((coin) => ({
      name: coin.name,
      image: coin.image,
      symbol: coin.symbol,
      current_price: coin.current_price,
      price_change_percentage_24h: coin.price_change_percentage_24h,
    }));
    setCoinsData(filteredData);
  };

  return {
    getData,
    coinsData,
  };
};
