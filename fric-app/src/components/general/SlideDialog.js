/**
 * 
 */

import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

export default function SlideDialog(props) {
	const handleClose = () => {
		props.closeAction();
	};

	return (
		<Dialog
			open={props.isOpen}
			TransitionComponent={Transition}
			keepMounted
			onClose={handleClose}
			aria-labelledby="slide-dialog-title"
			aria-describedby="slide-dialog-description"
		>
			{ props.component }
		</Dialog>
	);
}

SlideDialog.propTypes = {
	component: PropTypes.element.isRequired,
	isOpen: PropTypes.bool.isRequired,
	closeAction: PropTypes.func.isRequired,
}
