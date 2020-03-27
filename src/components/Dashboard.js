import React, { Fragment, useState, useEffect } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import MenuIcon from "@material-ui/icons/Menu";
import WbSunny from "@material-ui/icons/WbSunny";
import AcUnit from "@material-ui/icons/AcUnit";
import StyleIcon from "@material-ui/icons/Style";
import ColorLensIcon from "@material-ui/icons/ColorLens";
import NightsStay from "@material-ui/icons/NightsStay";
import { MainList, NestedList, CustomizedMenus, TopMenu } from "./Menu";
import { MenuListComposition } from "./TopMenu";
import EnhancedTable from "./DataTable";
import LanguageIcon from "@material-ui/icons/Language";
import { ThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";

import themeObject from "../themes/Theme1";
import { create } from "jss";
import rtl from "jss-rtl";
import { StylesProvider, jssPreset } from "@material-ui/core/styles";

import { useTranslation } from "react-i18next";
import ListItem from "@material-ui/core/ListItem";
import { Header1, Header3 } from "./Header";
import SwipeableTextStepper from "./SwipeableTextStepper";
import NestedGrid from "./NestedGrid";
import {
  mainMenu,
  nestedMenu,
  topMenu,
  headCells,
  data,
  headerData
} from "./data";
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
const primaryMain = ["#FFDE03", "#FF0266", "#FFF"];
const secondaryMain = ["#0336FF", "#791515", "#000"];

const useSetTheme = theme => {
  const [themeConfig, setTheme] = useState(theme);

  const setThemeConfig = (DarkMode, RTLize, themeColorIndex) => {
    const updatedTheme = {
      ...themeConfig,
      palette: {
        ...themeConfig.palette,
        type: DarkMode ? "dark" : "light",
        primary: {
          main: primaryMain[themeColorIndex]
        },
        secondary: {
          main: secondaryMain[themeColorIndex]
        }
      },
      direction: RTLize ? "rtl" : "ltr"
    };
    setTheme(updatedTheme);
  };
  return [themeConfig, setThemeConfig];
};
const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },

  // palette: {
  //   type: "dark",
  //   background: {
  //     default: "#000",
  //     paper: "#fff"
  //   }
  // },

  h6: {
    fontSize: "1.5rem"
  },

  toolbar: {
    paddingRight: 20
  },
  toolbarIcon: {
    height: "80px",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  appBar: {
    position: "fixed",
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 16
  },
  menuButtonHidden: {
    display: "none"
  },
  title: {
    flexGrow: 1
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: "hidden",

    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    // width: theme.spacing(7),
    // [theme.breakpoints.up("sm")]: {
    //   width: theme.spacing(9)
    // }
    width: 0
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1
    // height: "100vh"
    // overflow: "auto"
  },
  container: {
    paddingTop: theme.spacing(0),
    paddingBottom: theme.spacing(2),
    paddingRight: theme.spacing(0),
    paddingLeft: theme.spacing(0),
    maxWidth: "100%"
  },
  paper: {
    padding: theme.spacing(0),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
    marginBottom: theme.spacing(6)
  },
  fixedHeight: {
    height: 240
  }
}));

export default function Dashboard() {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const [isRTL, setIsRTL] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [themeColorIndex, setThemeColorIndex] = useState(0);

  const [themeConfig, setThemeConfig] = useSetTheme(themeObject);
  useEffect(() => {
    setThemeConfig(isDarkMode, isRTL, themeColorIndex);
    i18n.changeLanguage(isRTL ? "ar" : "en");
  }, [isDarkMode, isRTL, themeColorIndex]);
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const theme = createMuiTheme(themeConfig);

  const UtilityBar = () => (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}
    >
      <ListItem>
        {/* <ListItemIcon><InboxIcon /></ListItemIcon> */}
        <IconButton color="inherit" onClick={() => setIsDarkMode(!isDarkMode)}>
          {isDarkMode ? <WbSunny /> : <NightsStay />}
        </IconButton>
        <IconButton color="inherit" onClick={() => setIsRTL(!isRTL)}>
          <LanguageIcon />
        </IconButton>

        <IconButton
          color="inherit"
          onClick={() =>
            setThemeColorIndex((themeColorIndex + 1) % primaryMain.length)
          }
        >
          <ColorLensIcon />
        </IconButton>
      </ListItem>
      {/* <Divider /> */}
    </List>
  );

  return (
    <StylesProvider jss={jss}>
      <div dir={isRTL ? "rtl" : "ltr"}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className={classes.root}>
            <AppBar
              position="absolute"
              className={clsx(classes.appBar /*, open && classes.appBarShift*/)}
            >
              <Toolbar className={classes.toolbar}>
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="open drawer"
                  onClick={() => setOpen(!open)}
                  className={clsx(classes.menuButton, open)}
                >
                  <MenuIcon />
                </IconButton>
                <Typography
                  component="h1"
                  variant="h6"
                  color="inherit"
                  noWrap
                  className={classes.title}
                >
                  {t("HOME_TITLE")}
                </Typography>
                {/* <CustomizedMenus/> */}
                {/* <TopMenu menu={topMenu}/> */}
                <MenuListComposition menu={topMenu} />
                <UtilityBar />
              </Toolbar>
            </AppBar>

            <Drawer
              variant="permanent"
              classes={{
                paper: clsx(
                  classes.drawerPaper,
                  !open && classes.drawerPaperClose
                )
              }}
              open={open}
            >
              <div className={classes.toolbarIcon}></div>

              <MainList menu={mainMenu} />
              <NestedList menu={nestedMenu} title={"ADD"} />

              <Divider />
            </Drawer>
            <main className={classes.content}>
              <div className={classes.appBarSpacer} />

              <Container maxWidth="lg" className={classes.container}>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={12} lg={12}>
                    <Header1 />
                  </Grid>
                  <Grid item xs={12} md={12} lg={12}>
                    <NestedGrid />
                  </Grid>
                  <Grid item xs={12} md={12} lg={12}>
                    <SwipeableTextStepper />
                  </Grid>
                  <Grid item xs={12} md={12} lg={12}></Grid>
                  <Grid item xs={12} md={12} lg={12}>
                    <Paper>
                      <Header3 />
                    </Paper>
                  </Grid>
                  <Grid item xs={12} md={12} lg={12}>
                    <Paper className={classes.paper}>
                      <EnhancedTable
                        headerData={headerData}
                        defaultRowsPerPage={5}
                        rows={data}
                        headCells={headCells}
                      />
                    </Paper>
                  </Grid>
                  
                </Grid>
              </Container>

              <Container
                maxWidth="lg"
                className={classes.container}
              ></Container>
            </main>
          </div>
        </ThemeProvider>
      </div>
    </StylesProvider>
  );
}
