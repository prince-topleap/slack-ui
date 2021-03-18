import React from "react";
import {
  makeStyles,
  Theme,
  createStyles,
  withStyles,
} from "@material-ui/core/styles";
import Collapse from "@material-ui/core/Collapse";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Avatar from "@material-ui/core/Avatar";
import Badge from "@material-ui/core/Badge";
import Switch from "@material-ui/core/Switch";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

// Icons Import
import FindInPageIcon from "@material-ui/icons/FindInPage";
import CallIcon from "@material-ui/icons/Call";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

//Custom Components Import
import IconButtonLabel from "../customComponents/iconButtonLabel";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      height: "100vh",
      background: theme.palette.background.default,
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: "33.33%",
      flexShrink: 0,
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
    },
    rootHeaderCard: {
      display: "flex",
      height: 50,
      justifyContent: "space-between",
      alignItems: "center",
      padding: 10,
      background: theme.palette.primary.main,
      borderRadius: 0,
    },
    headerHeading: {
      color: theme.palette.text.primary,
      fontWeight: 700,
    },
    headerSubText: {},
    headerTextWrapper: {},
    mainDetails: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: 20,
    },
    avatar: {
      width: 100,
      height: 100,
      background: theme.palette.secondary.main,
      marginBottom: 20,
      fontSize: 40,
      color: theme.palette.text.primary,
    },
    mainDetailsActions: {
      display: "flex",
      justifyContent: "space-between",
      padding: 10,
    },
    aboutWrapper: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: 10,
      transition: "all 0.3s ease-in",
      borderBottom: "1px solid rgba(0,0,0,0.3)",
      "&:hover": {
        cursor: "pointer",
        background: "rgba(0,0,0,0.1)",
      },
    },
    rootList: {
      backgroundColor: theme.palette.background.paper,
    },
  })
);

const StyledBadge = withStyles((theme: Theme) =>
  createStyles({
    badge: {
      right: -20,
      top: 16,
      border: `5px solid ${theme.palette.success.main}`,
      padding: "0 0px",
    },
  })
)(Badge);

const StyledListItemText = withStyles((theme: Theme) =>
  createStyles({
    primary: {
      color: theme.palette.text.primary,
    },
  })
)(ListItemText);

const AboutUser = () => {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);

  const handleChange = (e: any) => {
    if (e.target === e.currentTarget) {
      e.stopPropagation();
      setChecked((prev) => !prev);
    }
  };

  const dummyFn = () => {
    alert("I am Clicked");
  };

  return (
    <div className={classes.root}>
      <Card className={classes.rootHeaderCard} elevation={0}>
        <div className={classes.headerTextWrapper}>
          <Typography variant="body1" className={classes.headerHeading}>
            Details
          </Typography>
          <Typography variant="caption" className={classes.headerSubText}>
            Prince Anuragi
          </Typography>
        </div>
        <IconButton>
          <CloseIcon />
        </IconButton>
      </Card>
      <Card className={classes.mainDetails}>
        <Avatar variant="square" className={classes.avatar}>
          R
        </Avatar>
        <StyledBadge color="default" variant="dot">
          <Typography variant="h5">Prince Anuragi</Typography>
        </StyledBadge>
        <Typography>React Developer Intern</Typography>
        <div className={classes.mainDetailsActions}>
          <IconButtonLabel
            toolTipText="Find"
            action={dummyFn}
            label="Find"
            icon={<FindInPageIcon />}
          />
          <IconButtonLabel
            toolTipText="Call"
            action={dummyFn}
            label="Call"
            icon={<CallIcon />}
          />
          <IconButtonLabel
            toolTipText="More"
            action={dummyFn}
            label="More"
            icon={<MoreHorizIcon />}
          />
        </div>
      </Card>
      <div>
        <div className={classes.aboutWrapper} onClick={handleChange}>
          <Typography color="textPrimary">About Me</Typography>
          <Switch checked={checked} onChange={handleChange} />
        </div>
        <Collapse in={checked}>
          <List className={classes.rootList}>
            <ListItem>
              <StyledListItemText
                primary="Display Name"
                secondary="Prince Anuragi"
              />
            </ListItem>
            <ListItem>
              <StyledListItemText primary="Local Time" secondary="11:53 PM" />
            </ListItem>
            <ListItem>
              <StyledListItemText
                primary="Email Address"
                secondary="prince.anuragi@topleap.co"
              />
            </ListItem>
          </List>
        </Collapse>
      </div>
    </div>
  );
};

export default AboutUser;
