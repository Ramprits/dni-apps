import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { emphasize, fade, darken, lighten } from '@material-ui/core/styles/colorManipulator';

import clsx from 'clsx';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  primaryAction: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      marginRight: theme.spacing(0),
      marginBottom: theme.spacing(2),
    }
  },
  secondaryAction: {
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    }
  },
  contentBox: {
    maxWidth: theme.breakpoints.values['md'],
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(8),
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center',
    [theme.breakpoints.up('lg')]: {
      maxWidth: theme.breakpoints.values['lg'] / 2,
      maxHeight: 512,
      paddingTop: theme.spacing(16),
      paddingBottom: theme.spacing(16),
      marginRight: 0,
      textAlign: 'left',
    }
  },
  img: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    objectFit: 'cover',
    height: 512,
    width: '100%'
  }
}
));

export default function Component(props) {
  const classes = useStyles();

  return (
<section>
  <Grid container>
    <Grid item xs={12} lg={6}>
      <Box className={classes.contentBox}>
        <Container>
          <Typography variant="h3" component="h2" gutterBottom={true}>Fresh Fruit</Typography>
          <Typography variant="h5" color="textSecondary" paragraph={true}>The PiperNet is on it's way to revolutionize every smartphone, PC, and smart-fridge near you.</Typography>
          <Box mt={4}>
            <Button variant="contained" color="primary" className={classes.primaryAction}>Sign up for free</Button>
          </Box>
        </Container>
      </Box>
    </Grid>
    <Grid item xs={12} lg={6}>
      <Box position="relative" height={512}>
        <img className={classes.img} src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="" />
      </Box>
    </Grid>
  </Grid>
</section>
  );
}