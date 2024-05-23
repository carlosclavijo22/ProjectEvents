import { Col, Container, Row, Card, CardHeader, CardBody, Button } from "reactstrap"
import EventTable from "./components/EventTable";
import { useEffect, useState } from "react"
import EventModal from "./components/EventModal";

const App = () => {

    const [eventos, setEventos] = useState([])
    const [mostrarModal, setMostrarModal] = useState(false)
    const [editar, setEditar] = useState(null)

    const mostrarEventos = async () => {
        const response = await fetch("api/evento/Lista");

        if (response.ok) {
            const data = await response.json();
            setEventos(data);
        } else {
            console.log("Error en la lista");
        }

    }

    useEffect(() => {
        mostrarEventos()
    }, [])

    const guardarEvento = async (evento) => {
        const response = await fetch("api/evento/Guardar", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(evento)
        })

        if (response.ok) {
            setMostrarModal(!mostrarModal);
            mostrarEventos();
        }
    }

    const editarEvento = async (evento) => {
        const response = await fetch("api/evento/Editar", {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(evento)
        })

        if (response.ok) {
            setMostrarModal(!mostrarModal);
            mostrarEventos();
        }
    }

    const eliminarEvento = async (id) => {
        var confirm_delete = window.confirm("¿Desea eliminar el contacto?")

        if (!confirm_delete) {
            return
        } 

        const response = await fetch("api/evento/Eliminar/" + id, {
            method: 'DELETE',
        })

        if (response.ok) {
            mostrarEventos();
        }
    }

    return (
        <Container>
            <Row className="mt-5">
                <Col sm="12">
                    <Card>
                        <CardHeader>
                            <h5>LISTA DE EVENTOS
                            </h5>
                        </CardHeader>
                        <CardBody>
                            <Button size="sm" color="success"
                                onClick={() => setMostrarModal(!mostrarModal)}>Nuevo Evento
                            </Button>
                            <hr></hr>
                            <EventTable data={eventos}
                                setEdit={setEditar}
                                showModal={mostrarModal}
                                setShowModal={setMostrarModal}
                                deleteEvent={eliminarEvento}
                            />
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <EventModal
                showModal={mostrarModal}
                setShowModal={setMostrarModal}
                saveEvent={guardarEvento}
                edit={editar}
                setEdit={setEditar}
                editEvent={editarEvento}
            />
        </Container>

    )
}

export default App;