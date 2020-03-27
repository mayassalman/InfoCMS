import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import RecipeReviewCard from "./RecipeReviewCard";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    // margin: "0px",
    padding: theme.spacing(3),
    color: theme.palette.text.secondary
  }
}));

const dataAr = [
  { id: "1", title: "تصميم الغرافيك", img: "graphicsdesign.jpg", text: "" },
  {
    id: "2",
    title: "استراتيجيات المعلومات",
    img: "informationstrategic.png",
    text: ""
  },
  { id: "3", title: "تصميم وتحليل النظم", img: "sad.jpg", text: "" },
  { id: "4", title: "معالجة البيانات", img: "DataProcessing.jpg", text: "" },
  {
    id: "5",
    title: "تكنولوجيا المعلومات",
    img: "InformationTechnology.jpg",
    text: ""
  },
  { id: "6", title: "تحرير التقارير", img: "ReportsEditing.jpg", text: "" },
  { id: "7", title: "تصميم الغرافيك", img: "graphicsdesign.jpg", text: "" },
  { id: "8", title: "تصميم وتحليل النظم", img: "sad.jpg", text: "" }
];
const dataEn = [
  { id: "1", title: "Graphic Design", img: "graphicsdesign.jpg", text: "" },
  {
    id: "2",
    title: "Information Strategies",
    img: "informationstrategic.png",
    text: ""
  },
  { id: "3", title: "Systems Analysis & Design", img: "sad.jpg", text: "" },
  { id: "4", title: "Data Processing", img: "DataProcessing.jpg", text: "" },
  {
    id: "5",
    title: "Information Technology",
    img: "InformationTechnology.jpg",
    text: ""
  },
  { id: "6", title: "Reports Editing", img: "ReportsEditing.jpg", text: "" },
  { id: "7", title: "Systems Analysis & Design", img: "sad.jpg", text: "" },
  { id: "8", title: "Data Processing", img: "DataProcessing.jpg", text: "" }
];
export default function NestedGrid() {
  const classes = useStyles();

  const theme = useTheme();
  const data = theme.direction === "rtl" ? dataAr : dataEn;

  function FormRow() {
    return (
      <React.Fragment>
        {data.map(item => (
          <Grid item xs={3} md={3} lg={3}>
            <RecipeReviewCard item={item} />
          </Grid>
        ))}
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid
          container
          justify={"space-around"}
          alignItems={"center"}
          item
          xs={12}
          spacing={3}
        >
          <FormRow />
        </Grid>
      </Grid>
    </div>
  );
}
