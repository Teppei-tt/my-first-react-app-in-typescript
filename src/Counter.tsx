import React, { useEffect, useRef, useState } from "react";

const Counter: React.FC<{}> = () => {
  const initailValue: any = 0;
  const [value, setValue] = useState<number>(initailValue);

  const increment = () => {
    setValue((prevState) => prevState + 1);
  };

  const decriment = () => {
    setValue((prevState) => prevState + 1);
  };

  const renderTimes = useRef<number>(0);
  useEffect(() => {
    renderTimes.current = renderTimes.current + 1;
  }, []);

  const ref = useRef(null);

  return (
    <div>
      <div>value: {value}</div>
      <button onClick={increment}>+1</button>
      <button onClick={decriment}>-1</button>
      <div>This Component was re-rendered {renderTimes.current} times!</div>
    </div>
  );
};

export default Counter;
