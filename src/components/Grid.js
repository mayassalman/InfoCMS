import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import RecipeReviewCard from './RecipeReviewCard'
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: '100%',
    height: 400,

  },
  gridListTile: {
    marginLeft:10,

  },
}));


 
  const tileData = [
    {
      img: '/images/cards/ar/card5.jpg',
      title: 'Image1',
      author: 'author',
      cols:3,
    },
    {
        img: '/images/cards/ar/card5.jpg',
        title: 'Image2',
        author: 'author',
      cols:3,

      },   {
      img: '/images/cards/ar/card5.jpg',
      title: 'Image3',
      author: 'author',
      cols:3,
    },   {
      img: '/images/cards/ar/card5.jpg',
      title: 'Image4',
      author: 'author',
      cols:3,
    },
  ]

  export default function ImageGridList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList  className={classes.gridList} cols={13}>
        {tileData.map(tile => (
          <GridListTile className={classes.gridListTile} key={tile.title} cols={tile.cols || 1}>
            {/* <img src={tile.img} alt={tile.title} /> */}
            <RecipeReviewCard/>
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
