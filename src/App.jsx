import { Suspense } from "react";
import About from "./components/About";

function App() {
  return (
    //can add any value like 'Loading...' as the fallback value
    //and it will be shown when this App component waiting to render
    <Suspense fallback={null}>
      <div className="App">
        <About />
      </div>
    </Suspense>
  );
}
export default App;
