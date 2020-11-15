import React from 'react'
import EmpRow from "../EmpRow";
import { useEmployeeContext } from "../../utils/GlobalState";
import "./style.css"

export default function DisplayEmployees() {

    const { state, setState } = useEmployeeContext();

    const empRow = state.map( emp => <EmpRow key={emp.id} url={emp.picture} fullName={emp.firstname + " " + emp.lastname} cell={emp.cell} email={emp.email}/>)



    return (
        <table>
            <thead>
                <tr className="title">
                    <td>Image</td>
                    <td>Name</td>
                    <td>Phone</td>
                    <td>Email</td>
                </tr>
            </thead>
            <tbody>
                {empRow}
            </tbody>
        </table>
    )
}
