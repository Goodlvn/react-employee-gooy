import React from 'react'

export default function EmpRow(props) {

    // let emailLink = "mailto:" + props.email


    return (
        <tr>
            <td>
                <img src={props.url} />
            </td>
            <td>
                <p>{props.fullName}</p>
            </td>
            <td>
                <p>{props.cell}</p>
            </td>
            <td>
                <a href={"mailto:" + props.email}><p>{props.email}</p></a>
            </td>
        </tr>
    )
}
