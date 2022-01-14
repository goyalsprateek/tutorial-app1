import logo from "./logo.svg";
import "./App.css";
import Welcome from "./components/Welcome.js";
import TestClassComponent from "./components/TestClassComponent";
import EventHandler from "./components/EventHandler";
import FunctionEvent from "./components/FunctionEvent";
import ParentComponent from "./components/ParentComponent";
import ConditionalRender from "./components/ConditionalRender";
import ListRendering from "./components/ListRendering";
import FormHandling from "./components/FormHandling";
import LifecyclyParent from "./components/LifecyclyParent";
import ErrorComponent from "./components/ErrorComponent";
import HookState from "./components/HookState";
import Test1 from "./Day2/Test1";
import ErrorBoundary from "./components/ErrorBoundary";
import RefExample from "./Day2/RefExample";
import PortalsExample from "./Day2/PortalsExample";
import Hook1 from "./Day2/Hook1";
import ClassExample from "./Day2/ClassExample";
import Hook2 from "./Day2/Hook2";
import HttpClass from "./Day2/HttpClass";
import Counter from "./Day2/Counter";


function App() {
  return (
    <div className="App">
      {/* <Welcome name="Prateek" lastName="Goel">
        This is child component
      </Welcome>
      <TestClassComponent name="Prateek" lastName="Goel">
        <button>Child Button</button>
        </TestClassComponent> */}

      {/* <EventHandler />
        <FunctionEvent /> */}

      {/* <ParentComponent />

        <ConditionalRender /> */}

      {/* <ListRendering /> */}

      {/* <FormHandling /> */}

      {/* <LifecyclyParent /> */}
       
       {/* <ErrorBoundary>
        <ErrorComponent name='Prateek' />
       </ErrorBoundary>

       <ErrorBoundary>
        <ErrorComponent name='test' />
       </ErrorBoundary> */}

       <HttpClass />

    </div>
  );
}

export default App;
