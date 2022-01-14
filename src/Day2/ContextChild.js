import React from "react";
import { UserContext,UserContext2 } from "./Context1";

function ContextChild() {
  return (
    <div>
        <UserContext.Consumer>
            {
                user => {
                    return (
                      <UserContext2.Consumer>
                        {
                          user2 => {
                            return <div>Value of conext1 is {user} and context2 is {user2}</div>
                          }
                        }
                      </UserContext2.Consumer>
                    )
                }
            }
        </UserContext.Consumer>
    </div>
  );
}

export default ContextChild;
