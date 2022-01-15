import { FC, ReactElement, useState, useEffect, ChangeEvent } from "react";
import styled from "styled-components";
import FormContainer from "./components/FormContainer";
import NumbersList from "./components/NumbersList";
import "./App.css";

const ReversbleCountspan = styled.span`
  color: green;
`;
const NumberSpan = styled.span`
  color: red;
`;

const App: FC = (): ReactElement => {
  const [number, setNumber] = useState<string>("");
  const [reversibleNumbers, setReversibleNumbers] = useState<Array<number>>([]);
  const [loading, setLoading] = useState(false);

  const fetchReversibleNumbers = async (num: number): Promise<void> => {
    setLoading(true);
    const response: Response = await fetch(
      `http://localhost:5000/api?number=${num}`
    );
    const numbers = await response.json();
    setLoading(false);

    setReversibleNumbers(numbers);
  };
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    setNumber(event.target.value);
  };
  useEffect(() => {
    if (number && parseInt(number)) {
      fetchReversibleNumbers(parseInt(number));
    }
  }, []);
  useEffect(() => {
    if (number && parseInt(number)) {
      fetchReversibleNumbers(parseInt(number));
    }
  }, [number]);

  return (
    <div className="App">
      <FormContainer value={number} handleChange={handleChange} />
      {parseInt(number) ? (
        <h3>
          The list of{" "}
          <ReversbleCountspan style={{ color: "green" }}>
            {reversibleNumbers.length}
          </ReversbleCountspan>{" "}
          reversible numbers up to{" "}
          <NumberSpan style={{ color: "red" }}>{number} </NumberSpan>
        </h3>
      ) : null}
      <hr />
      {!loading ? (
        parseInt(number) ? (
          reversibleNumbers.length ? (
            <div className="nembers_container">
              <NumbersList numbers={reversibleNumbers} />
            </div>
          ) : (
            <div className="empity_container">
              {" "}
              <h3> Not found</h3>
            </div>
          )
        ) : (
          <div className="empity_container">
            {" "}
            <h2>
              Please Enter any positive integer to see reversible numbers up to
              it
            </h2>
          </div>
        )
      ) : (
        <div className="empity_container">
          {" "}
          <h3> ...Loading</h3>
        </div>
      )}
    </div>
  );
};

export default App;
