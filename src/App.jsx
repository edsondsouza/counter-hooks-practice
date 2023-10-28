import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
    if (counter === 10) {
      setCounter(0);
    }
  };

  const decrementCounter = () => {
    setCounter(counter - 1);
    if (counter === 0) {
      setCounter(0);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Counter</h1>
      <div className="flex space-x-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={incrementCounter}
        >
          Increment
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded"
          onClick={decrementCounter}
        >
          Decrement
        </button>
      </div>
      <p className="text-2xl mt-4">Count: {counter}</p>
    </div>
  );
}

export default App;
