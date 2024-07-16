import { useEffect, useRef, useState } from "react";

function Counter(props: any) {
  const [count, setCount] = useState(0);
  const [isClicked, setIsClicked] = useState(false);
  const [color, changeColor] = useState("#000000");

  function handleIncrease() {
    setIsClicked(!isClicked);
    setCount((count) => count + 1);
    changeColor("#008000");

    //console.log("ive been clicked");
  }

  function handleDecrease() {
    setIsClicked(!isClicked);
    setCount((count) => count - 1);
    changeColor("#ff0000");

    //console.log("ive been clicked");
  }
  // The useRef Hook allows you to persist data between renders
  const prevCountRef = useRef<number>(0);
  useEffect(() => {
    /**
     * assign the latest render value of count to the ref
     * However, assigning a value to ref doesn't re-render the app
     * So, prevCountRef.current in the return statement displays the
     * last value in the ref at the time of render i.e., the previous state value.
     */

    if (count > prevCountRef.current) {
      console.log("UP");
    } else {
      console.log("Down");
    }

    prevCountRef.current = count;
  }, [count]); //run this code when the value of count changes

  return (
    <div>
      <h1 style={{ color }}>
        Now: {count}, before: {prevCountRef.current}
        {/* Increase count on click  */}
      </h1>
      <br />
      <span>
        {/* color={isClicked ? "green" : " "} */}
        <button
          // onClick={() => setCount((count) => count + 1)}
          onClick={handleIncrease}
          //style={{ color: "green" }}
        >
          Increase count
        </button>
        <button
          onClick={handleDecrease}
          // onClick={() => setCount((count) => count - 1)}
        >
          Decrease count
        </button>
      </span>
    </div>
  );
}

export default function Score() {
  const [score, setScore] = useState();
  const [pay, setPay] = useState(0);
  // const [isClicked, setIsClicked]= useState(false);

  function handleClick(e: any) {
    e.preventDefault();
    setScore(Number(e.target.value));

    console.log("ive been clicked");
  }

  return (
    <div>
      <Counter />
      <h2 className="text-5xl  font-extrabold text-primary-600">💲 {score}</h2>
      <label
        htmlFor="score"
        className="text-m mb-2 block font-medium text-gray-900 dark:text-white"
      >
        score
      </label>
      <input
        type="text"
        name="score"
        value={score}
        onChange={(e) => setScore(Number(e.target.value))}
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
      />
      <button onClick={handleClick}> Click </button>
      <label
        htmlFor="pay"
        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
      >
        pay out
      </label>
      <input
        type="text"
        name="pay"
        id="pay"
        //onChange={setScore}
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
      />
    </div>
  );
}
