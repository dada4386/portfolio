import React from "react";
import {ComponentProps} from "./App";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDesktop} from "@fortawesome/free-solid-svg-icons";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    skillGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
  })
)

const Skill: React.FC<ComponentProps> = (props: any) => {
  const classes = props.style;
  const style = useStyle();
  return (
    <Container className={classes.homeDefaultContent}>
      <Container className={classes.centerColumn}>
        {/* about header */}
        <Container className={classes.headerContainer}>
          <Box className={classes.centerColumn}>
            <Typography variant="h3">
              <FontAwesomeIcon icon={faDesktop} />&nbsp;
              {props.name}
            </Typography>
          </Box>
        </Container>
        {/* about contents */}
      </Container>
    </Container>
  )
}

export default Skill;
