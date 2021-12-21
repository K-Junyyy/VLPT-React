import React, { useState } from "react";

function InputSample() {
  const [inputs, setInputs] = useState({
    id: "",
    nickname: "",
  });

  const { id, nickname } = inputs; // 비구조화 할당을 통해 값 추출

  const displayText = (e) => {
    const { value, name } = e.target; // e.target에서 value와 name 추출
    setInputs({
      ...inputs, // 기존의 input 객체를 복사(불변성을 위해)
      [name]: value, // name 키를 가진 값을 value 로 변경
    });
  };

  const onReset = (e) => {
    setInputs({
      id: "",
      nickname: "",
    });
  };

  return (
    <div>
      <input name="id" onChange={displayText} value={id} placeholder="아이디" />
      <input
        name="nickname"
        onChange={displayText}
        value={nickname}
        placeholder="닉네임"
      />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>
          값 : {id}({nickname})
        </b>
      </div>
    </div>
  );
}

export default InputSample;
