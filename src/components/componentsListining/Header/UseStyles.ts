import { makeStyles } from "@material-ui/core/styles";
import MyTheme from "@styles/materialTheme";

const useStyles = makeStyles((theme) => ({
  titleAppBar: {
    flexGrow: 1,
  },
  logoContainer:{
    position: "relative",
    height: "6vh",
    width: "10vw",
  },
  logo: {
    backgroundColor: theme.palette.info.main,
    borderRadius: 10,
    height: '100vh',
    width: '100vw',
  },
  appBar: {
    background: theme.palette.background.default,
  }
}));

export default useStyles