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
import ErrorBoundary from "./components/ErrorBoundary";
import HookState from "./components/HookState";

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
        <ErrorComponent />
      </ErrorBoundary> */}

      <HookState />


    </div>
  );
}

export default App;
