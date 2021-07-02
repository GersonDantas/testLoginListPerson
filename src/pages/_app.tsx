import "@styles/Global.scss";
import type { AppProps } from "next/app";
import { MuiThemeProvider } from "@material-ui/core/styles";
import MyTheme from "@styles/materialTheme"
import { CssBaseline } from "@material-ui/core";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <MuiThemeProvider theme={MyTheme}>
        <CssBaseline />
          <Component {...pageProps} />
      </MuiThemeProvider>
    </>
  );
}
export default App;
