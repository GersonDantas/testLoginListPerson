import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  background: {
    background: theme.palette.secondary.main,
  },
  backgroundContainer: {
    background: theme.palette.background.default,
    borderRadius: 10,
    boxShadow: '10px 10px 20px 10px rgba(0, 0, 0, 0.2) ',
    color: theme.palette.primary.main,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    height: "fit-content",
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.info.main,
  },
  
  form: {
    marginTop: theme.spacing(1),
  },
  inputs: {
    marginBottom: theme.spacing(4)
  },
  error: {
    color: theme.palette.error.main,
    margin: 0,
  },

  submit: {
    color: theme.palette.primary.main,
    background: theme.palette.info.main,
    margin: theme.spacing(3, 0, 2)
  },
  titleAppBar: {
    flexGrow: 1,
  },
  fake: {
    fontSize: '12px'
  }
}));

export default useStyles
