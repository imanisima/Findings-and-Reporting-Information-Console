/*
 *
 */

import React, {Component, useState} from 'react';
import SetupContentView from '../components/SetupContentView'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

function ModalDemo() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>Launch demo modal</Button>
            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                <SetupContentView />
            </Modal>
        </>
    );
}

export default class Setup extends Component {
	render() {
		return (
			<ModalDemo />
		);
	}
}
