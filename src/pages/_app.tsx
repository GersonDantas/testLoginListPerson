import { ThemeProvider } from "styled-components";
import Theme from "@styles/theme";
import Reset from "@styles/Reset";
import type { AppProps } from "next/app";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <Reset />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
export default App;
