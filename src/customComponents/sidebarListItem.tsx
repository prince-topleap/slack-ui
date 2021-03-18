import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    width: '100%',
    flexDirection: "row",
    padding: 0,
    alignItems: "center",
    justifyContent: "flex-start",
    transition: 'all 0.3s ease',
    borderBottom: '1px solid rgba(0,0,0,0.2)', 
    '&:hover': {
        cursor: 'pointer',
        background: theme.palette.background.default
    },
    '&:first-child': {
        borderTop: '1px solid rgba(0,0,0,0.2)', 
    }
  },
  label: {
      textTransform: 'none',
  },
  iconButton: {
      marginLeft: 20,
  }
}));

interface ISidebarItem {
  label?: string;
  icon?: any;
  toolTipText: string;
  action: () => any;
}

const SidebarListItem: React.FC<ISidebarItem> = ({
  label,
  icon,
  toolTipText,
  action,
}) => {
  const classes = useStyles();
  return (
    <Button className={classes.root} onClick={action}>
      <Tooltip title={toolTipText}>
        <IconButton className={classes.iconButton} disableTouchRipple>{icon}</IconButton>
      </Tooltip>
      <Typography variant="body1" className={classes.label}>{label}</Typography>
    </Button>
  );
};

export default SidebarListItem;
