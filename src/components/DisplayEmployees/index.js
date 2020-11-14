import React from 'react'
import API from "../../utils/API"

export default function index() {

    async function grabEmp() {

       const {data: { results: data }} = await API.getEmployeeData();

       console.log(data);
    }

    grabEmp();


    return (
        <div>
            TEST: SEE EMPLOYEES HERE
        </div>
    )
}
