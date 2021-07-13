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
    position: 'relative',
    height: 'auto',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  buttonsPageRight: {
    position: 'absolute',
    right: '0%',
    display: 'flex',
    borderRadius: '50%',
    backgroundColor: theme.palette.secondary.main
  },
  buttonsPageLeft: {
    position: 'absolute',
    left: '0%',
    display: 'flex',
    borderRadius: '50%',
    backgroundColor: theme.palette.secondary.main
  },
  page: {
    position: 'absolute',
    left: '50%',
    top: '0%',
    transform: 'translate(-50%, 0%)',
    fontSize: "20px",
  }
}));

export default useStyles;
