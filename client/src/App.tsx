import { FC, ReactElement, useState, ChangeEvent, KeyboardEvent } from "react";
import styled from "styled-components";
import FormContainer from "./components/FormContainer";
import NumbersList from "./components/NumbersList";
import { ResponseType } from "./types";
import "./App.css";

const Placeholder = styled.h2`
  width: 50%;
  margin: 5rem auto;
`;
const Hr = styled.hr`
  width: 100%;
  heigh: 1rem;
  color: red;
`;
const Span = styled.span`
  font-size: 24;
`;

const App: FC = (): ReactElement => {
  const [number, setNumber] = useState<string>("");
  const [response, setResponse] = useState<ResponseType>();
  const [loading, setLoading] = useState(false);

  const fetchReversibleNumbers = async (num: number): Promise<void> => {
    setLoading(true);
    try {
      const response: Response = await fetch(
        `http://localhost:5000/api?number=${num}`
      );
      const result = await response.json();
      setLoading(false);
      setResponse(result);
    } catch (err) {
      setLoading(false);
      alert("Ops something gone wrong while fetching response");
    }
  };
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    setNumber(event.target.value);
  };
  const calculateReversiblesOnSearch = (): void => {
    if (!number || !parseInt(number)) alert("Please Enter valid number!");
    else fetchReversibleNumbers(parseInt(number));
  };

  const onKeyEnterSendMessage = (
    event: KeyboardEvent<HTMLInputElement>
  ): void => {
    if (event.code === "Enter") calculateReversiblesOnSearch();
  };
  return (
    <div className="App">
      <FormContainer
        value={number}
        handleChange={handleChange}
        onKeyDown={onKeyEnterSendMessage}
        onClick={calculateReversiblesOnSearch}
      />
      <Hr />
      {!loading ? (
        response ? (
          <NumbersList count={response.count} numbers={response.numbers} />
        ) : (
          <Placeholder>
            Type any positive integer and press enter or click calculate button
          </Placeholder>
        )
      ) : (
        <div className="loader">
          <Span>Loading...</Span>
        </div>
      )}
    </div>
  );
};

export default App;
