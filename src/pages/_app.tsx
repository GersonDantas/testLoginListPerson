import type { AppProps } from "next/app";
import { MuiThemeProvider } from "@material-ui/core/styles";
import MyTheme from "@styles/materialTheme";
import { CssBaseline } from "@material-ui/core";
import "@styles/Global.scss";

import { ListiningContextProvider } from "@store/context/ListiningContext";
import { AuthProvider } from "@store/context/AuthContext";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <AuthProvider>
        <ListiningContextProvider>
          <MuiThemeProvider theme={MyTheme}>
            <CssBaseline />
            <Component {...pageProps} />
          </MuiThemeProvider>
        </ListiningContextProvider>
      </AuthProvider>
    </>
  );
}
export default App;
