import React, { useState ,useEffect} from "react";
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
import Badge from "@material-ui/core/Badge";
// import Add from "@material-ui/icons/Add";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
import MenuIcon from "@material-ui/icons/Menu";
import NotificationsIcon from "@material-ui/icons/Notifications";
import WbSunny from "@material-ui/icons/WbSunny";
import AcUnit from "@material-ui/icons/AcUnit";
import NightsStay from '@material-ui/icons/NightsStay';
import FormatTextdirectionRToLIcon from '@material-ui/icons/FormatTextdirectionRToL';
import FormatTextdirectionLToRIcon from '@material-ui/icons/FormatTextdirectionLToR';
import NestedList from "./NestedList";
import EnhancedTable from "./DataTable";
import CustomizedInputBase from "./CustomizedInputBase";

import { ThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import themeObject from "../themes/Theme1";
import Orders from "./Orders";
import { create } from "jss";
import rtl from "jss-rtl";
import { StylesProvider, jssPreset } from "@material-ui/core/styles";

import { useTranslation } from "react-i18next";





const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
const useSetTheme = (theme) => {
  const [themeConfig, setTheme] = useState(theme);

  
  const setThemeConfig = (DarkMode,RTLize,themeColorIndex) => {
  const primaryMain=["#673ab7","#ffc107","#f44336","#009688","#03a9f4","#ffeb3b"]
  const secondaryMain=["#0044ff","#76ff03","#b28900","#f50057","#834bff","#52b202"]
    const updatedTheme = {
      ...themeConfig,
      palette: {
        ...themeConfig.palette,
        type: DarkMode ? "dark" : "light",
        primary: {
          main: primaryMain[themeColorIndex]
        },
        secondary: {
          light: "#e91e63",
          main: secondaryMain[themeColorIndex],
          contrastText: "#00cc00"
        },
      },
      direction:RTLize?'rtl':'ltr',


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
  toolbar: {
    paddingRight: 24
  },
  toolbarIcon: {
    // display: "flex",
    // alignItems: "center",
    // justifyContent: "flex-end",
    // padding: "0 8px",
    ...theme.mixins.toolbar
  },
  appBar: {
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
    marginRight: 36
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
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9)
    }
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh"
    // overflow: "auto"
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column"
  },
  fixedHeight: {
    height: 240
  }
}));

export default function Dashboard() {
  


  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(true);
  const [isRTL, setIsRTL] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [themeColorIndex,setThemeColorIndex]=useState(0)

  const [themeConfig, setThemeConfig] = useSetTheme(themeObject);
  useEffect(()=>{
    setThemeConfig(isDarkMode,isRTL,themeColorIndex)
    i18n.changeLanguage(isRTL?'ar':'en'); 
  },[isDarkMode,isRTL,themeColorIndex])
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const theme = createMuiTheme(themeConfig);
  return (
    <StylesProvider jss={jss}>
      <div className="app" dir={isRTL ? "rtl" : "ltr"}>
        <ThemeProvider theme={theme}>
          <div className={classes.root}>
            <CssBaseline />
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
                {/* <CustomizedInputBase /> */}
                {/* <IconButton color="inherit">
                  <Badge
                    badgeContent={4}
                    anchorOrigin={{ vertical: "top", horizontal: "left" }}
                    color="error"
                  >
                    <Badge
                      badgeContent={3}
                      anchorOrigin={{ vertical: "top", horizontal: "right" }}
                      color="secondary"
                    >
                      <NotificationsIcon />
                    </Badge>
                  </Badge>
                </IconButton> */}
                <IconButton color="inherit" onClick={() => setIsDarkMode(!isDarkMode)}>
                  {isDarkMode?<WbSunny />:<NightsStay/>}
                </IconButton>
                <IconButton color="inherit" onClick={() => setIsRTL(!isRTL)}>
                  {isRTL?<FormatTextdirectionLToRIcon/>:<FormatTextdirectionRToLIcon />}
                </IconButton>


                <IconButton color="inherit" onClick={() => setThemeColorIndex((themeColorIndex+1)%6)}>
                <AcUnit />
                </IconButton>

                {/* <IconButton color="inherit">
                  <Badge
                    badgeContent={3333}
                    max="100"
                    variant={"dot"}
                    anchorOrigin={{ vertical: "top", horizontal: "right" }}
                    color="secondary"
                  >
                   // <AcUnit />
                    <Add />
                  </Badge>
                </IconButton> */}
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
              <NestedList />
              <Divider />
              <mainListItems/>
            </Drawer>
            <main className={classes.content}>
              <div className={classes.appBarSpacer} />
              <Container maxWidth="lg" className={classes.container}>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={12} lg={12}>
                    <Paper className={classes.paper}>
                      <EnhancedTable
                        headerData={headerData}
                        defaultRowsPerPage={10}
                        rows={data}
                        headCells={headCells}
                        pagenationData={pagenationData}
                      />
                    </Paper>
                  </Grid>
                  {/* <Orders /> */}
                </Grid>
              </Container>
            </main>
          </div>
        </ThemeProvider>
      </div>
    </StylesProvider>
  );
}









// Static Data





const headCells = [
  { id: "id", numeric: false, disablePadding: false, label: "#" },
  { id: "name", numeric: false, disablePadding: false, label: "الاسم" },
  { id: "city", numeric: false, disablePadding: false, label: "المدينة" },
  { id: "NatId", numeric: false, disablePadding: false, label: "الرقم الوطني" },
  { id: "DoB", numeric: false, disablePadding: false, label: "تاريخ الميلاد" },
  {
    id: "specialist",
    numeric: false,
    disablePadding: false,
    label: "الاختصاص"
  },
  { id: "Actions", numeric: false, disablePadding: false, label: "" }
];
function createData(id, name, city, NatId, DoB, specialist) {
  return { id, name, city, NatId, DoB, specialist };
}



const data = [
  createData(
    1,
    "مياس  تمين سلمان",
    `طرطوس`,
    1026010903,
    `23/02/1982`,
    `مطور تطبيقات وب`
  ),
  createData(
    2,
    "مياس سلمان",
    `طرطوس`,
    1026010903,
    `23/02/1982`,
    `مطور تطبيقات وب`
  ),
  createData(
    3,
    "مياس سلمان",
    `طرطوس`,
    1026010903,
    `23/02/1982`,
    `مطور تطبيقات وب`
  ),
  createData(
    4,
    "مياس سلمان",
    `طرطوس`,
    1026010903,
    `23/02/1982`,
    `مطور تطبيقات وب`
  ),
  createData(
    5,
    "مياس سلمان",
    `طرطوس`,
    1026010903,
    `23/02/1982`,
    `مطور تطبيقات وب`
  ),
  createData(
    6,
    "مياس سلمان",
    `طرطوس`,
    1026010903,
    `23/02/1982`,
    `مطور تطبيقات وب`
  ),
  createData(
    7,
    "مياس سلمان",
    `طرطوس`,
    1026010903,
    `23/02/1982`,
    `مطور تطبيقات وب`
  )
];
const pagenationData = {
  labelRowsPerPage: "عدد السجلات في الصفحة",
  nextIconButtonText: "التالي",
  backIconButtonText: "السابق"
};
const headerData = {
  selectedRecordsNumberText: "عدد السجلات المحددة",
  headerTitle: "العاملون في الشركة"
};
