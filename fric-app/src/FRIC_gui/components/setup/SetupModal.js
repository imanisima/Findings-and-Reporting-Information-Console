/**
 * This component is used to display a form modal. It will be used to configure an event.
 * 
 * Created by Marco Soto
 */

import React, { useState } from 'react'
import SetupContentView from './SetupForm'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

export default function SetupModal() {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<Button variant="primary" onClick={handleShow}>Launch Setup Modal View</Button>
			<Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
				<SetupContentView onCancel={handleClose} />
			</Modal>
		</>
	);
}