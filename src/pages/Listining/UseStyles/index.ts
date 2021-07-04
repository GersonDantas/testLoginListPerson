import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(3),
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
}));

export default useStyles;
