import { makeStyles } from "@material-ui/core/styles";
import MyTheme from "@styles/materialTheme";
const {palette} = MyTheme

const useStyles = makeStyles((theme) => ({
  titleAppBar: {
    flexGrow: 1,
  },
  appBar: {
    background: palette.secondary.main,
  }
}));

export default useStyles