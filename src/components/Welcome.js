import React from "react";

const Welcome = ({name,lastName}) => {
    
  return (
    <>
      <h1>Hello {name} {lastName}</h1>
      <h2>Second row</h2>
    </>
  );
};

export default Welcome;
