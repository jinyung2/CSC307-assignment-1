import React from 'react'

function TableHeader() {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
            </tr>
        </thead>
    );
}

function TableBody(props) {
    const rows = props.charData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
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
            <TableBody charData={props.charData} />
        </table>
    );
}

export default Table;