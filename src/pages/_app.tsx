import "@styles/Global.scss";
import type { AppProps } from "next/app";
import { MuiThemeProvider } from "@material-ui/core/styles";
import MyTheme from "@styles/materialTheme";
import { CssBaseline } from "@material-ui/core";
import { ContextProvider } from "@store/context";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ContextProvider>
        <MuiThemeProvider theme={MyTheme}>
          <CssBaseline />
          <Component {...pageProps} />
        </MuiThemeProvider>
      </ContextProvider>
    </>
  );
}
export default App;
