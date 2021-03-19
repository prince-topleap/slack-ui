import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

// Components
import Sidebar from '../components/sidebar';
import AboutUser from '../components/aboutUser';
import MiddleComponent from '../components/middleComponent';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      height: "100vh",
      width: "100vw",
      overflow: 'hidden'
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);

const MainLayout = () => {
    const classes = useStyles();

    return (
        <Grid container className={classes.root}>
            <Grid item sm={12} md={2}>
                <Sidebar />
            </Grid>
            <Grid item sm={12} md={7}>
                <MiddleComponent />
            </Grid>
            <Grid item sm={12} md={3} >
                <AboutUser />
            </Grid>           
      </Grid>
    )
}

export default MainLayout
