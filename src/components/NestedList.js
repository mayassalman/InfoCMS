import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import Add from "@material-ui/icons/Add";
import SearchIcon from "@material-ui/icons/Search";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";
import { useTranslation } from "react-i18next";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  nested: {
    paddingLeft: theme.spacing(4)
  }
}));

export default function NestedList() {
  const { t } = useTranslation();
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Fragment>
      
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        // subheader={
          // <ListSubheader inset>
          //   {t("RELATIONSHIP.VIEW_RELATIONSHIP")}
          // </ListSubheader>
        // }
        className={classes.root}
      >
       
        <ListItem button onClick={handleClick}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary={t("NAV_BAR.HOME")} />
        </ListItem>
        <Divider />

        <ListItem button onClick={handleClick}>
          <ListItemIcon>
            <SearchIcon />
          </ListItemIcon>
          <ListItemText primary={t("NAV_BAR.SEARCH")} />
        </ListItem>
        <Divider />

        <ListItem button onClick={handleClick}>
          <ListItemIcon>
          <StarBorder />

          </ListItemIcon>
          <ListItemText primary={t("NAV_BAR.ADD_PERSON")} />
        </ListItem>
        <ListItem button onClick={handleClick}>
          <ListItemIcon>
            <Add />
          </ListItemIcon>
          <ListItemText primary={t("PROFILE.ADD_FRIEND")} />
        </ListItem>
      </List>
{/*     
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        // subheader={
        //   <ListSubheader inset>
        //     {t("RELATIONSHIP.VIEW_RELATIONSHIP")}
        //   </ListSubheader>
        // }
        className={classes.root}
      >
        <ListItem button onClick={handleClick}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary={t("HOME_TITLE")} />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary={t("NAV_BAR.HOME")} />
            </ListItem>
           
       
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary={t("NAV_BAR.ADD_PERSON")} />
            </ListItem>
          </List>
        </Collapse>
      </List> */}

    </Fragment>
  );
}
