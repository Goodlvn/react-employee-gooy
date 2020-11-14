import React, { useEffect } from 'react';
import API from "../utils/API";
import { useEmpContext } from "../utils/GlobalState";


export default function DisplayContainer() {

    const [state, dispatch] = useEmpContext();

    console.log(state);

    useEffect(() => {
        loadEmployees();
    })

    function loadEmployees() {
        // API.grabEmployees()
        // .then((data ) => {
        //   const empList = data;
      
        //   empList.forEach(person => {
        //         dispatch({
        //             type: "load",
        //             name: person.firstName
        //         });
        //   });
        // })
        // .catch(console.error)

       const data = API.grabEmployees();

       data.forEach(person => {
           console.log(person);
       })


    }


    return (
        <div>
            HERE YOU WILL SEE EMPLOYEES!!
        </div>
    )
}
