import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [number, setNumber] = useState<string>('');
  const [reversibleNumbers, setReversibleNumbers] = useState<Array<number>>([])

  const fetchReversibleNumbers = async (num: number): Promise<void> => {
    const response: Response = await fetch(`http://localhost:5000/api?number=${number}`);
    const numbers = await response.json()
    setReversibleNumbers(numbers)
  }
  const handleChange = (event: any): void => {
    event.preventDefault();
    setNumber(event.target.value);
  }
  useEffect(() => {
    if (number && parseInt(number)) {
      fetchReversibleNumbers(parseInt(number))
    }
  }, [])
  useEffect(() => {
    if (number && parseInt(number)) {
      fetchReversibleNumbers(parseInt(number))
    }
  }, [number])

  return (
    <div className="App">
      <form >
        <label>
          Number:
          <input type="text" value={number} onChange={handleChange} />
        </label>
      </form>
      {
        reversibleNumbers.map((num, index) => (
          <div key={index}>{num} </div>
        ))
      }
    </div>
  );
}

export default App;
