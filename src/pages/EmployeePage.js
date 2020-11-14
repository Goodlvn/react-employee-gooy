import React from 'react';
import DisplayEmployees from "../components/DisplayEmployees";
import { useEmployeeContext } from "../utils/GlobalState";


export default function EmployeePage() {


    const { state, setState } = useEmployeeContext();

    if(state.length > 0) {
        console.log(state);
    }

    return (
        <div>
            <DisplayEmployees />
        </div>
    )
}
