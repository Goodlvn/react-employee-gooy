import React, { useEffect } from "react";
import DisplayContainer from "./components/DisplayContainer"
import API from "./utils/API";
import './styles/App.css';

function App() {

  useEffect(() => {
    // setLoading(true);
    API.grabEmployees()
        .then(({ data }) => {
          const empList = data.data;

          console.log(empList);
        })
        .catch(console.error)
}, []);

  return (
    <div className="App">
      <DisplayContainer />
    </div>
  );
}



export default App;
