import React, {ReactElement} from "react";
import Container from "@material-ui/core/Container";
import {Paper, TableBody, TableCell, TableContainer, TableRow, Table} from "@material-ui/core";
import {Theme, createStyles, makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import "../css/home.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faUserTag} from '@fortawesome/free-solid-svg-icons'

import top from "../binary/top.jpg"
import avatar from "../binary/avetar.png"

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
    centerColumn: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      filter: "",
    },
    centerRow: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      filter: "",
    },
    titleTypography: {
      fontFamily: "'Raleway', sans-serif",
      fontWeight: 1,
    },
    headerContainer: {
      maxWidth: "sm",
      padding: theme.spacing(8, 0, 6),
    },
    homeDefaultContent: {
      padding: theme.spacing(8, 0, 6),
      display: "flex",
      alignItems: "center",
      minHeight: "100vh",
    },
    paper: {
      padding: theme.spacing(8, 0, 6),
      minWidth: "100%",
      elevation: 5,
    },
    table: {
      minWidth: 600,
    },
    tableThCell: {
      fontWeight: "bold",
      width: "20%",
    },
  })
);

function createData(name: string, description: ReactElement) {
  return {name, description}
}

const aboutRows = [
  createData("名前", <div>村山 大貴(Daiki Murayama)</div>),
  createData("最終学歴", <div>東北大学 大学院情報科学研究科</div>),
  createData("所属", <div>Latona株式会社</div>),
  createData("経歴",
    <div>
      ・自動車メーカーでナビゲーションシステムの開発(C++)<br />
      &nbsp;&nbsp;→オンプレミスCI開発インフラの整備<br />
      ・スタートアップにてファクトリーオートメーションシステムのバックエンド(Python/Golang)を主に開発
    </div>
  ),
]

const Home: React.FC = () =>{
  const classes = useStyles();
  return (
    <div>
      {/* top */}
      <Container className={classes.homeTopContent}>
        <Container maxWidth={"md"}>
          {/* top logo */}
          <Box className={classes.centerColumn} bgcolor={"background.default"} p={2}>
            <Typography className={classes.titleTypography} variant="h1">
              Portfolio
            </Typography>
            <Typography className={classes.titleTypography} variant="h4">
              Backend/Infrastructure Engineer
            </Typography>
          </Box>
        </Container>
      </Container>

      {/* about */}
      <Container className={classes.homeDefaultContent}>
        <Container className={classes.centerColumn}>
          {/* about header */}
          <Container className={classes.headerContainer}>
            <Box className={classes.centerColumn}>
              <Typography className={classes.titleTypography} variant="h3">
                <FontAwesomeIcon icon={faUserTag} />&nbsp;
                About
              </Typography>
            </Box>
          </Container>
          {/* about contents */}
          <Paper className={classes.paper}>
            <Box className={classes.centerRow} p={2}>
              <Box p={2}>
                <img src={avatar} width={"200px"}/>
              </Box>
              <Box width={"60%"} p={2}>
                <TableContainer>
                  <Table className={classes.table}>
                    <TableBody>
                      {aboutRows.map((row) => (
                        <TableRow key={row.name}>
                          <TableCell className={classes.tableThCell} component={"th"} scope={"row"}>
                            {row.name}
                          </TableCell>
                          <TableCell align="left">{row.description}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
            </Box>
          </Paper>
        </Container>
      </Container>
    </div>
  );
};

export default Home;

