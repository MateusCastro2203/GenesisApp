import React from "react";
import { View } from "react-native";
import * as S from "./styles";

type coinsCardProps = {
  name: string;
  symbol: string;
  image: string;
  current_price: number;
  price_change_percentage_24h: number;
};

export const CoinsCard = ({
  name,
  symbol,
  image,
  current_price,
  price_change_percentage_24h,
}: coinsCardProps) => {
  const USDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const symbolUpper = symbol.toUpperCase();

  const pricePercentageColor = (value: number) => {
    return value < 0 ? false : true;
  };

  return (
    <S.Card>
      <S.img source={{ uri: image }} />
      <S.CardContainer>
        <S.Container>
          <S.text>{symbolUpper}</S.text>
          <S.text>{name}</S.text>
        </S.Container>
        <S.Container>
          <S.text>{USDollar.format(current_price)}</S.text>
          <S.textPercente
            isNegative={pricePercentageColor(price_change_percentage_24h)}
          >
            {price_change_percentage_24h}
          </S.textPercente>
        </S.Container>
      </S.CardContainer>
    </S.Card>
  );
};
