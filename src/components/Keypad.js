import React from "react";

// Code Keypad Component Here

function Keypad (){

  function onChange(event) {
    console.log("Entering password...")
  }

  return (
    <div>
      <input type="password" onChange={onChange}></input>
    </div>
  )
}

export default Keypad;