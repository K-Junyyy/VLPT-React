import React, { useState, useRef } from "react";

function UseRef() {
  const [text, setText] = useState("");

  const textInput = useRef();

  const displayText = (e) => {
    setText(e.target.value);
  };

  const onReset = () => {
    setText("");
    textInput.current.focus();
  };

  return (
    <div>
      <input onChange={displayText} value={text} ref={textInput} />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값 : {text}</b>
      </div>
    </div>
  );
}

export default UseRef;
