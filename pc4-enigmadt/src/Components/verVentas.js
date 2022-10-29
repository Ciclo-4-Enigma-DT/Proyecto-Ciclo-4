import { Component } from "react"
import "../Styles/ventas.css"

var heading = ['idVenta', 'Usuario', 'Valor', 'Fecha']
var body = [
    ['123', 'andres242002', '100.000', '24-07-2002'],
    ['321', 'valeBD', '500.000', '22-04-2003'],
    ['231', 'ryracala', '770.000', '16-10-2004'],
]

export function Ventas() {
    return (
        <>
            <div id="divVentas">
                <br></br>
                <h3>Lista de Ventas</h3>
                <div id="tablaVentas">
                    <Table heading={heading} body={body} />
                </div>
            </div>
        </>
    )
}

class Table extends Component {
    render() {
        var heading = this.props.heading
        var body = this.props.body

        return (
            <div id="datagrid">
                <table>
                    <thead>
                        <tr>
                            {heading.map(head => <th>{head}</th>)}
                        </tr>
                    </thead>
                    <tbody>
                        {body.map(row => <TableRow row={row} />)}
                    </tbody>
                </table>
            </div>
        )
    }
}

class TableRow extends Component {
    render() {
        var row = this.props.row
        return (
            <tr>
                {row.map(val => <td>{val}</td>)}
            </tr>
        )
    }
}