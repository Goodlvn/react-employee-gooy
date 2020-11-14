import React from 'react'
import EmpRow from "../EmpRow";
import { useEmployeeContext } from "../../utils/GlobalState";

export default function DisplayEmployees() {

    const { state, setState } = useEmployeeContext();

    const empRow = state.map( emp => <EmpRow key={emp.id} url={emp.picture}/>)



    return (
        <div>
           {empRow}
        </div>
    )
}
