import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import videoListStyle from "assets/jss/material-kit-react/components/videoListStyle.jsx";

import VideoListItem from "components/VideoListItem/VideoListItem.jsx";


function VideoList(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid className={classes.description} item xs={12}>
          <div>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
          </div>
        </Grid>
        <Grid item xs={12}>
          <VideoListItem />
          <VideoListItem />
          <VideoListItem />
          <VideoListItem />
          <VideoListItem />
          <VideoListItem />
          <VideoListItem />
          <VideoListItem />
          <VideoListItem />
        </Grid>
      </Grid>
    </div>
  );
}

VideoList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(videoListStyle)(VideoList);
