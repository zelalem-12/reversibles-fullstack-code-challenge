import { FC, ReactElement } from "react";
import styled from "styled-components";
import { ContentType } from "../types";

const Number = styled.span`
  width: 100%;
`;

const NumbersList: FC<ContentType> = ({ number }): ReactElement => (
  <Number>{`${number}`}</Number>
);
export default NumbersList;
