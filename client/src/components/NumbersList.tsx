import { FC, ReactElement } from "react";
import styled from "styled-components";
import { ResponseType } from "../types";
import NumberList from "./NumberList";

const ContentContainer = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const Resultontainer = styled.div`
  margin-bottom: 0.5rem;
  width: 100%;
  display: flex;
  align-items: flex-start;
`;
const Lable = styled.span`
  margin-left: 1rem;
`;

const BoldLable = styled.strong`
  min-width: 10rem;
`;

const NumbersList: FC<ResponseType> = ({ count, numbers }): ReactElement => {
  return (
    <ContentContainer>
      <Resultontainer>
        <BoldLable>Reversibles count :</BoldLable>
        <Lable>{count}</Lable>
      </Resultontainer>

      <Resultontainer>
        <BoldLable>Reversible numbers:</BoldLable>
        <Lable>
          {numbers.map((num, index) => {
            let stringNumber =
              index === numbers.length - 1 ? `${num}` : `${num}, `;
            return <NumberList key={index} number={stringNumber} />;
          })}
        </Lable>
      </Resultontainer>
    </ContentContainer>
  );
};

export default NumbersList;
