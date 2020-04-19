import React from "react";
import {ComponentProps} from "./App";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDesktop, faSquare} from "@fortawesome/free-solid-svg-icons";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {Grid, Paper, TableContainer, Table, TableBody, TableHead, TableCell, TableRow} from "@material-ui/core";

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    skillGrid: {
      padding: theme.spacing(8, 0 ,8),
    },
    paper: {
      padding: theme.spacing(3, 4, 2),
      elevation: 5,
    },
    table: {
      header: {
        fontWidth: 10,
      },
    },
    contentsBox: {
      padding: theme.spacing(1),
    }
  })
)

class SkillSet {
  name: string;
  skill: {
    name: string;
    age: number;
  }[];

  constructor(init?: Partial<SkillSet>) {
    this.name = ""
    this.skill = []
    Object.assign(this, init);
  }
}

const LangSkillList = new SkillSet({
  name: "言語",
  skill: [
    {name: "C++", age: 10},
    {name: "Python", age: 3},
    {name: "PHP", age: 3},
    {name: "Golang", age: 1},
    {name: "javascript", age: 1},
  ]
})

const ServerSkillList = new SkillSet({
  name: "サーバアプリケーション",
  skill: [
    {name: "MySQL", age: 5},
    {name: "Jenkins", age: 4},
    {name: "Nginx", age: 3},
    {name: "Kubernetes", age: 2},
    {name: "Terraform", age: 1},
  ]
})

const OtherSkillList = new SkillSet({
  name: "その他",
  skill: [
    {name: "IOS(Cisco)", age: 5},
    {name: "Yocto", age: 2},
    {name: "GCP", age: 1},
  ]
})

const SkillSetList = [
  LangSkillList, ServerSkillList, OtherSkillList,
]

class WorkSet {
  name: string;
  description: string[];
  useSkill: string[];

  constructor(init?: Partial<WorkSet>) {
    this.name = ""
    this.description = []
    this.useSkill = []
    Object.assign(this, init);
  }
}

const WorkSetList = [
  new WorkSet({
    name: "カーナビゲーションシステムのTDD開発",
    description: [
      "ナビゲーションシステムミドルウェアの詳細設計/実装を実施(C++)",
      "GoogleTestをベースとした独自テストフレームワークの改修の実施",
      "JenkinsとDockerを用いたマルチアーキテクチャ(x86/ARM)でのCI環境の構築",
      "Yoctoによる必要最小限のLinuxビルドの構築",
    ],
    useSkill: [
      "C++ : ナビゲーションシステムの基礎言語",
      "Yocto: ビルド用のレシピ・レイヤの設計、実装",
      "Jenkins: GroovyによるJenkins Pipelineを活用したジョブ構築",
    ]
  }),
  new WorkSet({
    name: "エッジコンピューティングにおけるマイクロサービス開発",
    description: [
      "エッジコンピューティングプラットフォームのアーキテクチャ設計",
      "マイクロサービスを連結するサービスブローカーのフルスクラッチ開発（Golang）",
      "カメラからのリアルタイム画像処理を実施する各種マイクロサービスの開発(OpenCV, gstreamer)",
      "GCP Speech-to-text、IBM Watsonを活用した音声のリアルタイム解析機能の開発",
    ],
    useSkill: [
      "Golang : Kubernetes制御機能も含めたサービスブローカーのフルスクラッチ開発",
      "Python: Pytorch, OpenCVを活用したリアルタイム画像処理マイクロサービスの開発",
      "Nvidia jetson: TensorRTによるDeeplerning、Deepstreamによる画像処理をNvidiaGPUで実施",
    ]
  }),
]

const Skill: React.FC<ComponentProps> = (props: any) => {
  const classes = props.style;
  const style = useStyle();
  return (
    <Container className={classes.homeDefaultContent}>
      <Container className={classes.centerColumn}>
        {/* header */}
        <Container className={classes.headerContainer}>
          <Box className={classes.centerColumn}>
            <Typography variant="h3">
              <FontAwesomeIcon icon={faDesktop} />&nbsp;
              {props.name}
            </Typography>
          </Box>
        </Container>
        {/* contents */}
        <Container className={classes.centerColumn}>
          <Box m={3}>
            <Typography variant="h5">
              メインスキルセット
            </Typography>
          </Box>
          <Grid container alignItems="stretch" justify="center" spacing={4}>
              {SkillSetList.map((skillSet) => (
                <Grid item key={skillSet.name} xs={12} sm={6} md={4}>
                  <Paper className={style.paper}>
                    <Box display={"flex"} flexDirection={"column"}>
                      <Box m={"auto"}>
                        <Typography variant="h5">{skillSet.name}</Typography>
                      </Box>
                      <TableContainer>
                        <Table className={style.table} size={"small"}>
                          <TableHead>
                            <TableRow>
                              <TableCell>名称</TableCell>
                              <TableCell>経歴</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {skillSet.skill.map((skill) => (
                              <TableRow>
                                <TableCell>{skill.name}</TableCell>
                                <TableCell>{skill.age}年</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </Box>
                  </Paper>
                </Grid>
              ))}
          </Grid>
          {/* 過去実績 */}
          <Box m={3}>
            <Typography variant="h5">
              過去実績
            </Typography>
          </Box>
          <Container maxWidth={"md"}>
            <Grid container direction="column" alignItems="stretch" justify="flex-start" spacing={4}>
              {WorkSetList.map((work) => (
                <Grid item key={work.name}>
                  <Paper className={style.paper}>
                    <Box display={"flex"} flexDirection={"column"}>
                      <Typography variant="h5">
                        <FontAwesomeIcon icon={faSquare} />&nbsp;{work.name}
                      </Typography>
                      <Box className={style.contentsBox}>
                        <Box m={1}>
                          <Typography variant="h5">概要</Typography>
                        </Box>
                        <Typography variant="body1">
                          <ul>
                            {work.description.map((val) => (
                              <li>{val}</li>
                            ))}
                          </ul>
                        </Typography>
                        <Box m={1}>
                          <Typography variant="h5">使用スキルセット</Typography>
                        </Box>
                        <Typography variant="body1">
                          <ul>
                            {work.useSkill.map((val) => (
                              <li>{val}</li>
                            ))}
                          </ul>
                        </Typography>
                      </Box>
                    </Box>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Container>
      </Container>
    </Container>
  )
}

export default Skill;
