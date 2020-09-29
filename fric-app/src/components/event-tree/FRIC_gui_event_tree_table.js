import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import TreeView from "@material-ui/lab/TreeView";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import {TreeItem} from "@material-ui/lab";

const useStyles = makeStyles({
    root: {
      height: 216,
      flexGrow: 1,
      maxWidth: 400 
    }
  });

  

  export default function FRIC_gui_event_tree() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState([]);
    const [selected, setSelected] = React.useState([]);
  
    const handleToggle = (event, nodeIds) => {
      setExpanded(nodeIds);
    };
  
    const handleSelect = (event, nodeIds) => {
      setSelected(nodeIds);
    };
  
    return (
        
        
        
        
      <TreeView
        className={classes.root}
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
        expanded={expanded}
        selected={selected}
        onNodeToggle={handleToggle}
        onNodeSelect={handleSelect}
      >
        
        
       
        <TreeItem nodeId="1" label="Event">
          <TreeItem nodeId="2" label="System 1">
            <TreeItem nodeId="3" label="Task 1">
              <TreeItem nodeId="4" label="Subtask 1">
                <TreeItem nodeId="5" label="Finding 1" />
                <TreeItem nodeId="6" label="Finding 2" />
              </TreeItem>
              <TreeItem nodeId="7" label="Subtask 2" />
            </TreeItem>
            <TreeItem nodeId="8" label="Task 2">
              <TreeItem nodeId="9" label="Finding 1" />
            </TreeItem>
          </TreeItem>
          <TreeItem nodeId="10" label="System 2" />
        </TreeItem>
        
      </TreeView>
        
      
        
    );
  }