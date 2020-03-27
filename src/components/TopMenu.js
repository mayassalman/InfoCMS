import React from "react";
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import { useTranslation } from "react-i18next";
import Menu from "@material-ui/core/Menu";
import Fade from "@material-ui/core/Fade";
import { Link } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  paper: {
    marginRight: theme.spacing(2),
  },
  link:{
    padding: theme.spacing(1),
    fontSize:'1.2em',
    fontWeight:"bolder"
  }
}));

export function MenuListComposition({ menu }) {
  const classes = useStyles();
  const preventDefault = event => event.preventDefault();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const { t } = useTranslation();

  return (
    <div className={classes.root}>
      <Typography className={classes.root}>
        {menu.map(item => (
          <Link href="#" onClick={preventDefault} 
          className={classes.link} color="inherit">
            {t(`${item.text}`)}
          </Link>
        ))}
      </Typography>
    </div>
  );
}
