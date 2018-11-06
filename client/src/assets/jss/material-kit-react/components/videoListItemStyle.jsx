const videoListItemStyle = theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing.unit * 2,
  },
  iframe: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
    overflow: 'hidden',
    position: 'relative',
    align: 'left'
  },
});

export default videoListItemStyle;
