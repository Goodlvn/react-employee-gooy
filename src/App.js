import React from "react";
import './styles/App.css';
import EmployeePage from "./pages/EmployeePage";
import { EmployeeProvider } from "./utils/GlobalState";


function App() {

    return (
      <div className="App">
        <EmployeeProvider>
          <EmployeePage />
        </EmployeeProvider>
      </div>
    );
  }

export default App;
