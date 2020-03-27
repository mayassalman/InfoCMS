import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 200,
    borderColor:theme.palette.primary.main,
    borderTop:'8px solid',
    borderBottom:'3px solid',
    borderTopRightRadius:20,
    borderTopLeftRadius:5,
    borderBottomLeftRadius:20,
    borderBottomRightRadius:5,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function SwipperCard({item}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        title={item.title}
      />
      <CardMedia
        className={classes.media}
        image={`${item.img}`}
        title={item.title}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
         {item.text}
        </Typography>
      </CardContent>
    
    </Card>
  );
}
