import React from 'react'

export default function EmpRow(props) {
    return (
        <tr>
            <td>
                <img src={props.url} />
            </td>
            <td>
                <p>{props.fullName}</p>
            </td>
        </tr>
    )
}
