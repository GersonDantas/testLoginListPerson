import { makeStyles } from "@material-ui/core/styles";
import MyTheme from '@styles/materialTheme'

const {palette} = MyTheme

const useStyles = makeStyles((theme) => ({
  background: {
    background: palette.secondary.main,
  },
  backgroundContainer: {
    background: palette.background.default,
    borderRadius: 10,
    boxShadow: '10px 10px 20px 10px rgba(0, 0, 0, 0.2) ',
    color: palette.primary.main,
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  avatar: {
    margin: theme.spacing(1),
    backgroundColor: palette.info.main,
  },

  form: {
    widht: "100%",
    marginTop: theme.spacing(1),
  },

  submit: {
    margin: theme.spacing(3, 0, 2),
  },

  titleAppBar: {
    flexGrow: 1,
  }
}));

export default useStyles
