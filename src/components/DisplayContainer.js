import React, { useEffect } from 'react';
import API from "../utils/API";
import { useEmpContext } from "../utils/GlobalState";


export default function DisplayContainer() {

    const [state, dispatch] = useEmpContext();

    console.log(state);

    useEffect(() => {
        loadEmployees();
     }, []);

    function loadEmployees() {
        API.grabEmployees()
        .then(({ data }) => {
          const empList = data.data;
      
          empList.forEach(person => console.log(person));
        })
        .catch(console.error)
      }

    return (
        <div>
            HERE YOU WILL SEE EMPLOYEES!!
        </div>
    )
}
