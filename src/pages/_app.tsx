import { ThemeProvider } from "styled-components";
import Theme from "@styles/theme";
import Reset from "@styles/Reset";
import type { AppProps } from "next/app";
import { MuiThemeProvider } from "@material-ui/core/styles";
import MyTheme from "@styles/materialTheme"

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <MuiThemeProvider theme={MyTheme}>
        <ThemeProvider theme={Theme}>
          <Reset />
          <Component {...pageProps} />
        </ThemeProvider>
      </MuiThemeProvider>
    </>
  );
}
export default App;
