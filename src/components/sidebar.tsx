import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import EditIcon from "@material-ui/icons/Edit";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropDown";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "../customComponents/accordianComponents";

import SidebarListItem from "../customComponents/sidebarListItem";

import LockIcon from "@material-ui/icons/Lock";
import ViewHeadlineIcon from "@material-ui/icons/ViewHeadline";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import RssFeedIcon from "@material-ui/icons/RssFeed";
import MusicNoteIcon from "@material-ui/icons/MusicNote";

import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      height: "100vh",
      background: theme.palette.background.default,
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
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
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
      background: theme.palette.warning.main,
    },
    avatar: {
      width: 40,
      height: 40,
      background: theme.palette.secondary.main,
      fontSize: 20,
      color: theme.palette.text.primary,
    },
  })
);

const Sidebar = (props: any) => {
  const classes = useStyles();
  let history = useHistory();

  const [sidebarState, setSidebarState] = React.useState({
    groups: [
      {
        type: "random",
        name: "discussions 🛶",
      },
      {
        type: "locked",
        name: "feeds",
      },
      {
        type: "random",
        name: "study-material 🪢",
      },
    ],
    messages: [
      {
        type: "personal",
        name: "Rohit Thakur 📲",
      },
      {
        type: "group",
        name: "Group Chat",
      },
      {
        type: "personal",
        name: "Kapil 📞",
      },
    ],
    pages: [
      {
        type: "music",
        name: "guitar 🎶🎸",
      },
      {
        type: "feed",
        name: "feeds 📖",
      },
    ],
  });



  return (
    <div className={classes.root}>
      <Card className={classes.rootHeaderCard} elevation={0}>
        <Avatar variant="square" className={classes.avatar}>
          T
        </Avatar>
        <Typography variant="h6" className={classes.headerHeading}>
          TopLeap
        </Typography>
        <IconButton>
          <EditIcon />
        </IconButton>
      </Card>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropUpIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>Groups</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {sidebarState.groups.map((group) => {
            return (
              <SidebarListItem
                toolTipText={group.name}
                icon={
                  group.type === "locked" ? <LockIcon /> : <ViewHeadlineIcon />
                }
                label={group.name}
                action={() =>
                  history.push(
                    `/groups/${
                      group.type === "locked" ? "locked" : "discussion"
                    }`
                  )
                }
              />
            );
          })}
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropUpIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>Direct Messages</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {sidebarState.messages.map((message) => {
            return (
              <SidebarListItem
                toolTipText={message.name}
                icon={
                  message.type === "personal" ? (
                    <Avatar variant="square" className={classes.small}>
                      {message.name[0]}
                    </Avatar>
                  ) : (
                    <PeopleOutlineIcon />
                  )
                }
                label={message.name}
                action={() =>
                  history.push(
                    `/chats/${
                      message.type === "personal" ? "personal" : "groups"
                    }`
                  )
                }
              />
            );
          })}
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropUpIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}>Pages</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {sidebarState.pages.map((page) => {
            return (
              <SidebarListItem
                toolTipText={page.name}
                icon={
                  page.type === "music" ? <MusicNoteIcon /> : <RssFeedIcon />
                }
                label={page.name}
                action={() =>
                  history.push(
                    `/pages/${page.type === "music" ? "guitar" : "feeds"}`
                  )
                }
              />
            );
          })}
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Sidebar;
