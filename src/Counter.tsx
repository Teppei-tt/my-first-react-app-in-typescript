import React, { useState } from "react";

const Counter: React.FC<{}> = () => {
  const initailValue: any = 0;
  const [value, setValue] = useState<number>(initailValue);

  const increment = () => {
    setValue((prevState) => prevState + 1);
  };

  const decriment = () => {
    setValue((prevState) => prevState + 1);
  };
  return (
    <div>
      <div>value: {value}</div>
      <button onClick={increment}>+1</button>
      <button onClick={decriment}>-1</button>
    </div>
  );
};

export default Counter;
