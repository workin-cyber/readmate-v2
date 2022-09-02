
import { DataProvider } from "./context/manageContext";
import Layout from "./Layout";

function App() {
  return (
    <>
      <DataProvider>
        <Layout />
      </DataProvider>
    </>
  );
}

export default App;