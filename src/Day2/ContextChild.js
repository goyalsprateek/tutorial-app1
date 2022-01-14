import React from "react";
import { UserContext } from "./Context1";

function ContextChild() {
  return (
    <div>
        <UserContext.Consumer>
            {
                user => {
                    return <div>Value of conext is {user}</div>
                }
            }
        </UserContext.Consumer>
    </div>
  );
}

export default ContextChild;
