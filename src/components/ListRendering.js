import React from "react";
import EmployeeJSX from "./EmployeeJSX";

function ListRendering(props) {

  const [loading, setLoading] = useState(false);


useEffect(() => {
    doSomething(); // This is be executed when `loading` state changes
}, [loading])
  
  
  return (
    <div>
      ???
    </div>
  );
}

export default ListRendering;
