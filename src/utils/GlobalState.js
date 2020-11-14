import React, { createContext, useState, useContext, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import API from "./API"

const EmployeeContext = createContext();
const { Provider } = EmployeeContext;

export function EmployeeProvider({ children }) {

  const [state, setState] = useState([]);

  let empData = async () => {
    let { data: { results: data } } = await API.getEmployeeData();
    console.log(data);

    setState(data.map(person => {
      let dataObj = {
        id: uuidv4(),
        firstname: person.name.first,
        lastname: person.name.last,
        email: person.email,
        cell: person.cell,
        picture: person.picture.medium
      }
      return dataObj
    }));
  }

  useEffect(() => {
    empData();
  }, [])

  return (
    <Provider value={{ state, setState }}>
      {children}
    </Provider>
  )
};

//flag
export function useEmployeeContext() {
  return useContext(EmployeeContext);
};

