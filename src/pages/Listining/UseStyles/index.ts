import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: "10px",
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  containerPerson: {
    display: 'flex',
    alignItems: 'center',
    paddingBottom: '20px',
  },
  headTable: {
    backgroundColor: theme.palette.secondary.main
  },
  headTableCell:{
    color: theme.palette.primary.main
  },
  buttons: {
    width: '0%'
  },
  seeMore: {
    marginTop: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  containerButtons: {
    height: 'fit-content',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  buttonsPage: {
    display: 'flex',
    backgroundColor: theme.palette.secondary.main
  },
  buttonsPageNone: {
    display: 'none'
  },
  page: {
    fontSize: "20px",
    display: 'flex',
    alignItems: 'center'
  }
}));

export default useStyles;
