import React from "react";
import { makeStyles,useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import StarBorderIcon from "@material-ui/icons/StarBorder";

const useStyles = makeStyles(theme => ({
  root1ar: {
    maxWidth: "100%",
    backgroundImage: `url(/images/cards/ar/card1.jpg)`,
    height: 600,
    paddingTop: "5%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: `100%`,
    //  margin: -24,
    padding: 50
  },
  root1en: {
    maxWidth: "100%",
    backgroundImage: `url(/images/cards/en/card1.jpg)`,
    height: 600,
    paddingTop: "5%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: `100%`,
    //  margin: -24,
    padding: 50
  },
  root3en: {
    maxWidth: "100%",
    backgroundImage: `url(/images/cards/en/card3.jpg)`,
    height: 400,
    paddingTop: "5%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: `100%`,
    //  margin: -24,
    padding: 50
  },
  root3ar: {
    maxWidth: "100%",
    backgroundImage: `url(/images/cards/ar/card3.jpg)`,
    height: 400,
    paddingTop: "5%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: `100%`,
    //  margin: -24,
    padding: 50
  },
  root2: {
    maxWidth: "100%",
    // height: 600,
    paddingTop: "5%",
    //  width: `calc(100vw + 48px)`,
    width: `100%`,

    //  margin: -24,
    padding: 50,

    backgroundColor: "textSecondary"
  },
  root4ar: {
    backgroundColor: "#0168c1",
    height: 300,
    maxWidth: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    paddingLeft: "30px",
    paddingRight: "5%",
  },
  root4en: {
    backgroundColor: "#0168c1",
    height: 380,
    maxWidth: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    paddingLeft: "30px",
    paddingRight: "5%"
  },
  media: {
    height: 400,
    paddingTop: "56.25%"
  },
  button1: {
    width: "250px",
    border: "2px solid",
    fontSize: "1.5em",
    variant: "outlined",
    padding: " 8px 8px"
  },
  button2: {
    fontSize: "1.5em",
    variant: "contained",
    backgroundColor: theme.palette.primary.main,
    padding: " 8px 8px",
    width: "250px",
    fontWeight: "bold"
  }
}));

export function Header1() {
  const classes = useStyles();
  const theme = useTheme();


  return !(theme.direction === 'rtl') ?  (
    <Card className={classes.root1en}>
     
        <CardContent>
          <Typography gutterTop variant="h4" component="h4">
            Infostrategic
          </Typography>
          <Typography gutterBottom variant="h1" component="h2">
            We Make It Easy
          </Typography>
          <Typography variant="h5" color="textPrimary" component="h5">
            <br />
            <br />
            <br />
          </Typography>
        </CardContent>
      <CardActions>
        <Button className={classes.button1}>Talk To An Expert</Button>
        <Button
          className={classes.button2}
          size="large"
          variant="contained"
          color="primary"
        >
          Call For Help
        </Button>
      </CardActions>
    </Card>
  ) : (
    <Card className={classes.root1ar}>
      <CardActionArea>
        <CardContent>
          <Typography gutterTop variant="h4" component="h4">
            إنفوستراتيجيك
          </Typography>
          <Typography gutterBottom variant="h1" component="h2">
            نقرب طموحاتك إليك
            <br />
            <br />

          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button className={classes.button1}>استشر اختصاصيينا</Button>
        <Button
          className={classes.button2}
          size="large"
          variant="contained"
          color="primary"
        >
          اطلب المساعدة
        </Button>
      </CardActions>
    </Card>
  );
}
export function Header2() {
  const classes = useStyles();
  const theme = useTheme();

  return !(theme.direction === 'rtl') ?  (
    <Card className={classes.root2}>
      <CardActionArea>
        {/* <CardMedia
          className={classes.media}
          image="/images/cards/card.jpg"
          title="Contemplative Reptile"
        /> */}
        <CardContent>
          <Typography gutterTop variant="h5" component="h5">
            About Us
          </Typography>
          <Typography gutterBottom variant="h3" component="h3">
            We Make It Easy
          </Typography>
          <Typography variant="h5" color="textPrimary" component="h5">
            <br />
            <br />
            INFO STRATEGIC CONSULTANCY Is an information management company,
            specialized in designing and implementing comprehensive information
            technology-based solutions that support clients to successfully
            achieve their strategy and overarching objectives. Info Strategic
            Consultancy offers a comprehensive suit of information management
            services to meet its clients’ vast operational needs, including, but
            not limited to: Information systems consultancy, as well as in
            developing and re-engineering data collection, recording and
            reporting systems, including geographic information system (GIS);
            developing and designing intranet and web-based portals.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  ) : (
    <Card className={classes.root2}>
      <CardActionArea>
        {/* <CardMedia
          className={classes.media}
          image="/images/cards/card.jpg"
          title="Contemplative Reptile"
        /> */}
        <CardContent>
          {/* <Typography gutterTop variant="h5" component="h5">
            عن الشركة
          </Typography> */}
          <Typography gutterBottom variant="h3" component="h3">
            هويّتنا
          </Typography>
          <Typography variant="h5" color="textPrimary" component="h5">
            <br />
            إنفو ستراتيجيك هي شركة استشارية في إدارة المعلومات، متخصصة في تصميم
            وتطبيق الحلول المتكاملة التي تساعد عملائها في الحصول على نتائج
            أعمالهم بنجاح
            <br />
            <br />
          </Typography>
          <Typography gutterBottom variant="h3" component="h3"></Typography>
          <Typography gutterTop variant="body2" component="p">
            <br />
            <br /> وذلك من خلال تطبيق أفضل الممارسات في جمع وتخزين ومكاملة
            وإخراج البيانات بالدقة والشكل المطلوب في الوقت المناسب بفعالية
            وشفافية
            <br />
            <br />
          </Typography>

          <Typography gutterBottom variant="h3" component="h3">
            قيمنا
          </Typography>
          <Typography variant="h5" color="textPrimary" component="h5">
            <br />
            الإبداع: نزدهر ونسعى لتجاوز توقعات عملائنا
            <br />
            المسؤولية: نحن مسؤولون عن تعهدنا بتقديم خدمات عالية الجودة ، ولتنفيذ
            التزاماتنا
            <br />
            الاحترام: نظهر التقدير لبعضنا ، ونقدر مساهمات الجميع ، ونرحب
            بالتنوع
            <br />
            <br />
          </Typography>
          <Typography gutterBottom variant="h3" component="h3">
            رسالتنا
          </Typography>
          <Typography variant="h5" color="textPrimary" component="h5">
            <br />
            تزويد عملائنا بحلول مبتكرة في جميع مراحل دورة حياة إدارة المعلومات ،
            ودعمهم في تحويل بياناتهم إلى معلومات مفيدة ، وإلى أداة اتصال قوية.
            <br />
            <br />
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export function Header4() {
  const classes = useStyles();
  const theme = useTheme();

  return (theme.direction === 'rtl') ?  (
    
    <Card className={classes.root4ar}>
      <CardActionArea>
        <CardContent>
          <Typography gutterTop variant="h4" component="p">
            هويتنا
          </Typography>
          <Typography gutterBottom variant="subtitle2">
            انفوستراتيجيك
          </Typography>
          <Typography
            variant="h4"
            color="textPrimary"
            paragraph="true"
            component="h4"
          >
            <br />
            “ إنفو ستراتيجيك هي شركة استشارية في إدارة المعلومات، متخصصة في تصميم
            وتطبيق الحلول المتكاملة التي تساعد عملائها في الحصول على نتائج
            أعمالهم بنجاح ”
            <br />
            <br />
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  
  ) : (
    <Card className={classes.root4en}>
      <CardActionArea>
        <CardContent>
          <Typography gutterTop variant="h4" component="p">
            About Us
          </Typography>
          <Typography gutterBottom variant="subtitle2">
          INFO STRATEGIC CONSULTANCY
          </Typography>
          <Typography
            variant="h4"
            color="textPrimary"
            paragraph="true"
            component="h4"
          >
            <br />
            “Is an information management company, specialized in designing and implementing comprehensive information technology-based solutions that support clients to successfully achieve their strategy and overarching objectives”
            <br />
            <br />
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
export function Header3() {
  const classes = useStyles();
  const theme = useTheme();

  return (theme.direction === 'rtl') ?  (
    <Card className={classes.root3ar}>
      <CardActionArea>
        <CardContent>
          <Typography gutterTop variant="h4" component="h4">
            معنا
          </Typography>
          <Typography gutterBottom variant="h1" component="h2">
            إبدأ مشوارك
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button className={classes.button1}>اطلب مشروعك</Button>
      </CardActions>
    </Card>
  ) : (
    <Card className={classes.root3en}>
      <CardActionArea>
        <CardContent>
          <Typography gutterTop variant="h4" component="h4">
            With Us
          </Typography>
          <Typography gutterBottom variant="h1" component="h2">
            Start Your Journey
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button className={classes.button1}>Ask For Your Project</Button>
      </CardActions>
    </Card>
  );
}

const useStyles2 = makeStyles(theme => ({
  root: {
    margin: 20,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    height: 700
  },
  gridListTile: {
    height: 400
  },
  title: {
    color: theme.palette.primary.light
  },
  text: {
    textAlign: "justify",
    paddingLeft: 20
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"
  }
}));

const tileData = [
  {
    title: `هويتنا`,
    text: `إنفو ستراتيجيك هي شركة استشارية في إدارة المعلومات، متخصصة في تصميم
        وتطبيق الحلول المتكاملة التي تساعد عملائها في الحصول على نتائج
        أعمالهم بنجاح`
  },
  {
    title: `رسالتنا`,
    text: `
        تزويد عملائنا بحلول مبتكرة في جميع مراحل دورة حياة إدارة المعلومات ،
        ودعمهم في تحويل بياناتهم إلى معلومات مفيدة ، وإلى أداة اتصال قوية
        `
  },

  {
    title: `قيمنا`,
    text: (
      <ul>
        <li>الإبداع: نزدهر ونسعى لتجاوز توقعات عملائنا.</li>
        <li>
          المسؤولية: نحن مسؤولون عن تعهدنا بتقديم خدمات عالية الجودة ، ولتنفيذ
          التزاماتنا.
        </li>
        <li>
          الاحترام: نظهر التقدير لبعضنا ، ونقدر مساهمات الجميع ، ونرحب بالتنوع.
        </li>
      </ul>
    )
  },
  {
    title: `خدماتنا`,
    text: ``
  }
];


let dataTextAr = [
  {title: "رؤيتنا",text: "رؤيتنا - ترك بصمة هامة في مجال إدارة المعلومات على المستوى العالمي."},
  {title:    "رسالتنا",text: "رسالتنا -تزويد عملائنا بحلول مبتكرة في جميع مراحل دورة حياة إدارة المعلومات ، ودعمهم في تحويل بياناتهم إلى معلومات مفيدة ، وإلى أداة اتصال قوية."},
  {title:    "قيمنا",text: "قيمنا -الإبداع: نزدهر ونسعى لتجاوز توقعات عملائنا. المسؤولية: نحن مسؤولون عن تعهدنا بتقديم خدمات عالية الجودة ، ولتنفيذ التزاماتنا. الاحترام: نظهر التقدير لبعضنا ، ونقدر مساهمات الجميع ، ونرحب بالتنوع."}
]
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
    text:
      "Creativity: We strive and thrive in exceeding the expectations of our clients.Accountability: We are accountable for our pledge to provide high quality services, and for delivering on our commitments.Respect: We show consideration for one another, value everyone’s contributions, and welcome diversity."
  }
];
