import { FC, ReactElement } from "react";
import styled from "styled-components";
import { FormType } from "../types";

const InputContainer = styled.div`
  margin: 1.5rem auto;
  width: 25%;
  $:after {
    content: "";
    clear: both;
    display: table;
  }
`;
const Input = styled.input`
  padding: 10px;
  font-size: 17px;
  border: 1px solid grey;
  float: left;
  width: 75%;
  background: #f1f1f1;
`;
const Button = styled.button`
  float: left;
  width: 25%;
  padding: 10px;
  background: #2196f3;
  color: white;
  font-size: 17px;
  border: 1px solid grey;
  border-left: none;
  cursor: pointer;
  $.hover {
    background: #0b7dda;
  }
`;
const FormContainer: FC<FormType> = ({
  value,
  handleChange,
  onKeyDown,
  onClick,
}): ReactElement => (
  <InputContainer className="input_form">
    <Input
      type="text"
      value={value}
      onChange={handleChange}
      placeholder="Type any positive integer"
      onKeyDown={onKeyDown}
    />
    <Button onClick={onClick}>Calculate</Button>
  </InputContainer>
);

export default FormContainer;
