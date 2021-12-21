import React from "react";

function Hello(props) {
  return <div>Hello {props.isSpecial && props.name}</div>;
}

export default Hello;
