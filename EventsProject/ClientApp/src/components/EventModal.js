import { Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, ModalFooter, Button } from "reactstrap"
import { useEffect, useState } from "react";
const eventModel = {
    idEvento: 0,
    fecha: "",
    lugar: "",
    descripcion: "",
    precio: "",
    estado: "activo"
}
const EventModal = ({ showModal, setShowModal, saveEvent, edit, setEdit, editEvent}) => {

    const [evento, setEvento] = useState(eventModel);

    const actualizarDato = (e) => {
        console.log(e.target.name + " : " + e.target.value);
        setEvento(
            {
                ...evento,
                [e.target.name]: e.target.value
            }
        )
    }

    const enviarDatos = () => {
        if (evento.idEvento == 0) {
            saveEvent(evento)        
        } else {
            editEvent(evento)
        }
        setEvento(eventModel)
    }

    useEffect(() => {
        if (edit != null) {
            setEvento(edit)
        } else {
            setEvento(eventModel)
        }
    },[edit])

    const closeModal = () => {
        setShowModal(!showModal)
        setEdit(null)
    }

    return (
        <Modal isOpen={showModal}>
            <ModalHeader>
                {evento.idEvento == 0 ? "Nuevo Evento" : "Editar Evento"}
            </ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        <Label>Fecha</Label>
                        <Input name="fecha" onChange={(e) => actualizarDato(e)} value={evento.fecha} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Lugar</Label>
                        <Input name="lugar" onChange={(e) => actualizarDato(e)} value={evento.lugar} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Descripcion</Label>
                        <Input name="descripcion" onChange={(e) => actualizarDato(e)} value={evento.descripcion} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Precio</Label>
                        <Input name="precio" onChange={(e) => actualizarDato(e)} value={evento.precio} />
                    </FormGroup>
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" size="sm" onClick={enviarDatos}>Guardar
                </Button>
                <Button color="danger" size="sm" onClick={closeModal}>Cerrar
                </Button>
            </ModalFooter>
        </Modal>
    )
}

export default EventModal;