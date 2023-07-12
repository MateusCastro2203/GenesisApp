import { styled } from "styled-components/native";

interface Props {
  isNegative: boolean;
}

export const Card = styled.View`
  width: 100%;
  height: 50px;
  flex-direction: row;
  border-bottom-width: 1px;
  border-color: grey;
  margin-bottom: 5px;
  align-items: center;
`;

export const text = styled.Text``;
export const textPercente = styled.Text<Props>`
  color: ${(props) => (props.isNegative ? "#f00" : "#008000")};
`;

export const img = styled.Image`
  margin-right: 10;
  width: 20px;
  height: 20px;
`;

export const CardContainer = styled.View`
  width: 80%;
  flex-direction: row;
  justify-content: space-between;
`;

export const Container = styled.View`
  padding: 10px;
`;
