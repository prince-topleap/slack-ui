import React from "react";
import {  makeStyles, Theme } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import Box from "@material-ui/core/Box";
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
      display: 'flex',
      flexDirection: 'column',
      padding: 10,
      alignItems: 'center',
      justifyContent: 'center'
  },
}));

interface IButtonLabel {
  label?: string;
  icon?: any;
  toolTipText: string;
  action: () => any;
}

const IconButtonLabel: React.FC<IButtonLabel> = ({
  label,
  icon,
  toolTipText,
  action,
}) => {
  const classes = useStyles();
  return (
    <Box className={classes.root} component="div">
      <Tooltip title={toolTipText}>
        <IconButton onClick={action}>{icon}</IconButton>
      </Tooltip>
      <Typography variant="body1">{label}</Typography>
    </Box>
  );
};

export default IconButtonLabel;
