// import TestStartFooter from "./TestStartFooter";
// import TestExercise from "./TestExercise";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { DataProvider } from "./context/manageContext";
import Layout from "./Layout";
import Test from "./Test";

function App() {
  return (
    <>
      <DataProvider>
          <Layout />
          <Test />
      </DataProvider>
    </>
  );
}

export default App;
