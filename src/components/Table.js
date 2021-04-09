import React from 'react'
import './Table.module.css';

function TableHeader() {
    return (
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Job</th>
                <th></th>
            </tr>
        </thead>
    );
}

function TableBody(props) {
    const rows = props.charData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.id}</td>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td>
                    <button onClick={() => props.remove(index)}>Delete</button>
                </td>
            </tr>
        );
    }
    );
    return (
        <tbody>
            {rows}
        </tbody>
    );
}

function Table(props) {
    return (
        <table>
            <TableHeader />
            <TableBody charData={props.charData} remove={props.remove}/>
        </table>
    );
}

export default Table;