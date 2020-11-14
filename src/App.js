import React from "react";
import DisplayContainer from "./components/DisplayContainer"
import { EmpProvider } from "./utils/GlobalState";
import './styles/App.css';

function App() {





  return (

      <div className="App">
        <EmpProvider>
          <DisplayContainer />
        </EmpProvider>
      </div>


  );
}



export default App;
