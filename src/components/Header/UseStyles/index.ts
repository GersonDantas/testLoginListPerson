import { makeStyles } from "@material-ui/core/styles";
import Theme from '@styles/theme'

const useStyles = makeStyles((theme) => ({
  titleAppBar: {
    flexGrow: 1,
  },
  appBar: {
    background: Theme.colors.secondary,
  }
}));

export default useStyles