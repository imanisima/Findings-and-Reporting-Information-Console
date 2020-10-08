import React from "react";
import PropTypes from "prop-types";
import { fade, makeStyles, withStyles } from "@material-ui/core/styles";
import TreeView from "@material-ui/lab/TreeView";
import TreeItem from "@material-ui/lab/TreeItem";
import Collapse from "@material-ui/core/Collapse";
import { useSpring, animated } from "react-spring/web.cjs"; // web.cjs is required for IE 11 support
import ChevronDown from '@material-ui/icons/KeyboardArrowDown';
import ChevronRight from '@material-ui/icons/ChevronRight';


function TransitionComponent(props) {
	const style = useSpring({
		from: { opacity: 0, transform: "translate3d(20px,0,0)" },
		to: {
			opacity: props.in ? 1 : 0,
			transform: `translate3d(${props.in ? 0 : 20}px,0,0)`
		}
	});

	return (
		<animated.div style={style}>
			<Collapse {...props} />
		</animated.div>
	);
}

TransitionComponent.propTypes = {
	/**
	 * Show the component; triggers the enter or exit states
	 */
	in: PropTypes.bool
};

const StyledTreeItem = withStyles((theme) => ({
	iconContainer: {
		"& .close": {
			opacity: 0.3
		}
	},
	group: {
		marginLeft: 7,
		paddingLeft: 18,
		borderLeft: `1px dashed ${fade(theme.palette.text.primary, 0.4)}`
	}
}))((props) => (
	<TreeItem {...props} TransitionComponent={TransitionComponent} />
));

const useStyles = makeStyles({
	root: {
		height: 264,
		flexGrow: 1,
		maxWidth: 400
	}
});

export default function CustomizedTreeView() {
	const classes = useStyles();

	return (
		<TreeView
			className={classes.root}
			defaultExpanded={["1"]}
			defaultCollapseIcon={<ChevronDown />}
			defaultExpandIcon={<ChevronRight />}
		>
			<StyledTreeItem nodeId="1" label="Event Name">
				<StyledTreeItem nodeId="2" label="System 1" />
				<StyledTreeItem nodeId="3" label="System 2">
					<StyledTreeItem nodeId="5" label="Task 1" />
					<StyledTreeItem nodeId="6" label="Task 2">
						<StyledTreeItem nodeId="7" label="Subtask 1">
							<StyledTreeItem nodeId="10" label="Finding 1" />
							<StyledTreeItem nodeId="11" label="Finding 2" />
						</StyledTreeItem>
						<StyledTreeItem nodeId="8" label="Subtask 2" />
						<StyledTreeItem nodeId="9" label="Subtask 3" />
					</StyledTreeItem>
				</StyledTreeItem>
				<StyledTreeItem nodeId="4" label="System 3" />
			</StyledTreeItem>
		</TreeView>
	);
}
