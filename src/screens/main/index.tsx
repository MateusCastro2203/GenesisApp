import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, RefreshControl } from "react-native";
import { useFetchCoins } from "../../hooks";
import { CoinsCard } from "../../components/CoinsCard";
import * as S from "./styles";

export const Main = () => {
  const { coinsData, getData } = useFetchCoins();
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    const data = async () => {
      await getData();
    };
    data();
    setRefreshing(false);
  }, [refreshing]);

  return (
    <S.container
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={() => setRefreshing(true)}
        />
      }
    >
      {coinsData.map((value) => {
        return (
          <CoinsCard
            name={value.name}
            symbol={value.symbol}
            image={value.image}
            current_price={value.current_price}
            price_change_percentage_24h={value.price_change_percentage_24h}
          />
        );
      })}
    </S.container>
  );
};
