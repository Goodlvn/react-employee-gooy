import React from 'react'
import './style.css';


export default function EmpRow(props) {

    return (
        <tr>
            <td>
                <img src={props.url} alt={props.fullName} />
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
};
