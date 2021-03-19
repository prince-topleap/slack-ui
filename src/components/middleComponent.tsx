import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import {
  makeStyles,
  Theme,
  createStyles,
  withStyles,
} from "@material-ui/core/styles";

import {
    Switch,
    Route,
    Link
  } from "react-router-dom";

import slack_discussion from '../static/slack_discussion.png';
import slack_guitar from '../static/slack_guitar.png';
import slack_feeds from '../static/slack_feeds1.png';
import slack_group_chat from '../static/slack_group_chat.png';
import slack_personal from '../static/slack_personal1.png';
import slack_product_discussion from '../static/slack_product_discussion.png';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: "100%",
      width: "100%",
      background: theme.palette.background.default,
      padding: 0,
      borderLeft: '1px solid rgba(0,0,0,0.3)',
      borderRight: '1px solid rgba(0,0,0,0.3)',
      overflow: 'hidden'
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
    image: {
        width: '100%',
        height: '100%',
        
    },
    imageWrapper: {
        padding: 0,
        height: '90vh',
       
    }
  })
);

const MiddleComponent = () => {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Card className={classes.rootHeaderCard} elevation={0}>
        <Typography variant="h6">Prince Anuragi</Typography>
      </Card>
      <Container className={classes.imageWrapper}>
        <Switch>
          <Route path="/groups/discussion">
            <img alt="dummy_image" src={slack_discussion} className={classes.image} style={{objectFit: 'contain'}}/>
          </Route>
          <Route path="/groups/locked">
            <img alt="dummy_image" src={slack_product_discussion} className={classes.image} style={{objectFit: 'contain'}}/>
          </Route>
          <Route path="/chats/personal">
            <img alt="dummy_image" src={slack_personal} className={classes.image} style={{objectFit: 'contain'}}/>
          </Route>
          <Route path="/chats/groups">
            <img alt="dummy_image" src={slack_group_chat} className={classes.image} style={{objectFit: 'contain'}}/>
          </Route>
          <Route path="/pages/feeds">
            <img alt="dummy_image" src={slack_feeds} className={classes.image} style={{objectFit: 'contain'}}/>
          </Route>
           <Route path="/pages/guitar">
            <img alt="dummy_image" src={slack_guitar} className={classes.image} style={{objectFit: 'cover'}}/>
          </Route>
          <Route path="/">
            <img alt="dummy_image" src={slack_discussion} className={classes.image} style={{objectFit: 'contain'}}/>
          </Route>
        </Switch>
      </Container>
    </Container>
  );
};

export default MiddleComponent;
