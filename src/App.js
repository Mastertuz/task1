import { useEffect, useState } from "react";
function App() {
  const [inputValue, setInputValue] = useState("");
  const [timerActive, setTimerActive] = useState(false);
  let hours = Math.floor(inputValue / 60 / 60);
  let seconds = Math.floor(inputValue % 60);
  let minutes = Math.floor(inputValue / 60 - hours * 60);
  useEffect(() => {
    if (timerActive && inputValue > 0) {
      setTimeout(() => {
        setInputValue((prev) => prev - 1);
      }, 1000);
    } else {
      setTimerActive(false);
    }
  }, [inputValue, timerActive]);
  return (
    <div>
      <input
        placeholder="Seconds"
        type="text"
        value={inputValue}
        onChange={(e) =>
          !isNaN(+e.target.value) && setInputValue(+e.target.value)
        }
      />
      <button onClick={() => setTimerActive(!timerActive)}>
        {timerActive ? "Stop" : "Start"}
      </button>
      <br />
      <br />
      <span>{`${hours}:${minutes}:${seconds}`}</span>
    </div>
  );
}

export default App;
