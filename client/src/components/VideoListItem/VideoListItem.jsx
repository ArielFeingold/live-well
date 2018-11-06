import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

import videoListItemStyle from "assets/jss/material-kit-react/components/videoListItemStyle.jsx";

function VideoListItem(props) {
  const { classes } = props;
  return (
    <Paper className={classes.root}>
      <Grid container spacing={16}>
        <Grid className={classes.iframe}>
          <iframe
            src="https://www.youtube.com/embed/2L2lnxIcNmo"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen>
          </iframe>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={16}>
            <Grid item xs>
              <Typography variant="title" gutterBottom >
                Exapmle Video
              </Typography>
              <Typography gutterBottom>A short description about the video</Typography>
              <Typography color="textSecondary">Tags: Yoga, Warmup, Dumbells</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}

VideoListItem.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(videoListItemStyle)(VideoListItem);
