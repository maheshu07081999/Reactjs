import React, { createContext, useContext } from "react";


const MyContext = createContext();

const ContextApi = () => {
  const [value, setValue] = React.useState(0);

  // provider
  return (
    <><MyContext.Provider value={{ value, setValue }} />
    <h1>Context API.</h1>
    <ChildComponent1 />
    <MyContext.Provider /></>
  );
};

function ChildComponent1() {
  const { value, setValue } = useContext(MyContext);
  // consumner 1
  return (
    <div>
      <h2>Use Context for Component 1</h2>
      <p>Value is: {value}</p>
      <button
        onClick={() => {
          setValue(value + 1);
        }}
      >
        Increase
      </button>
      <ChildComponent2 />
    </div>
  );
}

function ChildComponent2() {
  const { value, setValue } = useContext(MyContext);
  // consumner 2
  return (
    <div>
      <h2>Use Context for Component 2</h2>
      <p>Value is: {value}</p>
      <button
        onClick={() => {
          setValue(value - 1);
        }}
      >
        Decrease
      </button>
      <ChildComponent3 />
    </div>
  );
}

function ChildComponent3() {
  const { value, setValue } = useContext(MyContext);
  // consumner 3
  return (
    <div>
      <h2>Use Context for Component 3</h2>
      <p>Value is: {value}</p>
      <button
        onClick={() => {
          setValue(0);
        }}
      >
        Reset Value
      </button>
    </div>
  );
}

export default ContextApi;