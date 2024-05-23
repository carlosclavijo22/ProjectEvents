import { Button, Table } from "reactstrap"

const EventTable = ({ data, setEdit, showModal, setShowModal, deleteEvent }) => {

    const enviarDatos = (evento) => {
        setEdit(evento)
        setShowModal(!showModal)
    }

    return (
        <Table striped responsive>
            <thead>
                <tr>
                    <th>Fecha
                    </th>
                    <th>Lugar
                    </th>
                    <th>Descripcion
                    </th>
                    <th>Precio
                    </th>
                    <th>
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    (data.lenght < 1) ? (
                        <tr>
                            <td colSpan="5">Sin registros
                            </td>
                        </tr>
                    ) : (
                        data.map((item) => (
                            <tr key={item.idEvento}>
                                <td>{item.fecha}
                                </td>
                                <td>{item.lugar}
                                </td>
                                <td>{item.descripcion}
                                </td>
                                <td>{item.precio}
                                </td>
                                <td>
                                    <Button color="primary" size="sm" className="me-2"
                                        onClick={() => enviarDatos(item)}>Editar</Button>
                                    <Button color="danger" size="sm"
                                        onClick={() => deleteEvent(item.idEvento)}>Eliminar</Button>
                                </td>
                            </tr>))
                    )
                }
            </tbody>
        </Table>

    )
}

export default EventTable;