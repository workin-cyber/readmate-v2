// import TestStartFooter from "./TestStartFooter";
// import TestExercise from "./TestExercise";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { DataProvider } from "./context/manageContext";
import Test from "./Test";

function App() {
  return (
    <>
      <DataProvider>
        <BrowserRouter>
          <Test />
        </BrowserRouter>
      </DataProvider>
    </>
  );
}

export default App;
