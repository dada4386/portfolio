import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserTag} from "@fortawesome/free-solid-svg-icons";
import {Paper, Table, TableBody, TableCell, TableContainer, TableRow} from "@material-ui/core";
import React, {ReactElement} from "react";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import avatar from "../binary/avetar.png";
import {ComponentProps} from './App'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(4, 0, 4),
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
      ・大学院でドローン/スマートフォン間の通信アルゴリズムを研究・開発<br />
      ・自動車メーカーでナビゲーションシステムの開発に従事(C++)<br />
      　→&nbsp;インフラエンジニアとして主に開発用のCIインフラ整備業務に従事<br />
      ・スタートアップにて主にファクトリーオートメーションシステムの<br />
      　バックエンド(Python/Golang)の開発に従事
    </div>
  ),
]


const About: React.FC<ComponentProps> = (props: any) => {
  const classes = props.style;
  const aboutStyles = useStyles();
  return (
    <Container className={classes.homeDefaultContent}>
      <Container className={classes.centerColumn}>
        {/* about header */}
        <Container className={classes.headerContainer}>
          <Box className={classes.centerColumn}>
            <Typography variant="h3">
              <FontAwesomeIcon icon={faUserTag} />&nbsp;
              {props.name}
            </Typography>
          </Box>
        </Container>
        {/* about contents */}
        <Paper className={aboutStyles.paper}>
          <Box className={classes.centerRow} p={2}>
            <Box p={2}>
              <img src={avatar} width={"200px"}/>
            </Box>
            <Box width={"60%"} p={2}>
              <TableContainer>
                <Table className={aboutStyles.table}>
                  <TableBody>
                    {aboutRows.map((row) => (
                      <TableRow key={row.name}>
                        <TableCell className={aboutStyles.tableThCell} component={"th"} scope={"row"}>
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
  )
}

export default About;