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
    widht: "100%",
    marginTop: theme.spacing(1),
  },

  submit: {
    color: theme.palette.primary.main,
    background: theme.palette.info.main,
    margin: theme.spacing(3, 0, 2)
  },
  titleAppBar: {
    flexGrow: 1,
  }
}));

export default useStyles
