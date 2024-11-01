
import "./App.css";
import Dashboard from "./components/pageComponents/Dashboard";
import { DataProvider } from "./context/DataContext";

function App() {
  return (
    <>
      <DataProvider>
      <Dashboard />
      </DataProvider>
    </>
  );
}

export default App;
