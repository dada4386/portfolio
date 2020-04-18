import React from "react";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

import top from "../binary/top.jpg"
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import {ComponentProps} from './App'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    homeTopContent: {
      padding: theme.spacing(8, 0, 6),
      display: "flex",
      alignItems: "center",
      minHeight: "100vh",
      minWidth: "95vw",
      backgroundImage: `url(${top})`,
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
    titleTypography: {
      fontFamily: "'Raleway', sans-serif",
      fontWeight: 1,
    },
  })
);

const Top: React.FC<ComponentProps> = (props: any) => {
  const classes = props.style;
  const homeClasses = useStyles();
  return(
    <Container className={homeClasses.homeTopContent}>
      <Container maxWidth={"md"}>
        {/* top logo */}
        <Box className={classes.centerColumn} bgcolor={"background.default"} p={2}>
          <Typography className={homeClasses.titleTypography} variant="h1">
            Portfolio
          </Typography>
          <Typography className={homeClasses.titleTypography} variant="h4">
            Backend/Infrastructure Engineer
          </Typography>
        </Box>
      </Container>
    </Container>
  );
}

export default Top;
