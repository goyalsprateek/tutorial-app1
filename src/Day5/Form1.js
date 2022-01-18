import React, { useState } from "react";

const inititalVal = {
  name: "",
  email: "",
  address: "",
};

function Form1() {
  const [user, setUser] = useState(inititalVal);

const submitHandler = (e) => {
      console.log(JSON.stringify(user));
      e.preventDefault()
}
  return (
    <div>
      <form onSubmit={(e)=>submitHandler(e)} >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <br/>
        <label htmlFor="email">Email Id</label>
        <input
          type="text"
          id="email"
          name="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <br/>
        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          value={user.address}
          onChange={(e) => setUser({ ...user, address: e.target.value })}
        />
        <br/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form1;
