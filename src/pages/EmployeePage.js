import React from 'react';
import DisplayEmployees from "../components/DisplayEmployees";
import { useEmployeeContext } from "../utils/GlobalState";


export default function EmployeePage() {


    const { state, setState } = useEmployeeContext();


        console.log(state);

    return (
        <div>
            <DisplayEmployees />
        </div>
    )
}
