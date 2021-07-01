import { makeStyles } from "@material-ui/core/styles";
import Theme from '@styles/theme'

const useStyles = makeStyles((theme) => ({
  background: {
    background: Theme.colors.background,
    borderRadius: 5,
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  avatar: {
    margin: theme.spacing(1),
    backgroundColor: Theme.colors.primary,
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
