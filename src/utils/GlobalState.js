import React, { createContext, useState, useContext, useEffect } from "react";
import API from "./API"

const EmployeeContext = createContext();
const { Provider } = EmployeeContext;

export function EmployeeProvider({ children }) {

  const [state, setState] = useState([]);

  let empData = async () => {
    let {data: { results: data }} = await API.getEmployeeData();
    setState(data.map(person => person.name.first));
  }

  useEffect(() => {
     empData();
  }, [])

  return (
    <Provider value={{state, setState}}>
      {children}
    </Provider>
  )
};

//flag
export function useEmployeeContext() {
  return useContext(EmployeeContext);
};

