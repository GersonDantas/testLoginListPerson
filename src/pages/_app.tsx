import { ThemeProvider } from "styled-components"
import theme from "../../styles/theme"
import Reset from "../../styles/Reset";
import type { AppProps } from "next/app";
import CssBaseline from "@material-ui/core/CssBaseline";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
export default App;
