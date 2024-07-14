import { useState } from "react";

export default function Score() {
  const [score, setScore] = useState(0);
  const [pay, setPay] = useState(0);

  function handleChange(event) {
    setScore(event.target.value);
  }

  function handleClick() {
    console.log("ive been clicked");
  }
  function scoreChange() {
    setPay;
  }

  return (
    <div>
      <input
        type="score"
        name="score"
        id="score"
        onChange={handleChange}
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
      />
      <button onClick={handleClick}> Click </button>

      <h2 className="text-5xl  font-extrabold text-primary-600">💲 {score}</h2>
    </div>
  );
}
