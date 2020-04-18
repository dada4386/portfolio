import React from "react";
import Container from "@material-ui/core/Container";
import {Theme, createStyles, makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import "../css/home.css"

let topPictureUrl = `url(${process.env.PUBLIC_URL}/top.jpg)`;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    homeTopContent: {
      padding: theme.spacing(8, 0, 6),
      display: "flex",
      alignItems: "center",
      minHeight: "100vh",
      maxWidth: "100vw",
      backgroundImage: topPictureUrl,
      backgroundPosition: "center center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      position: "relative",
      zIndex: 0,
      overflow: "hidden",
      "&::before": {
        content: "''",
        background: "inherit",
        filter: "blur(5px)",
        position: "absolute",
        zIndex: -1,
        top: "-5px",
        left: "-5px",
        right: "-5px",
        bottom: "-5px",
      }
    },
    homeTopBox: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      filter: "",
    },
    titleTypography: {
      fontFamily: "'Raleway', sans-serif",
      fontWeight: 1,
    },
  })
);

const Home: React.FC = () =>{
  const classes = useStyles();
  return (
    <div>
      <Container className={classes.homeTopContent}>
        <Container maxWidth={"md"}>
          <Box bgcolor={"background.default"}  p={2}>
            <Box className={classes.homeTopBox} >
              <Typography className={classes.titleTypography} variant="h1">
                Portfolio
              </Typography>
            </Box>
            <Box className={classes.homeTopBox}>
              <Typography className={classes.titleTypography} variant="h4">
                Backend/Infrastructure Engineer
              </Typography>
            </Box>
          </Box>
        </Container>
      </Container>
      <Container>
        test
      </Container>
    </div>
  );
};

export default Home;

