import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { autoPlay } from "react-swipeable-views-utils";
import Card from "@material-ui/core/Card";
import SwipeableViews from "react-swipeable-views";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: "100%",
    flexGrow: 1,
    height: 220,
    // backgroundColor: "#0168c1"
    // backgroundColor: theme.palette.primary.main,
    // color: theme.palette.text.primary
    
  },
  card: {
    // backgroundColor: "#0168c1",
    backgroundColor: "inherit",

    color:"inherit",


    height: 220,
    marginLeft: "auto",
    marginRight: "auto",
    padding: "10px 30px"
  },
  text: {
    paddingLeft: "20px",
    // color: '#000',
    // color: theme.palette.primary.main,


    paddingTop: "20px"
  }
}));

function SwipeableTextStepper() {
  const classes = useStyles();
  const theme = useTheme();
  const tutorialSteps = theme.direction === "rtl" ? dataTextAr : dataTextEn;
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = step => setActiveStep(step);
  return (
    <div className={classes.root}>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        interval={6000}
        slideStyle={{ direction: theme.direction }}
      >
        {tutorialSteps.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Card className={classes.card}>
                <CardActionArea>
                  <CardContent>
                    <Grid container spacing={3}>
                      <Grid item xs={12} md={12} lg={3}>
                        <Typography gutterTop variant="h3" component="h3">
                          {step.title}
                        </Typography>
                        <Typography gutterTop variant="subtitle2">
                          {theme.direction === "rtl"
                            ? "  انفوستراتيجيك "
                            : "  Infostrategic"}
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={12} lg={9}>
                        <Typography
                          variant="h5"
                          // color="textPrimary"
                          // paragraph="true"
                          component="h5"
                          className={classes.text}
                        >
                          {step.text}
                        </Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </CardActionArea>
              </Card>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
    </div>
  );
}

export default SwipeableTextStepper;

let dataTextAr = [
  {
    title: "رؤيتنا",
    text: (
      <ul>
        <br />
        <li>ترك بصمة هامة في مجال إدارة المعلومات على المستوى العالمي</li>
      </ul>
    )
  },
  {
    title: "رسالتنا",
    text: (
      <ul>
        <li>
          تزويد عملائنا بحلول مبتكرة في جميع مراحل دورة حياة إدارة المعلومات
        </li>
        <li>
          {" "}
          ودعمهم في تحويل بياناتهم إلى معلومات مفيدة ، وإلى أداة اتصال قوية
        </li>
      </ul>
    )
  },
  {
    title: `قيمنا`,
    text: (
      <ul>
        <li>الإبداع: نزدهر ونسعى لتجاوز توقعات عملائنا</li>
        <li>
          {" "}
          المسؤولية: نحن مسؤولون عن تعهدنا بتقديم خدمات عالية الجودة ، ولتنفيذ
          التزاماتنا
        </li>
        <li>
          {" "}
          الاحترام: نظهر التقدير لبعضنا ، ونقدر مساهمات الجميع ، ونرحب بالتنوع
        </li>
      </ul>
    )
  }
];
let dataTextEn = [
  {
    title: "VISION",
    text:
      "To put a clear imprint in the sector of Information Management on a global level."
  },
  {
    title: "MISSION",
    text:
      "To provide our clients with innovative solutions in all the phases of the information management life cycle, and support them in transforming their data into useful information, and into a powerful communication tool. "
  },
  {
    title: "VALUES",
    text: `Creativity: We strive and thrive in exceeding the expectations of our clients.
      Accountability: We are accountable for our pledge to provide high quality services, and for delivering on our commitments.
      Respect: We show consideration for one another, value everyone’s contributions, and welcome diversity.`
  }
];
